/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author cycasli
*/
module.exports = function(content) {
  return "module.exports = " + JSON.stringify(content);
}