document.getElementById('printbutton').addEventListener('click',function(){window.print()})

document.getElementById("submitbutton").addEventListener('click',myWindow)
function myWindow()
{
    if (/\S+@\S+\.\S+/.test(document.getElementById('email').value)) {
        myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");

        myText += ("Name: " + document.getElementById('name').value + " Email: " + document.getElementById('email').value + " Goal: " + document.getElementById('goal').value + '<br> <br>')

        myText += ("Sunday: <br>Breakfast: " + document.getElementById('sunBreak').value);
        myText += (" Snack: " + document.getElementById('sunSnack1').value)
        myText += (" Lunch: " + document.getElementById('sunLunch').value)
        myText += (" Snack: " + document.getElementById('sunSnack2').value)
        myText += (" Dinner: " + document.getElementById('sunDinner').value + "<br>")

        myText += ("Monday: <br>Breakfast: " + document.getElementById('monBreak').value);
        myText += (" Snack: " + document.getElementById('monSnack1').value)
        myText += (" Lunch: " + document.getElementById('monLunch').value)
        myText += (" Snack: " + document.getElementById('monSnack2').value)
        myText += (" Dinner: " + document.getElementById('monDinner').value + "<br>")

        myText += ("Tuesday: <br>Breakfast: " + document.getElementById('tueBreak').value);
        myText += (" Snack: " + document.getElementById('tueSnack1').value)
        myText += (" Lunch: " + document.getElementById('tueLunch').value)
        myText += (" Snack: " + document.getElementById('tueSnack2').value)
        myText += (" Dinner: " + document.getElementById('tueDinner').value + "<br>")

        myText += ("Wednesday: <br>Breakfast: " + document.getElementById('wedBreak').value);
        myText += (" Snack: " + document.getElementById('wedSnack1').value)
        myText += (" Lunch: " + document.getElementById('wedLunch').value)
        myText += (" Snack: " + document.getElementById('wedSnack2').value)
        myText += (" Dinner: " + document.getElementById('wedDinner').value + "<br>")

        myText += ("Thursday: <br>Breakfast: " + document.getElementById('thuBreak').value);
        myText += (" Snack: " + document.getElementById('thuSnack1').value)
        myText += (" Lunch: " + document.getElementById('thuLunch').value)
        myText += (" Snack: " + document.getElementById('thuSnack2').value)
        myText += (" Dinner: " + document.getElementById('thuDinner').value + "<br>")

        myText += ("Friday: <br>Breakfast: " + document.getElementById('friBreak').value);
        myText += (" Snack: " + document.getElementById('friSnack1').value)
        myText += (" Lunch: " + document.getElementById('friLunch').value)
        myText += (" Snack: " + document.getElementById('friSnack2').value)
        myText += (" Dinner: " + document.getElementById('friDinner').value + "<br>")

        myText += ("Sunday: <br>Breakfast: " + document.getElementById('sunBreak').value);
        myText += (" Snack: " + document.getElementById('sunSnack1').value)
        myText += (" Lunch: " + document.getElementById('sunLunch').value)
        myText += (" Snack: " + document.getElementById('sunSnack2').value)
        myText += (" Dinner: " + document.getElementById('sunDinner').value + "<br>")

        myText += ("<button id='printbutton2'>Print/Download(Change Printer/Destination to save as PDF)</button>")
        myText += ("<script>document.getElementById('printbutton2').addEventListener('click',function(){window.print()})</script>")

        myText += ("</body>\n</html>");

        flyWindow = window.open('about:blank','myPop','width=800,height=400,left=200,top=200');
        flyWindow.document.write(myText);
}
    else{
        window.alert('Please enter a valid email address')
    }}

document.getElementById('clearbutton').addEventListener('click',function() {
    document.getElementById('sunBreak').value = ''
    document.getElementById('sunSnack1').value = ''
    document.getElementById('sunLunch').value = ''
    document.getElementById('sunSnack2').value = ''
    document.getElementById('sunDinner').value = ''

    document.getElementById('monBreak').value = ''
    document.getElementById('monSnack1').value = ''
    document.getElementById('monLunch').value = ''
    document.getElementById('monSnack2').value = ''
    document.getElementById('monDinner').value = ''

    document.getElementById('tueBreak').value = ''
    document.getElementById('tueSnack1').value = ''
    document.getElementById('tueLunch').value = ''
    document.getElementById('tueSnack2').value = ''
    document.getElementById('tueDinner').value = ''

    document.getElementById('wedBreak').value = ''
    document.getElementById('wedSnack1').value = ''
    document.getElementById('wedLunch').value = ''
    document.getElementById('wedSnack2').value = ''
    document.getElementById('wedDinner').value = ''

    document.getElementById('thuBreak').value = ''
    document.getElementById('thuSnack1').value = ''
    document.getElementById('thuLunch').value = ''
    document.getElementById('thuSnack2').value = ''
    document.getElementById('thuDinner').value = ''

    document.getElementById('friBreak').value = ''
    document.getElementById('friSnack1').value = ''
    document.getElementById('friLunch').value = ''
    document.getElementById('friSnack2').value = ''
    document.getElementById('friDinner').value = ''

    document.getElementById('satBreak').value = ''
    document.getElementById('satSnack1').value = ''
    document.getElementById('satLunch').value = ''
    document.getElementById('satSnack2').value = ''
    document.getElementById('satDinner').value = ''

    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('goal').value = ''
})