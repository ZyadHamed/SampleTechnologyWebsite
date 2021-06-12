var FirstNameScreen = document.getElementById("FirstNameScreen");
FirstNameScreen.style.display = "none";
var LastNameScreen = document.getElementById("LastNameScreen");
LastNameScreen.style.display = "none";
var EmailScreen = document.getElementById("EmailScreen");
EmailScreen.style.display = "none";
var PasswordScreen = document.getElementById("PasswordScreen");
PasswordScreen.style.display = "none";
var PasswordScreen = document.getElementById("EndingScreen");
PasswordScreen.style.display = "none";

function WelcomeButtonClick()
{
    var newdiv = document.getElementById("Welcomescreen");
    newdiv.style.animation = "fadeOut ease 1s;";
    setTimeout(1000);
    newdiv.style.display = "none";
    FirstNameScreen.style.display = "block";
}

function SwitchPanels(ElementOldID, ElementNewID)
{
    var newdiv = document.getElementById(ElementOldID);
    newdiv.style.animation = "fadeOut ease 1s;";
    setTimeout(1000);
    newdiv.style.display = "none";
    var NewElement = document.getElementById(ElementNewID);
    NewElement.style.display = "block";
}

function FinishButtonClick()
{

}