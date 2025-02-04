const record = {
   name : "the-name-you-entered",
   age : "the-age-you-entered",
   timeStamp :  "the-date-and-time-of-the-button-press"
};
function submit()
{
   const d = new Date();
   let text = d.toLocaleDateString() + " " + d.toLocaleTimeString();
   record.name = document.getElementById('Name').value;
   record.age = document.getElementById('Age').value;
   record.timeStamp = text;
   window.alert("Your Name is : " + record.name + 
      "\nYour Age is : " + record.age +
      "\nYou Submitted on " + record.timeStamp);
}
