var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function () {
  return this.inventory.map(function(record){
    return record;
  })
};

Store.prototype.sellRecord = function (record) {

  this.inventory.forEach(function(item){
    if (item === record){
      this.inventory.splice(this.inventory.indexOf(item), 1);
      this.balance += item.price;
    }
  }.bind(this))
};

Store.prototype.getFinancialSituation = function () {
  var inventoryValues = [];
    this.inventory.forEach(function(item){
      inventoryValues.push(item.price);
    })

  var inventory = inventoryValues.reduce(function(sum, value){
    return sum + value;
  })

  return this.balance + inventory;
};

Store.prototype.getByGenre = function (genre) {
  return this.inventory.filter(function(item) {
    return item.genre === genre;
  })
};

module.exports = Store;
