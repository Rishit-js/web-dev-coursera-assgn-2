let names = ["Yaakov", "John", "Jen","Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function callout (){
for (let element of names){
    let firstLetter = element.charAt(0).toLowerCase();
    if(firstLetter === 'j'){
        console.log("Goodbye " + element)
    }else{console.log("Hello " + element)}
}
}
callout();