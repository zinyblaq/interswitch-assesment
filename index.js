function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  localStorage.setItem('user', JSON.stringify(formProps));
  //   const ezinne = JSON.parse(localStorage.getItem('user'));
  // localStorage.clear()
  //   console.log(ezinne.lname);
  //   console.log;
  //   console.log(formProps);
}
const loginForm = document.getElementById('myform');
loginForm.addEventListener('submit', handleSubmit);
// console.log('yes');

// var validator = new Validator({
//   form: document.getElementById('form'),
//   rules: {
//     email: {
//       validate: (val) => (val ? '' : 'Required!'),
//     },
//     password: {
//       // validate: (val) => val < 5 || val > 15 ? '字数大于5，小于15' : ''
//     },
//     repassword: {
//       validate: (val) => (!val ? 'Required!' : ''),
//     },
//   },
// });

// validator.form.onsubmit = (evn) => {
//   evn.preventDefault();
//   const values = validator.getValues();
//   console.log(values);
// };

// validator.form.onreset = (evn) => {
//   const data = validator.reset();
//   console.log(data);
// };
