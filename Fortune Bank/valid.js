//DOM Elements
const btn = document.getElementById('btn');
const user = document.getElementById('name');
const password = document.getElementById('password');
const errormessage = document.getElementById('error-message');


//showError Function
showError = (input, msg) => {
  errormessage.style.visibility = 'visible';
};

//showSuccess
showSuccess = input => {
  errormessage.style.visibility = 'hidden';
};

//checkRequired Function
const checkRequired = inputArr => {
  var count = 0;
  inputArr.forEach(input => {
    if (input === user || input === password) {
      if (input.value.trim() === '') {
        showError(input, 'Field is required');
        count = count + 1;
      } 
    }
    // } else if (input === password) {
    //   if (input.value.trim() === '') {
    //     count = count + 1;
    //   } else {
    //     showSuccess(input);
    //   }
    // }
  });
  console.log(count);
  if (count === 0) {
    showSuccess(input);
    return true;
  } else {
    return false;
  }
};

//Capital First Word
upFirstWord = inputId => {
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
};

//Event Handler
btn.addEventListener('click', e => {
  if (!checkRequired([user, password])) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
});
