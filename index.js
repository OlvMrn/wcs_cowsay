const infos = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
  text : `${infos.name}
${infos.campus}`,
  e : "xX",
  T : "V"
}));