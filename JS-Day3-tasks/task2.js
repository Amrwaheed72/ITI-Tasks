openNewTap = () => {
    const newTap = window.open('', '', `width=${window.innerWidth / 3},height=${window.innerHeight / 3}`);
    newTap.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>document</title>
        <style>
            body {
                font-family: sans-serif;
                height: 100vh;
                margin: 0;
            }
            .typing {
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div id="typing" class="typing"></div>
        <script>
            const message = "This text is typed letter by letter, then the window will close.";
            const typingSpeed = 100;
            let index = 0;
            function typing() {
                if (index < message.length) {
                    document.getElementById('typing').textContent += message.charAt(index);
                    index++;
                    setTimeout(typing, typingSpeed);
                } else {
                    setTimeout(() => window.close(), 1000);
                }
            }
            window.onload = typing;
</script>
</body>

</html>
`);
newTap.document.close();
}