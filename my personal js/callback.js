function greet(name){
    console.log ('Hello!', name)
    Goodbye();
}

function Goodbye(){
    console.log('Goodbye!')
}

console.log(greet('jeremiah', Goodbye))