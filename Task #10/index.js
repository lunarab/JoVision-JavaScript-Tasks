function getIP()
{
   fetch("https://api.ipify.org/")
   .then(result => result.text())
   .then(data => {console.log(data); 
      document.getElementById("naming").innerHTML = data;
   });
}