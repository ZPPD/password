//define var
const passInput = document.querySelector('#pass');

//load event listener

passInput.addEventListener('focusout', isPassValid);



//dissable submit on enter
document.addEventListener('keydown', function(e) {
  if (e.keypress === 13 || e.which === 13) {
    e.preventDefault();
    return false;
  }
});

//conditions

//has Uppercase
function hasUppercase(text) {
  for (var i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      return true;
    }
  }
}

//checks if theres at least one lower case letter
function hasLowercase(text) {
  for (var i = 0; i < text.length; i++) {
    if (text[i] === text[i].toLowerCase()) {
      return true;
    }
  }
}

//checks if the password is at least 8 characters
function isLongEnough(text) {
  if (text.length >= 8) {
    return true;
  }
}

//checks if the password has a special character
const specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '?','/','-'];
//const re = /\W+/g

function hasSpecialCharacter(text) {
  for (var i = 0; i < text.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
      if (text[i] === specialCharacters[j]) {
        return true;
      }
    }
  }
}

//get input
function isPassValid(e) {
  const msg = document.querySelector('#message');
  //get input value
  const text = e.target.value;
  //console.log(e.target.value);
  if (text === '') {
    msg.innerHTML = 'Please enter your pasword';
    msg.setAttribute('style', 'color: orange');
    return false;
  } else if (hasUppercase(text) && hasLowercase(text) && isLongEnough(text) && hasSpecialCharacter(text)) {
    console.log('The pass is valid');
    msg.innerHTML = 'The password is Valid !!!';
    //  msg.appendChild(document.createTextNode('The pass is valid'));
    msg.setAttribute('style', 'color: green');
    return false;
  } else if (!hasUppercase(text)) {
    console.log('needs upper');
    msg.innerHTML = 'The password needs an Upper case!';
    msg.setAttribute('style', 'color: red');
    return false;
  } else if (!hasLowercase(text)) {
    console.log('needs lower');
    msg.innerHTML = 'The password needs a Lower case!';
    msg.setAttribute('style', 'color: red');
    return false;
  } else if (!isLongEnough(text)) {
    console.log('the pass is too short');
    msg.innerHTML = 'The password is too short!';
    msg.setAttribute('style', 'color: red');
    return false;
  } else if (!hasSpecialCharacter(text)) {
    console.log('needs special');
    msg.innerHTML = 'The password needs a Special character!';
    msg.setAttribute('style', 'color: red');
    return false;
  }
}
