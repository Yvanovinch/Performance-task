let ConfirmationAge= document.getElementById("ConfirmationAge")
ConfirmationAge.addEventListener("click", ConfirmA)

function ConfirmA() {
  let age = prompt("Enter your Age:")

  if (age >= 25) {
    alert("Your are 25 years old and up!")
  } else {
    alert("Sorry, You are not 25 years old yet!")
  }
}

let ConfirmationNum = document.getElementById("ConfirmationNum")
ConfirmationNum.addEventListener("click", ConfirmationN)

function ConfirmationN() {
  let number = prompt("Enter a number less than 100:")

  if (number < 100) {
    alert("You entered a number less than 100.")
  } else {
    alert("You entered a number greater than 100, try again.")
  } 
}