var counter = 0;
var time;
var CountText, Button;

document.getElementById("reload").style.display = "none";

function buttonPress()  {
    Button = document.getElementById("btn");
    CountText = document.getElementById("counter");

    if (counter == 0)   {
        init();
    }
    if (counter == 20)  { //when the counter was 19 and I pressed it for the 20th time
        end();
    }   else    {
        CountText.innerHTML = counter;
        counter++;
    }
}

function init() {
    time = (new Date()).getTime();
    document.getElementById("intro").innerHTML = "Press the button below 20 times at what you <br> perceive    to be  roughly one second interval. <br> <br> <br>";
    document.getElementById("buffer").insertAdjacentHTML("afterbegin", "<span style=\"display:block; height: 0em;\"></span>");
    Button.innerHTML = "Click";
}

function end()  {
//    document.getElementById("intro").style.display = "none";
    document.getElementById("reload").style.display = "block";
    $("#intro").fadeOut("slow");
    $("#counter").fadeOut("slow");
    var diff = (new Date()).getTime() - time;
    CountText.style.fontSize = "x-large";
    CountText.innerHTML = "<br> You were off by " + Math.abs(Number(20 - diff/1000).toFixed(3)) + " seconds";
    CountText.innerHTML += "<br> <br> What you thought to be 20 seconds were actually " + Number(diff/1000).toFixed(3) + " seconds. <br>"
    CountText.innerHTML += "Research suggests that our sense of time (or chronoception) is closely related to your age. " +
                                "Older adults perceive time as passing at a relatively fast rate because the biological clock slows progressively "
                                + "as a person ages. The slowing of a biological clock presumably " +
                                "gives rise to the feeling that external time is passing faster.";

    $("#counter").fadeIn("slow");
    Button.disabled = true;
    Button.innerHTML = "Stop!";
}
