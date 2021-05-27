var headerTitle = document.getElementById("title-to-color");
var buttonState = true;

function sayCeva() {
    alert("Hai noroc");
    console.log('buna');
    const a = 4;
    let c = 4 + a;
    console.log('valoarea lui c = ', c);
}

var object = {
    name:'Ioana',
    company: 'Kronsoft',
    sayHello: sayCeva()
}

function changeTitleColor(){

    console.log(this);
    document.getElementById("title-to-color").style.color = 'red';
    if(buttonState === true){
        document.getElementById("title-to-color").style.color = 'pink';
        buttonState = false;
    }else{
        document.getElementById("title-to-color").style.color = 'green';
        buttonState = true;
    }
}

var changeTitle = () => {
    console.log("intru");
    document.getElementById("title-to-color").style.color = 'red';
    if(buttonState === true){
        document.getElementById("title-to-color").style.color = 'pink';
        buttonState = false;
    }else{
        document.getElementById("title-to-color").style.color = 'green';
        buttonState = true;
    }
}
