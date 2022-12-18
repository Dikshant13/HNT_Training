
let {Shape,CreateShape,ColorShape} = require('../src/shape')

describe('color shape testing',function(){
    it('should call createShape', function (){
        let shape = new Shape(length,40, breadth,20)
        let createShape = new CreateShape(shape)
        let colorShape = new colorShape(createShape)

        spyOn(createShape,'createShape1').and.returnValue( val ,"40 20")
        expect(colorShape.color()).toEqual( expected ,"40 20")
    });
});