var counter = 0;
var time;

function buttonPress()  {
    var Button = document.getElementById("btn");
    var CountText = document.getElementById("counter");

    if (counter == 0)   {
        time = (new Date()).getTime();
        document.getElementById("intro").innerHTML = "Press the button below 20 times at what you <br> perceive    to be  roughly one second interval. <br> <br> <br>";
        document.getElementById("buffer").insertAdjacentHTML("afterbegin", "<span style=\"display:block; height: 0em;\"></span>");
        Button.innerHTML = "Click"
    }

    if (counter == 20)  { //when the counter was 19 and I pressed it for the 20th time
        var diff = (new Date()).getTime() - time;
        CountText.innerHTML = diff/1000;
        Button.disabled = true;
        Button.innerHTML = "Stop!";
    }   else    {
        CountText.innerHTML = counter;
        counter++;
    }
}
