// IIFE (Immediately Invoked Function Expression)

// 📌 Avoid polluting the global scope
//    Keeps variables and functions local, preventing conflicts in the global namespace.

// 📌 Execute code immediately
//    Useful for setup or configuration code that needs to run once when the script loads.

// 📌 Create private scopes
//    Variables inside the IIFE are not accessible from outside, ensuring encapsulation.

//** Named IFFE
(function dbconnection() {
    console.log(`DB CONNECTED`);
})();

    
//** Arrow IFFE Function 
((name) => {
    console.log(`DB CONNETED FOR ${name}`);
})("SAYOUN");
