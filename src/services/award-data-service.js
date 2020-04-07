const fetchAward = (awardHistory) => {
    fetch(`/data/${awardHistory}.json`)
    .then((response) => response.json())
}

export default {
   fetchAward
}
