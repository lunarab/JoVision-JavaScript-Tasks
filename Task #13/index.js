const record = {
   name : "the-name-you-entered"
};
async function submit()
{
   const response = await fetch('https://api.agify.io?name='+
      document.getElementById('Name').value.trim());
   const {name , age} = await response.json();
   window.alert("Your Name is : " + name + 
     "\nYour Age is : " + age);
}