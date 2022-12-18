class CreateShape{
    constructor(shape){
        this.shape=shape
    }

    createShape(){
        return `${this.shape.length},${this.shape.breadth}`
    }
}

class ColorShape{
    constructor(createShape){
        this.createShape=createShape
    }
    color(){
        return this.createShape.createShape1()
    }
}

module.exports={Shape,CreateShape,ColorShape}