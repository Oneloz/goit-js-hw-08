import throttle from "lodash.throttle";

const refs = {
 form: document.querySelector('.feedback-form'),
 input: document.querySelector('[name ="email"]'),
 textarea: document.querySelector('[name ="message"]'),
};

const LOCAL_STORAGE_KEY = "feedback-form-state";

let data = {};

refs.form.addEventListener('input', throttle(formInput, 500, { leading: false, trailing: true }));
refs.form.addEventListener('submit', formSubmit);

 populateForm();

function formInput(event) {
 data[event.target.name] = [event.target.value];
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function formSubmit(event) {
 event.preventDefault();

 if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
    return alert('Будь ласка, заповніть усі поля.');
 };
 event.currentTarget.reset();
 localStorage.removeItem(LOCAL_STORAGE_KEY);

  console.log(data);
 };

function populateForm() {
 const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
    
 if (saveData) {
 const dataStorage = JSON.parse(saveData);

 Object.entries(dataStorage).forEach(([name, value]) => {
 data[name] = value;
 refs.form.elements[name].value = value;
 });
 };
};