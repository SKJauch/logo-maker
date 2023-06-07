const inquirer = require("inquirer")
const SVG = require("./lib/svg")
const {Circle, Triangle, Square} = require("./lib/shapes")
const fs = require("fs")

inquirer.prompt([
    {type:"input", 
     name:"text",
     message:"What text would you like for your logo?",  
    },

    {type:"input",
    name:"fontColor",
    message:"What color would you like the text to be?",

    },
    {type:"list",
    name:"shape",
    message:"Which shape would you like your logo to be?",
    choices:["Circle", "Square", "Triangle"],

    },
    {type:"input",
    name:"shapeColor",
    message:"What color would you like your shape to be?",

    },
])
.then(answer => {
    let shape;
    if (answer.shape==="Circle"){
        shape=new Circle()
    }
    if (answer.shape==="Triangle"){
        shape=new Triangle()
    }
    if (answer.shape==="Square"){
        shape=new Square()
    }
    shape.setColor(answer.shapeColor)
    const svg = new SVG()
    svg.setText(answer.text,answer.fontColor)
    svg.setShape(shape)
    fs.writeFileSync("logo.svg", svg.render())
})