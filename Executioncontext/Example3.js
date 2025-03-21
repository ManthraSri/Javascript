function out() {
    console.log("Outer Function");
    function inside() {
        console.log("Inner Function");
    }
 inside();}
out(); 

