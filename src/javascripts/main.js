import printHTMl from './components/printHTML';
import domEvents from './helpers/domEvents';

import '../styles/main.scss';

const init = () => {
  printHTMl('body');
  domEvents();
};

init();
