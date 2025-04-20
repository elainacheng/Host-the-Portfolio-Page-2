//changing HTML using DOM (Document object model)
function resetScreen()
{
    let label = document.getElementById("label");
    //document.querySelector("#label");
    label.textContent= "Where do you want to travel?";

    let list = document.getElementById("options");
    list.innerHTML ="<option value='1'>France</option><option value='2'>Italy</option><option value='3'>Span</option>";
}
function revealGender()
{
    let box = document.getElementById("genderBox")
    let label = document.getElementById("genderLabel");
    let random = Math.round(Math.random());//returns 0 or 1 randomly
    if (random==0)
    {
        label.textContent="It's a BOY!!"
        label.style.fontFamily="Arial";
        label.style.fontWeight = "bold";
        label.style.fontSize="32px";
        label.style.color="blue"
        box.style.backgroundColor="lightBlue"
    }
    else//random==1
    {
        label.textContent="It's a GIRL!!"
        label.style.fontFamily="Calibri";
        label.style.fontWeight = "lighter";
        label.style.fontSize="42px";
        label.style.color="red"
        box.style.backgroundColor="lightPink"
    }
}

function showColor()
{
    let color = document.getElementById("colorInput").value;
    let box = document.getElementById("colorBox");
    let text = document.getElementById("colorEntered");
    box.style.backgroundColor= color;
    text.innerHTML="The color you enter is "+color;

}