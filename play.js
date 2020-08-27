'use strict';

/*function Cat(name, color)
{
    this.name = name
    this.color = color
}
let fluffy = new Cat("fluffy", "white")

Cat.phototype.age = 3
console.log(Cat.phototype)*/


function Animal(voice)
{
    this.voice = voice || "grunt"
}

Animal.prototype.speak = function ()
{
    display(this.voice)
}

function Cat(name, color)
{
    Animal.call(this, "meooow")
    this.name = name
    this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
let fluffy = new Cat('fluffy', 'White')

fluffy.speak()