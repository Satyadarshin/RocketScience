const fetchGenreCollection = (collection) => 
    fetch(`http://localhost:5000/api/${collection}`)
    .then((response) => response.json())

export default {
    fetchGenreCollection
}
