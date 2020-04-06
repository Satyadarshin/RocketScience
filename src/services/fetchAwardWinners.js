const fetchAwardWinners = (awardingBody) => {
    console.log('bar')
    fetch('@/data/' + awardingBody + '.json')
    .then((response) => response.json())
}

export default {
   name: "fetchAwardWinners"
}
