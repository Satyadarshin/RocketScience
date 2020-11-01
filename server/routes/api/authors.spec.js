const { MongoClient } = require('mongodb');
const faker = require('faker');
const authorsApi = require('./authors');

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

    it('should fetch the authors collection from the database', async () => {
      const authors = db.collection('Authors');
      const mockAuthor = { name: faker.random.word() };
      authors.insertOne(mockAuthor);

      const fetchedAuthors = await authorsApi.loadAuthorsCollection();
      await expect(fetchedAuthors).toEqual([mockAuthor]);
    });
  });
});
