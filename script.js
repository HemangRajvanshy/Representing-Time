var counter = 0;
var time;
function buttonPress()  {
    if (counter == 0)   {
        var d = new Date();
        time = d.getTime();
        document.getElementById("intro").innerHTML = "Press the button below 20 times at what you <br> perceive    to be  roughly one second interval. <br> <br> <br>";
        document.getElementById("buffer").insertAdjacentHTML("afterbegin", "<span style=\"display:block; height: 0em;\"></span>");

    }

    if (counter == 20)  { //when the counter was 19 and I pressed it for the 20th time
        var d = new Date();
        var diff = d.getTime() - time;
        document.getElementById("counter").innerHTML = diff/1000;

    }   else    {
        document.getElementById("counter").innerHTML = counter;
        counter++;
    }
}
