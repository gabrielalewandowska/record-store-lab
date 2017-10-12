var Customer = function (budget) {
  this.budget = budget;
  this.collection = [];
}

Customer.prototype.buyRecord = function (record) {
  if(this.budget >= record.price) {
    this.collection.push(record);
    this.budget -= record.price;
  }
};

Customer.prototype.sellRecord = function (record) {
  this.collection.forEach(function(item) {
    if(item === record) {
      this.collection.splice(this.collection.indexOf(item), 1);
      this.budget += record.price;
    }
  }.bind(this))
};

Customer.prototype.getCollectionValue = function () {
  var recordValues = [];
  this.collection.forEach(function(item){
    recordValues.push(item.price);
  })

  return recordValues.reduce(function(sum, value){
    return sum + value;
  })
};

Customer.prototype.getValueByGenre = function (genre) {
  var albums = this.collection.filter(function(item){
    return item.genre === genre;
  })

  var albumValues = albums.map(function(album){
    return album.price;
  })

  return albumValues.reduce(function(sum, value){
    return sum + value;
  })
};

Customer.prototype.getRecordsByValue = function () {
  var sortedCollection = [];
    sortedCollection = this.collection.sort(function(a, b){
    return b.price - a.price;
  })

  return sortedCollection;
};

Customer.prototype.getMostValuableRecord = function () {
  return this.getRecordsByValue()[0];
};

module.exports = Customer;
