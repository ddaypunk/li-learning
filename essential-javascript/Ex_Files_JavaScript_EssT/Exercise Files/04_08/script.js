function logScope(){
    var localVar = 2;

    if(localVar){
        let localVar = "I'm different!";
        console.log("Nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
    
    let something = 5;
}

logScope();
