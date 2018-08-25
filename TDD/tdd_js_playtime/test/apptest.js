/*
test files should mimic the folder structure. 
example: if users folder in application, users folder in test folder to test for each file.

If you have A LOT of functions, instead of all the requires at the top, you can just have the app require active, 
and then just add app. in front of the functions contained in the result variable.

*/



const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app'); //using '../app' because we are telling apptest.js to look one level up outside 
//to get file.


//Results

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);



describe('App', function() {
  describe('1) sayHello()', function() {
    it('sayHello should return hello', function(){
      //let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });
  
    it('sayHello should return type: string', function(){
      //let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  

  describe('2) addNumbers()', function(){
    it('addNumbers should be above 5', function(){
      //let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });
  
    it('addNumbers should return type: number', function(){
     // let result = app.addNumbers();
      assert.typeOf(addNumbersResult, 'number');
    });  
  });

  

  /*
  it('addNumbers should return type: number'), function(){
    let result = addNumbers();
    assert.typeOf(result, number);
  }
  */

});
