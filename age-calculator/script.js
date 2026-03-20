import { DateTime } from "./node_modules/luxon/src/luxon.js";

document.getElementById('calculate-btn').addEventListener('click', () => {
    const inputDate = document.getElementById('datepicker').value;

    if (!inputDate) {
        document.getElementById('result').innerText = '';
        document.getElementById('errors').innerText ="Please enter a valid date.";
        return;
    }

    const selectedDate = new Date(inputDate).toISOString().split('T')[0];
    const birthDate = DateTime.fromISO(selectedDate);
    const nowDate = DateTime.now();

    if (birthDate > nowDate) {
        document.getElementById('result').innerText = '';
        document.getElementById('errors').innerText = "Birthdate cannot be in the future.";
        return;
    }

    const diff = nowDate.diff(birthDate, ['years', 'months', 'days']).toObject();

    document.getElementById('errors').innerText = ''; // Reset error message
    document.getElementById('result').innerHTML =
    `You are <strong>${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days</strong> old.`;
});