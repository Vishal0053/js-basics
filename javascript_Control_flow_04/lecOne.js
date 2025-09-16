 
/* the comparison operators are used with control statements they are listed below:-
    <,>,<=,>=,!=,==,===(strict equal to),!==
    here the difference between "strict equal too" and "normal equal too" is 
    strict equal to compares values along with with there data type it will return true only if the
    comparison is between same data type and is equal on the other hand normal equal to compares only values
    for eg. 2=="2" is true when comparing with "normal equal too" 
    while 2==="2" is false when used with strict or "triple equal too"
*/

// if control flow statement 

if (2=="2"){
    console.log("Executed with double equal too");
}

if (2==="2") {
    // this scope block will never be executed
    console.log("executed with triple equal too ");
    
}