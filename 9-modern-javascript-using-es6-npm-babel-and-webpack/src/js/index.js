import str from './models/Search';
// import { add as a, multiply as m, ID } from './views/searchView';
import * as searchView from './views/searchView';

//console.log(`imported funcs ${a(ID, 2)}, ${m(3, 5)}, ${str}`);
console.log(`imported funcs ${searchView.add(searchView.ID, 2)}, ${searchView.multiply(3, 5)}, ${str}`);