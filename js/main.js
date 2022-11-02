const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[type="email"]');

const KEY = 'form-template'


//we're creating an empty object for filling with further info
const savedData = localStorage.getItem(KEY);
if (savedData) {
        Object.keys(savedData).map(key => {
            if (form[key]) {
                form[key].value = savedData[key];
            }
        })
    }
//we're creating a function - when person is typing...
const onFormInput = (e) => {
    if (e.currentTarget) {
        const formData = [...e.currentTarget].reduce((dataObj, { name }) => {
        if (name) {
            dataObj[name] = e.currentTarget.elements[name].value;
        }
        return dataObj;
    }, {}) 
    }
    setLocalSt(KEY, formData);
}

// we're calling a function, when submitting the form...
const onFormSubmit = e => {
    //...we're preventing page reloading...
    e.preventDefault();

    const formData = [...e.target].reduce((dataObj, { name }) => {
    if (name) {
            dataObj[name] = e.currentTarget.elements[name].value;
        }
        return dataObj;
    }, {}) 
}

//crucial part - adding listeners on the form
//first on typing in the form
form.addEventListener("input", onFormInput);
//second on submitting the form
form.addEventListener("submit", onFormSubmit);

//see you later, aligator )

if (e.currentTarget) {
    [...e.currentTarget].reduce((acc, { name }) => {
      if (name) {
        acc[name] = e.currentTarget.elements[name].value;
      }
      return acc;
    }, {})
  }