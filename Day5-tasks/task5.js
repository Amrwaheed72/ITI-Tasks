function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color').value;

    const genderImage = gender === 'male'
        ? './male.jpg'
        : './female.jpg';

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
                    body{
                        display:inline-block
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

