const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const nigeriaPhoneNumberRegex = /^(0|234|\+234)?[7-9][0-1]\d{8}$/gm;

// initialise and use validator
let validator = new Validator({
  form: document.getElementById('myform'),
  rules: {
    email: {
      validate: (val) =>
        emailRegex.test(val ?? '') ? '' : 'Please input the right email format',
    },
    phone_number: {
      validate: (val) =>
        nigeriaPhoneNumberRegex.test(val ?? '')
          ? ''
          : 'Please input the right phone number',
    },
  },
});

validator.form.onsubmit = (evn) => {
  evn.preventDefault();

  const formData = validator.getValues();

  if (Object.values(validator?.errorMessages ?? {}).length) {
    const errorNode = document.getElementById('errorField');
    Object.entries(validator.errorMessages).forEach(
      ([errorKey, errorMsg], index) => {
        const errorContent = `${index}. ${errorKey}: ${errorMsg}`;
        const content = document.createElement('div');
        content.style.color = 'red';
        content.innerHTML = errorContent;
        errorNode.append(content);
      }
    );

    return;
  }

  // store on local storage
  localStorage.setItem('form-data', JSON.stringify(formData));
};
