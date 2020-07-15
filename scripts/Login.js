'use strict';

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    this.loginButton = document.querySelector("#login-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  submit = (event) => {
    event.preventDefault();

    const usersDB = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const user = usersDB.find( (userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    })


    this.showMessage(user);
  }

 
  showMessage = (user) => {
    
    this.messageContainer.innerHTML = "";

    const message = document.createElement('p');

    if (user) {
      
      message.innerHTML = `hola, ${user.email}`;
      message.classList.add("correct-message");
    }
    else {
     
      message.innerHTML = 'el email o/y password son incorectos';
    }

    this.messageContainer.appendChild(message);

    if (user) this.redirect();
  }

  redirect = () => {
    setTimeout( ()=> location.assign('index.html'), 2000);
  }

}


const login = new Login();

login.loginButton.addEventListener("click", login.submit);