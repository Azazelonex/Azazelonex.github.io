//first
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};
  
//second
Array.prototype.improvedSort = Array.prototype.sort;

Array.prototype.sort = function(func) {
    return [...this].improvedSort(func);
}
  
//third
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;