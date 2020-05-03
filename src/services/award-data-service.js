const fetchTextRecords = (textRecord) => 
    fetch(`/data/${textRecord}.json`)
    .then((response) => response.json())


export default {
   fetchTextRecords
}
