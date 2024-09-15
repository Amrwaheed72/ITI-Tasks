document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    name.focus();

    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    country.addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        zip.value = selectedOption.getAttribute('data-zipcode') || '';
    });

    const form = document.getElementById('userForm');
    form.addEventListener('submit', (event) => {
        let valid = true;

        if (name.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Please enter your name.';
            valid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        const hobbies = document.querySelectorAll('input[name="hobbies"]');
        const atLeastOneHobbySelected = Array.from(hobbies).some(hobby => hobby.checked);
        if (!atLeastOneHobbySelected) {
            alert('Please select at least one hobby.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the form?')) {
            form.reset();
            zip.value = '';
        }
    });
});

