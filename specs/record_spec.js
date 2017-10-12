var assert = require('assert');
var Record = require('../record.js');

describe("Record Test", function(){

  beforeEach(function(){
    record1 = new Record("Taylor Swift", "1989", "pop", 15);
  })

  it("has an artist", function(){
    assert.strictEqual(record1.artist, "Taylor Swift");
  })

  it("has a title", function(){
    assert.strictEqual(record1.title, "1989");
  })

  it("has a genre", function(){
    assert.strictEqual(record1.genre, "pop");
  })

  it("has a price", function(){
    assert.strictEqual(record1.price, 15);
  })

  it("can get record's properties as a string", function(){
    assert.strictEqual(record1.getProperties(), "Artist: Taylor Swift, title: 1989, genre: pop, price: 15");
  })

  

})
