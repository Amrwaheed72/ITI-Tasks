function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function storeFormDataInCookies(name, age, gender, color) {
    setCookie('name', name, 7); // Store for 7 days
    setCookie('age', age, 7);
    setCookie('gender', gender, 7);
    setCookie('color', color, 7);
}

function displayFromCookies() {
    const name = getCookie('name');
    const age = getCookie('age');
    const gender = getCookie('gender');
    const color = getCookie('color');

    if (name && age && gender && color) {
        const genderImage = gender === 'male' ? './male.jpg' : './female.jpg';

        const newWindow = window.open('', '', 'width=300,height=300');
        if (newWindow) {
            newWindow.document.write(`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Welcome</title>
                            <style>
                                body {
                                    display: inline-block;
                                }
                                .name {
                                    color: ${color};
                                }
                            </style>
                        </head>
                        <body>
                            <img src="${genderImage}" alt="${gender}" />
                            <h2>Welcome <span class="name">${name}</span>!</h2>
                        </body>
                        </html>
                    `);
        } else {
            console.error("Failed to open new window. Please check your browser settings.");
            alert("Failed to open new window. Please check your browser settings.");
        }
    }
}

// Main submit handler
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color').value;

    // Store form data in cookies
    storeFormDataInCookies(name, age, gender, color);

    // Display the form data from cookies
    displayFromCookies();
}