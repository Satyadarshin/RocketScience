const { MongoClient } = require('mongodb');
const faker = require('faker');
const request = require('supertest');
const app = require('../../app');

describe('Authors API', () => {

  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db('Dragon');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  describe('GET /authors/', () => {

    let mockAuthors;

    beforeEach(() => {
      mockAuthors = [
        { name: faker.random.word(), _id: faker.random.alphaNumeric(15) },
        { name: faker.random.word(), _id: faker.random.alphaNumeric(15) },
      ];
    });

    it('should fetch the authors collection from the database', async () => {
      const authors = db.collection('Authors');
      authors.insertMany(mockAuthors);

      return request(app)
        .get('/api/authors')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(mockAuthors);
        });
    });

    it('should fetch the authors which match the given query if a query is supplied', async () => {
      const mockQuery = { name: mockAuthors[0].name };
      const authors = db.collection('Authors');
      authors.insertMany(mockAuthors);

      return request(app)
        .get('/api/authors')
        .query(mockQuery)
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual([mockAuthors[0]]);
        });
    });
  });
});
