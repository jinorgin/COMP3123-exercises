var should = require('should');
var calc = require('./calculator');

calc.Add("a","b");

describe('Calculator',function(){
    describe('when used synchronously',function(){
        it('should add two numbers correctly', function(){
            calc.Add(2,2).should.equal(4);
        });
        it('two number that is not equal', function(){
            calc.Add(3,9).should.not.equal(4);
        });
    })
})