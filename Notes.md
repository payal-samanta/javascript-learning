DAY - 1 BASIC
-- Console_playground--
* Js- a programming lang. that add interactivity to websites.
* HTML = structure (skeleton), CSS = style (looks), JS = behavior (actions).
* 2. Client-side vs Server-side JS
     Client-side JS → Runs in the browser (e.g., when you click a button → popup).
     Server-side JS → Runs on a server using Node.js (used for backend apps, APIs).
* 3. JS in Browsers vs Node.js
     Browsers → JavaScript works with the DOM (Document Object Model) to control web pages.
     Node.js → JavaScript can run outside browsers (e.g., building servers, command-line apps).
* 4. Embedding JS into HTML
     - (a) Inline JS
        <button onclick="alert('Hello!')">Click Me</button>
     - (b) Internal JS
        <!DOCTYPE html>
        <html>
          <body>
           <script>
              alert("Hello from internal JS!");
           </script>
          </body>
        </html>
     - (c) External JS (Best Practice ✅)
         <!-- index.html -->
         <!DOCTYPE html>
         <html>
           <body>
            <script src="Filename.js"></script>
           </body>
          </html>
        // filename.js
            alert("Hello from external JS!");
* 5. Console Methods
     The console is like a secret notebook inside the browser where developers can see what’s happening in their code.
     1. console.log() → prints normal messages
         console.log("Hello, Payal! 🚀");
     2. console.error() → prints errors in red
         console.error("Something went wrong ❌");
     3. console.warn() → prints warnings in yellow
         console.warn("Be careful! This is just a warning ⚠️");
     4. console.table() → prints arrays/objects in a table
         let skills = ["HTML", "CSS", "JavaScript"];
         console.table(skills);
* 6. Debugging = fixing errors in code
     Tools for Debugging:
     1. console.log() → Print values to check if they are correct.
        Example:
         let x = 10;
         console.log("Value of x:", x); // prints: Value of x: 10
     2. Breakpoints → You can pause your code at a specific line.
        Open DevTools → Sources tab → click on line number in your JS file → Blue marker = breakpoint.
        When you refresh the page, code pauses at that line → you can check values.
     3. Watch Expressions → In DevTools, you can “watch” a variable and see how it changes as code runs.

--Temperature_Converter--
* 1. A variable is like a box where you store data.
     1. var = Allows redeclaration
     2. let = Cannot redeclare in the same block
     3. const = Use const for fixed values (like pi, API_KEY).

* 2. Hoisting
     JavaScript moves variable declarations to the top of their scope before execution.
      console.log(a); // undefined (because var is hoisted)
      var a = 10;

     console.log(b); // ❌ Error (ReferenceError)
     let b = 20;
    
* 3. Data Types
     (A) Primitive Data Types (simple values)
         string → "Hello", 'Payal'
         number → 42, 3.14
         boolean → true, false
         null → empty value
         undefined → declared but no value
         symbol → unique identifier
         bigint → very large numbers
        
    (B) Reference Data Types (complex values)
         Object → { key: value }
         Array → [1, 2, 3]
         Function → function() { ... }
         


























