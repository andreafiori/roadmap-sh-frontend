import { DateTime } from "./node_modules/luxon/src/luxon.js";

function calculateAge() {
    const inputDate = document.getElementById('datepicker').value;

    const resultEl = document.getElementById('result');
    const errorsEl = document.getElementById('errors');

    if (!inputDate) {
        resultEl.innerText = '';
        errorsEl.innerText ="Please enter a valid date.";
        return;
    }

    const selectedDate = new Date(inputDate).toISOString().split('T')[0];
    const birthDate = DateTime.fromISO(selectedDate);
    const nowDate = DateTime.now();

    if (birthDate > nowDate) {
        resultEl.innerText = '';
        errorsEl.innerText = "Birthdate cannot be in the future.";
        return;
    }

    const diff = nowDate.diff(birthDate, ['years', 'months', 'days']).toObject();
    diff.years = Math.floor(diff.years);
    diff.months = Math.floor(diff.months);
    diff.days = Math.floor(diff.days);

    errorsEl.innerText = ''; // Reset error message
    resultEl.innerHTML =
    `You are <strong>${diff.years} years, ${diff.months} months, and ${diff.days} days</strong> old.`;
}

document.getElementById('calculate-btn').addEventListener('click', calculateAge);
