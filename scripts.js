const time =document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus");
let body = document.getElementById("body")

//Show time

function showTime(){
    let today = new Date(),
    hour= today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds();
     


    //Set AM or PM

    const amPm = hour >= 12? "PM": "AM"

    //12hr Format
    hour = hour % 12 || 12;
    
    //Output time

    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:<span>${addZero(seconds)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000)

}
//Add zeros
function addZero(n){
    return (parseInt(n, 10) < 10? '0':'')+ n;
}

//options show AM PM
const showAmPm = true;

//Set Background and greeting
function setBg(){
    let today = new Date,
    hour = today.getHours(),
    random = Math.ceil(Math.random()*5 + 1)
    console.log(random)

    if(hour < 12){
        body.style.backgroundImage = "url(img/morning.jpg)"
        greeting.textContent = "Good Morning"
        focus.textContent = "Study HTML,CSS and a little of JS"
    }else if(hour >=12 && hour <= 18){
        if(hour == 13){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
        greeting.textContent = "Good Afternoon"
        focus.textContent = "Study Hard JS"
        body.style.color="#fff"
        

        }else if(hour == 14){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
            greeting.textContent = "Good Afternoon"
            focus.textContent = "Study Hard JS"
            body.style.color="#fff"
        } else if(hour == 15){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
            greeting.textContent = "Good Afternoon"
            focus.textContent = "Study Hard JS"
            body.style.color="#fff"
        }else if(hour == 16){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
            greeting.textContent = "Good Afternoon"
            focus.textContent = "Study Hard JS"
            body.style.color="#fff"
        }else if(hour == 17){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
            greeting.textContent = "Good Afternoon"
            focus.textContent = "Study Hard JS"
            body.style.color="#fff"
        } else if(hour == 18){
            body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(img/afternoon-${random}.jpg)`
            greeting.textContent = "Good Afternoon"
            focus.textContent = "Study Hard JS"
            body.style.color="#fff"
        }
        


    }else{
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        body.style.color ='white'
        focus.textContent = "Keep Studying JS"
    }if(hour == 19){
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        focus.textContent = "Study Hard JS"
        body.style.color="White"
    } else if(hour == 20){
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        focus.textContent = "Study Hard JS"
        body.style.color="White"
    }else if(hour == 21){
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        focus.textContent = "Study Hard JS"
        body.style.color="White"
    }else if(hour == 22){
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        focus.textContent = "Study Hard JS"
        body.style.color="White"
    } else if(hour == 23){
        body.style.backgroundImage = `url(img/night-${random}.jpg)`
        greeting.textContent = "Good Night"
        focus.textContent = "Study Hard JS"
        body.style.color="White"
    }


    }

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = "[Enter Name]"
    }else{
        name.textContent = localStorage.getItem('name')
    }
    
}
//Set name

function setName(e){
    if(e.type== "keypress"){
       //make sure enter is pressd
       if(e.which==13 || e.keyCode ==13){
        localStorage.setItem('name', e.target.innerText)
        name.blur()
       }
    }else{
        localStorage.setItem('name', e.target.innerText)
    }
}
//// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = "[Enter Focus]"
    }else{
        focus.textContent = localStorage.getItem('focus')
    }
    
}
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

getName()
getFocus()

setBg()

//Run
showTime()
