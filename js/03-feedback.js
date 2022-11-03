//we're importing three functions, which represent 
//localStorage.setItem, localStorage.getItem, localStorage.removeItem,
//with a try/catch block--------------->let's dive into it for further information
import { setLocalSt, getLocalSt, remLocalSt } from "./local-st-try-catch.js"

import throttle from 'lodash.throttle';
//we're declaring all we want to see - in our case, a form, and a key for the local storage.
const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
//simplifying already said
const getFromLocalSt = getLocalSt(KEY);

//we're comparing, if info in localstorage exists...
if (getFromLocalSt) {
  //...we're creating a keys array, which we're iterating with MAP, 
  // and on each key of the keys array...
  Object.keys(getFromLocalSt).map(key => {
    //...IF form has such key...
    if (form[key]) {
      //... a value of each key of the form will have a key from gotten information of the local storage
      form[key].value = getFromLocalSt[key]
    }
  })
}

//we're creating a function - when person is typing...
const onFormInput = (e) => {
  //...we're spreading this form and taking names of the form 
  // by destructuring and placing into an accumulator(object)...
  if (e.currentTarget) {
    const data = [...e.currentTarget].reduce((acc, { name }) => {
      //...if such names exists...
      if (name) {
        //...in each name of the object we're placing a value of name of the form.
        acc[name] = e.currentTarget.elements[name].value;
      }
      // and returning a ready-to-go acc with values of the names. 
      // Precisely this acc will be placed inside the 'data' variable
      // without return we would've got undefined
      return acc;
    }, {})//<---- see? an object, because of the properties from the form, and dynamic values
    setLocalSt(KEY, data);
  }
    //we're setting to the local storage first - a key, second - a variable with the received object
    
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
  //we're resetting the form... 
  form.reset();
  //...and removing values from the local storage
    remLocalSt(KEY);
    console.log(data)
  }

//crucial part - adding listeners on the form
//first on typing in the form
form.addEventListener("input", throttle(onFormInput, 250));
//second on submitting the form
form.addEventListener("submit", onFormSubmit);

//see you later, aligator )