const { Circle } = require("./shapes")
const SVG = require("./svg")

test ("should render 300x200 svg element", () => {
    const svg = new SVG ()
    expect (svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>')
}) 

test ("should set text message and color", ()=>{
    const svg = new SVG ()
    svg.setText ("txt", "green")
    expect (svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">txt</text></svg>')
})

test ("should throw error if text is greater than 3 characters", () => {
    const svg = new SVG ()
    expect (()=>svg.setText("text", "green")).toThrow(new Error ("Text cannot exceed 3 characters"))
})

test ("should include requested shape", ()=> {
    const svg = new SVG ()
    svg.setText ("txt", "green")
    const shape = new Circle ()
    shape.setColor("green")
    svg.setShape(shape)
    expect (svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">txt</text></svg>')
})