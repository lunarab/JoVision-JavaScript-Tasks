async function getIP()
{
   const buttonLabel = document.getElementById("naming");
   buttonLabel.innerHTML = "";
   try {
      const response = await fetch("https://api.ipify.org/");
      if (!response.ok) throw "";
      const ip = await response.text();
      buttonLabel.innerHTML = ip;
      console.log("Fetching Successful!");
   }
   catch(err)
   {
      window.alert("URL Not Found");
      buttonLabel.innerHTML = "Get IP";
   }
}
