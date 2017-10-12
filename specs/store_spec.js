var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');

describe("Store Test", function(){


  beforeEach(function(){
    store1 = new Store("Record Store", "Edinburgh");
    record1 = new Record("Taylor Swift", "1989", "pop", 15);
    record2 = new Record("Lady Gaga", "Gaga", "pop", 20);
    record3 = new Record("Metallice", "St. Anger", "metal", 10);
  })

  it("Has a store name", function() {
    assert.strictEqual(store1.name, "Record Store");
  })

  it("Has a city", function() {
    assert.strictEqual(store1.city, "Edinburgh");
  })

  it("Has an inventory that starts empty", function() {
    assert.strictEqual(store1.inventory.length, 0);
  })

  it("Has the ability to add records to inventory", function() {
    store1.addRecord(record1);
    assert.strictEqual(store1.inventory.length, 1);
  })

  it("Has a balance that starts at nothing", function() {
    assert.strictEqual(store1.balance, 0);
  })

  it("can list inventory", function(){
    store1.addRecord(record1);
    assert.deepEqual(store1.listInventory(), [record1]);
  })

  it("selling a record increases the store's balance", function(){
    store1.addRecord(record1);
    store1.sellRecord(record1);
    assert.strictEqual(store1.balance, 15);
  })

  it("can get the financial situation of the store", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.sellRecord(record1);
    assert.strictEqual(store1.getFinancialSituation(), 45);
  })

  it("can return records of a given genre", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    assert.deepEqual(store1.getByGenre("pop"), [record1, record2]);
  })

})
