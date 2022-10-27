const userFirstName = prompt("Perfavore inserisci il tuo nome");
const userLastName = prompt("Perfavore scrivi il tuo cognome");
const userColor = prompt("Perfavore scrivi il tuo colore preferito");

const userName = document.getElementById("user_name");
userName.innerHTML = `${userFirstName}${userLastName}${userColor}21`