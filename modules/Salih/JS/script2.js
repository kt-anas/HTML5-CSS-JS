// script2.js
// import  { sumarray } from './script1.js';
// import mysil, { sumarray } from './script1.js'
import * as lib from './script1.js';
import { sumarray as arraysum } from './script3.js';
// lib.sumarray([1, 2, 3, 4]);
lib.arraysum(3,4);
// lib.default(1,2);
console.log(lib);
