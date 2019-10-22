/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-default */

// Sort alphabetically to find stuff easily
import { default as Bar } from './components/Bar/Bar';
import { default as RelativeBar } from './components/Bar/RelativeBar';
import { default as Responsive } from './components/Misc/Responsive';
import { default as TimeXAxis } from './components/TimeXAxis/TimeXAxis';

// Sort alphabetically to find stuff easily
const Components = {
  Bar,
  RelativeBar,
  TimeXAxis,
  Responsive,
};

// Sort alphabetically to find stuff easily
export { Bar };
export { RelativeBar };
export { Responsive };
export { TimeXAxis };

export default Components;
