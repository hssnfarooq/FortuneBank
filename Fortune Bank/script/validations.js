//DOM Elements
const btn = document.getElementById('btn');
const user = document.getElementById('sms');

//showError Function
showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('.small');
  small.innerText = msg;
};

//showSuccess
showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

//checkRequired Function
const checkRequired = inputArr => {
  var count = 0;
  inputArr.forEach(input => {
    if (input === user) {
      if (input.value.trim() === '') {
        showError(input, 'Field is required');
        count = count + 1;
      } else {
        showSuccess(input);
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
  if (!checkRequired([user])) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
});
