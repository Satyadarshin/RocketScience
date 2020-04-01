
const getHugos = () => fetch('../data/hugo_award_novels.json')
  .then((response) => response.json());

export default {
  getHugos,
};
