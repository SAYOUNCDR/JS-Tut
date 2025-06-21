/* 
🔁 JavaScript Execution Context Explained (with example)

1️⃣ Types of Execution Context:
   - Global Execution Context (GEC): Created when JS code runs, attached to `window` in browsers.
   - Function Execution Context (FEC): Created every time a function is invoked.
   - Eval Execution Context: (Rare) created when `eval()` is used.

2️⃣ Execution Phases (applies to GEC & FEC):
   a) Memory Creation Phase (Hoisting)
      - All variables declared with `var` are set to `undefined`
      - Functions are hoisted with their definitions

   b) Execution Phase
      - Code runs top to bottom
      - Variables are assigned real values
      - Functions are invoked; a new FEC is created for each call

3️⃣ Each function call gets its own execution context,
    which is pushed to the call stack and popped when done.

🧠 Example:
*/

function greet() {
  var name = "Sayoun";
  console.log("Hello, " + name);
}

var age = 21;
greet(); // New Function Execution Context is created here

/* 
  📝 How JS handles it:
  
  1. Creates Global Execution Context:
     - Memory Phase:
       var age → undefined
       function greet → [Function]
     - Execution Phase:
       age = 21
       greet() → New Function Execution Context (FEC)
  
  2. Inside greet():
     - Memory Phase:
       var name → undefined
     - Execution Phase:
       name = "Sayoun"
       console.log → "Hello, Sayoun"
     - FEC destroyed after execution
  
  📌 The call stack handles all this behind the scenes.
  */
