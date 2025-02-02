setInterval(getTheTime, 1000);
function getTheTime()
{
   const d = new Date();
   document.getElementById("timing").innerHTML = d.toLocaleTimeString();
}