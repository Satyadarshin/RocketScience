// This function should manage the delay in building each row.
import { generateTableHead } from './tableHeadGenerator.js';
import { rowBuilder } from './rowBuilder.js';

const delay = (
  rowsToBuild,
  Winners,
  theContainer,
  nextHugo,
) => {
  if (typeof nextHugo === 'undefined') {
    nextHugo = 0;
    generateTableHead(theContainer, Winners);
  }
  if (rowsToBuild === 0) {
    console.log('End of row building.');
  } else {
    setTimeout(() => {
      console.log(typeof theContainer);
      rowBuilder(Winners[nextHugo], theContainer, nextHugo);
      rowsToBuild--;
      nextHugo++;
      delay(rowsToBuild, Winners, theContainer, nextHugo);
    }, 1000);
  }
};
export { delay as default };
