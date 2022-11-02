import { setLocalSt, getLocalSt, remLocalSt } from "./local-st-try-catch.js";
import throttle from 'lodash.throttle';
//we're declaring all we want to see - in our case, a form, and a key for the local storage.
const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const getFromLocalSt = getLocalSt(KEY);


if (getFromLocalSt) {
  Object.keys(getFromLocalSt).map(key => {
    if (form[key]) {
      form[key].value = getFromLocalSt[key]
    }
  })
}
//we're creating an empty object for filling with further info

//we're creating a function - when person is typing...
const onFormInput = (e) => {
  if (e.currentTarget) {
    const data = [...e.currentTarget].reduce((acc, { name }) => {
      if(name) {
        acc[name] = e.currentTarget.elements[name].value;
      }
    return acc;
    }, {})
    setLocalSt(KEY, data);
  }
}

// we're calling a function, when submitting the form...
const onFormSubmit = (e) => {
  e.preventDefault();

  const data = [...e.target].reduce((acc, { name }) => {
  if (name) {
    acc[name] = e.target.elements[name].value;
  }
    return acc;
  }, {})
  console.log(data);
  form.reset();
  remLocalSt(KEY);

}

//crucial part - adding listeners on the form
//first on typing in the form
form.addEventListener("input", throttle(onFormInput, 500));
//second on submitting the form
form.addEventListener("submit", onFormSubmit);

//see you later, aligator )