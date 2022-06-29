function generateTime(){
    var now = new Date()
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    m = addZeros(m)
    s = addZeros(s)
    //Search for our clock on our html
    document.getElementById("clock").innerText = h + ':' + m + ':' + s
    var t = setTimeout(generateTime, 500);
}

function addZeros(time){
    if(time < 10){
        time = "0"+time
    }
    return time
}

function checkQuiz(){
    let count = 0

    var ageElement = document.getElementById("age")
    var age = ageElement.options[ageElement.selectedIndex].value

    var foodElement = document.getElementById("food")
    var food = foodElement.options[foodElement.selectedIndex].value

    var languageElement = document.getElementById("language")
    var language = languageElement.options[languageElement.selectedIndex].value

    if(age === "20"){
        count++
    }

    if(food === "Tacos"){
        count++
    }

    if(language === "JavaScript"){
        count++
    }

    alert("You had: " + count + "/3 correct answers.")
}

function generateTime(){
    var now = new Date()
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    m = addZeros(m)
    s = addZeros(s)
    //Search for our clock on our html
    document.getElementById("clock").innerText = h + ':' + m + ':' + s
    var t = setTimeout(generateTime, 500);
}

function addZeros(time){
    if(time < 10){
        time = "0"+time
    }
    return time
}

function checkQuiz(){
    let count = 0

    var ageElement = document.getElementById("age")
    var age = ageElement.options[ageElement.selectedIndex].value

    var foodElement = document.getElementById("food")
    var food = foodElement.options[foodElement.selectedIndex].value

    var languageElement = document.getElementById("language")
    var language = languageElement.options[languageElement.selectedIndex].value

    if(age === "20"){
        count++
    }

    if(food === "Tacos"){
        count++
    }

    if(language === "JavaScript"){
        count++
    }

    alert("You had: " + count + "/3 correct answers.")
}

generateTime()
