const fetchAward = (awardHistory, category) => {
    fetch('@/data/' + awardHistory + '.json')
    .then((response) => response.json())
    //Extract award category, eg. best novel
}

export default {
   fetchAward
}
