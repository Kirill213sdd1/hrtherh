function hello (){
//     alert(window.innerHeight)
//     alert(navigator.userAgent)
    // alert(location.href)
    
}
window.hello()

// document.body.style.background = 'black'
// setTimeout(() => document.body.style.background = 'white', 1000)


// for (let i = 0; i < document.body.childNodes.length; i++ ){
//     console.log(document.body.childNodes[i]);
// }

console.log(document.body.firstChild);

for (let i of document.body.childNodes){
    console.log(i);
}

console.log(Array.from(document.body.childNodes))
