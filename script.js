function startquiz() 
{
  // Hide login
  document.getElementById("login").style.display = "none";
  // Show quiz
  document.getElementById("quiz").style.display = "block";
  // Get the username value from the textbox
  var username = document.getElementById("usern").value;
  // Store the username in localStorage
  localStorage.setItem("storedUsername", username);
  // Call a function to display the stored username
  displayStoredUsername();  
}  

function displayStoredUsername() 
{
  // Get the stored username from localStorage
  var storedUsername = localStorage.getItem("storedUsername");
  // Display the username in the specified element
  var displayElement = document.getElementById("displayUsername");
  displayElement.innerHTML = "Username: " + storedUsername;
}

function exit() 
{
 // Hide quiz
 document.getElementById("quiz").style.display = "none";
 // Show login
 document.getElementById("login").style.display = "block";
 // Remove username from localStorage
 localStorage.removeItem("storedUsername");
}
