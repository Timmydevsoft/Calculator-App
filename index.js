const themeOneIndicator = document.getElementById("first-theme");
const themeTwoIndicator = document.getElementById("second-theme");
const themeThreeIndicator = document.getElementById("third-theme");

const body = document.querySelector(".body");
const indicatorNumbers = document.querySelectorAll("indicator-numer");

const screenContainer = document.querySelector(".display-container");
const buttons = document.querySelectorAll(".btn");
const sCreen = document.getElementById("screen");

const themeButton = document.querySelectorAll(".themes");

themeButton[0].style.background = "hsl(6, 63%, 50%)"
themeButton.forEach(e=>{
    e.addEventListener("click", (t)=>{

        themeButton.forEach((t) =>{
            t.style.background = "none";
        })
        

        t.currentTarget.style.backgroundColor = "hsl(6, 63%, 50%)";
        let tHeme = t.currentTarget.classList;
        if (tHeme.contains("Two")){
            t.currentTarget.style.backgroundColor = "hsl(25, 98%, 40%)";
            removebgThree();
            bgTwo();

        }

        else if(tHeme.contains("Three")){
            t.currentTarget.style.backgroundColor = "hsl(176, 100%, 44%)";
            removeBgTwo();
            bgThree ();
        }

        else{
            removeBgTwo();
            removebgThree();
        }
    })
})

const bgTwo = ()=>{
    body.classList.add("themeTwo");
    document.getElementById("calc").classList.add("themeTwo");
    document.getElementById("theme-text").classList.add("themeTwo");

    document.querySelectorAll(".indicator-numer").forEach((idnumber)=>{
        idnumber.classList.add("themeTwo");
     });

    document.querySelector(".theme-color-container").classList.add("themeTwo");
    screenContainer.classList.add("themeTwo");
    sCreen.classList.add("themeTwo");
    document.querySelector(".keyboard-container").classList.add("themeTwo");
    
    buttons.forEach(one =>{
        one.classList.add("themeTwo");
    })

    document.getElementById("reset").classList.add("themeTwo");
    document.getElementById("del").classList.add("themeTwo");
    document.getElementById("equal").classList.add("themeTwo");
}


const removeBgTwo = ()=>{
    body.classList.remove("themeTwo");
    document.getElementById("calc").classList.remove("themeTwo");
    document.getElementById("theme-text").classList.remove("themeTwo");

    document.querySelectorAll(".indicator-numer").forEach((idnumber)=>{
        idnumber.classList.remove("themeTwo");
    });

    document.querySelector(".theme-color-container").classList.remove("themeTwo");
    screenContainer.classList.remove("themeTwo");
    sCreen.classList.remove("themeTwo");
    document.querySelector(".keyboard-container").classList.remove("themeTwo");
    buttons.forEach(one =>{
        one.classList.remove("themeTwo");
    })
    document.getElementById("reset").classList.remove("themeTwo");
    document.getElementById("del").classList.remove("themeTwo");
    document.getElementById("equal").classList.remove("themeTwo");
}

const bgThree = ()=>{
    body.classList.add("themeThree");
    document.getElementById("calc").classList.add("themeThree");
    document.getElementById("theme-text").classList.add("themeThree");

    document.querySelectorAll(".indicator-numer").forEach((idnumber)=>{
        idnumber.classList.add("themeThree");
     });

    document.querySelector(".theme-color-container").classList.add("themeThree");
    screenContainer.classList.add("themeThree");
    sCreen.classList.add("themeThree");
    document.querySelector(".keyboard-container").classList.add("themeThree");
    buttons.forEach(one =>{
        one.classList.add("themeThree");
    })
    
    document.getElementById("reset").classList.add("themeThree");
    document.getElementById("del").classList.add("themeThree");
    document.getElementById("equal").classList.add("themeThree");
}

const removebgThree = ()=>{
    body.classList.remove("themeThree");
    document.getElementById("calc").classList.remove("themeThree");
    document.getElementById("theme-text").classList.remove("themeThree");

    document.querySelectorAll(".indicator-numer").forEach((idnumber)=>{
        idnumber.classList.remove("themeThree");
     });

    document.querySelector(".theme-color-container").classList.remove("themeThree");
    screenContainer.classList.remove("themeThree");
    sCreen.classList.remove("themeThree");
    document.querySelector(".keyboard-container").classList.remove("themeThree");
    buttons.forEach(one =>{
        one.classList.remove("themeThree");
    })
    document.getElementById("reset").classList.remove("themeThree");
    document.getElementById("del").classList.remove("themeThree");
    document.getElementById("equal").classList.remove("themeThree");
}






let oprationValue = "";
let inputShow = "";


buttons.forEach(e => {
    e.addEventListener("click", (p)=>{
        let checker = p.currentTarget.classList
        if(checker.contains("Seven")){
           
            oprationValue = oprationValue+ 7;
            inputShow= String( inputShow)+String('7');
            
            sCreen.value = `${inputShow}`;

        }

        else if(checker.contains("Eight")){
            oprationValue = oprationValue+ 8;
            inputShow= String(inputShow)+String('8');
            sCreen.value = `${inputShow}`;
        }
        else if(checker.contains("Nine")){
            oprationValue = oprationValue+ 9;
            inputShow= String(inputShow)+String('8');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Del")){
            oprationValue =  oprationValue.slice(0,-1);
            inputShow= inputShow.slice(0,-1);
            sCreen.value = `${inputShow}`;
        }
        else if(checker.contains("Four")){
            oprationValue = oprationValue+4;
            inputShow= String(inputShow)+String('4');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Five")){
            oprationValue = oprationValue+ 5;
            inputShow= String(inputShow)+String('5');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Six")){
            oprationValue = oprationValue+6;
            inputShow= String(inputShow)+String('6');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Plus")){

            oprationValue = oprationValue+ "+";
            inputShow= String(inputShow)+String('+');
            sCreen.value = `${oprationValue}`;
            

        }

        else if(checker.contains("One")){
            oprationValue = oprationValue+ 1;
            inputShow= String(inputShow)+String('1');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Two")){
            oprationValue = oprationValue+2;
            inputShow= String(inputShow)+String('2');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Three")){
            oprationValue = oprationValue+ 3;
            inputShow= String(inputShow)+String('3');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Minus")){
            oprationValue = oprationValue+ "-";
            inputShow= String(inputShow)+String('-');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Point")){
            oprationValue = oprationValue+ ".";
            inputShow= String(inputShow)+String('.');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Zero")){
            oprationValue = oprationValue+ 0;
            inputShow= String(inputShow)+String('0');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Divide")){
            oprationValue = oprationValue+ "/";
            inputShow= String(inputShow)+String('/');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Times")){
            oprationValue = oprationValue+ "*"
            inputShow= String(inputShow)+String('x');
            sCreen.value = `${inputShow}`;
        }

        else if(checker.contains("Reset")){
            oprationValue = ""
            inputShow = "";
            sCreen.value = `${inputShow}`;
        }

        else{
            let lastd = eval(oprationValue)
            sCreen.value = `${lastd}`;
        
        }

    })
});