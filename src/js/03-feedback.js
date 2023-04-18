 import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name ="email"]');
const textarea = document.querySelector('[name ="message"]');

const LOCAL_STORAGE_KEY = "feedback-form-state";

let data = {};

form.addEventListener('input', throttle(formInput, 500, { leading: false, trailing: true }));
form.addEventListener('submit', formSubmit);

 populateForm();

function formInput(event) {
 data[event.target.name] = event.target.value;
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function formSubmit(event) {
 event.preventDefault();

 if (input.value === "" || textarea.value === "") {
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);

  console.log(data);
 };
};

function populateForm() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
 if (savedData) {
  const { email, message } = savedData;

  input.value = email;
  textarea.value = message;
 };
};





