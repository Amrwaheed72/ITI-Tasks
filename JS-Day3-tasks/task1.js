function openAutoScrollWindow() {
    const newWindow = window.open('', '', `width=${window.innerWidth / 3},height=${window.innerHeight / 3}`);
    newWindow.document.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Auto Scroll</title>
            <style>
                body {
                    font-family: sans-serif;
                    background-color:yellow

                }
                #content {
                    height: 1200px;
                    margin: 20px;
                }
                p{
                padding:10px;
                border-bottom:2px dashed black
                }
            </style>
        </head>
        <body>
            <div id="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur consequuntur incidunt
                iste illo excepturi suscipit similique iusto optio accusamus error eius vel qui mollitia, 
                unde itaque corporis ea officiis perspiciatis!
                </p>
            </div>
            <script>
                function autoScrollToBottom() {
                    const scrollStep = 5; // Speed of the scroll (pixels per step)
                    const scrollInterval = 30; // Frequency of the scroll (milliseconds per step)
                    let scrollPosition = 0;
                    const scrollHeight = document.body.scrollHeight;
                    const scroll = setInterval(() => {
                        scrollPosition += scrollStep;
                        window.scrollTo(0, scrollPosition);
                        // Stop scrolling and close the window when the bottom is reached
                        if (scrollPosition >= scrollHeight - window.innerHeight) {
                            clearInterval(scroll);
                            window.close();
                        }
                    }, scrollInterval);
                }
                window.onload = autoScrollToBottom;
</script>
</body>

</html>
`);
    newWindow.document.close();
}