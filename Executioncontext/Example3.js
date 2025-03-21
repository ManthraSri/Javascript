function out() {
    console.log("Outer Function");  // OUTER FUNCTION EXECUTION CONTEXT
    function inside() {
        console.log("Inner Function"); // INNER FUNCTION EXECUTION CONTEXT
    }
 inside();}
out(); 

