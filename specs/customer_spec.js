var assert = require('assert');
var Customer = require('../customer.js');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Customer Test", function(){

  beforeEach(function(){
    customer1 = new Customer(30);
    store1 = new Store("Record Store", "Edinburgh");
    record1 = new Record("Taylor Swift", "1989", "pop", 15);
    record2 = new Record("Lady Gaga", "Gaga", "pop", 10);
    record3 = new Record("Metallice", "St. Anger", "metal", 2);
  })

  it("customer starts with a budget", function() {
    assert.strictEqual(customer1.budget, 30);
  })

  it("Customer starts with an empty collection", function() {
    assert.strictEqual(customer1.collection.length, 0);
  })

  it("customer can buy a record", function() {
    customer1.buyRecord(record1);
    assert.strictEqual(customer1.collection.length, 1);
    assert.strictEqual(customer1.budget, 15);
  })

  it("customer can sell a record", function() {
    customer1.buyRecord(record1);
    customer1.sellRecord(record1);
    assert.strictEqual(customer1.budget, 30);
  })

  it("can view the total value of their collection", function(){
    customer1.buyRecord(record1);
    customer1.buyRecord(record3);
    assert.strictEqual(customer1.getCollectionValue(), 17);
  })

  it("can view total value of records by genre", function(){
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    assert.strictEqual(customer1.getValueByGenre("pop"), 25);
  })

  it("can sort record by value", function(){
    customer1.buyRecord(record3);
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    assert.deepEqual(customer1.getRecordsByValue(), [record1, record2, record3]);
  })

  it("can view the most valuable record", function(){
    customer1.buyRecord(record3);
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    assert.deepEqual(customer1.getMostValuableRecord(), record1);
  })

})
