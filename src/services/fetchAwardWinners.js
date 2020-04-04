const fetchAwardWinners = (awardingBody) => {
    fetch(`../data/${awardingBody}.json`)
    .then((response) => response.json())
}

export default {
    fetchAwardWinners
}
