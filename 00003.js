//commonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./00004-names')
const sayHi = require('./00005-utils')
const data = require('./00006-alternative-flavor')
require('./00007-mind-grenade')
console.log(names)
console.log(data)
sayHi('amit');
sayHi(names.john);
sayHi(names.peter);