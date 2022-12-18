const helloWorld =require('../src/assignment')

describe(" testing helloWorld function",function(){
    if("test return value of helloWorld",function(){
        expect(helloWorld()).toEqual( expected, "Hello World");
    });
}); 