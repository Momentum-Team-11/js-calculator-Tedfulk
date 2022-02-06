// steps make the boxes clicky by selecting the box in JS as an object, then loop over the array/nodes, and then add and event listen to those objects. 
// Next make the buttons appear in box2
// An action needs to occur for the C (clear button), something for the = (eval), my X button to actually mean *



let buttons = document.querySelectorAll(".box");
let display = document.getElementById('display2');
let clear = document.getElementById("clear");
let equals = document.getElementById('equals');

for (let button of buttons) {
 button.addEventListener('click', () => {
  display.innerText += button.innerText
 });
};

clear.addEventListener('click', () => {
 display.innerText = ''
})

equals.addEventListener('click', () => {
console.log("button clicked")
display.innerText = eval(display.innerText)
});


// displays.forEach(function (inner){

// inner.addEventListener('click', (e) => {
//  console.log(e.target.innerText)
//   value.innerText += inner.innerText
  
//  })
// });

