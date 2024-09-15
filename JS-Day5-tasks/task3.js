function applyStyle() {
    const box = document.getElementById('content');

    const styleMap = {
        fontFamily: 'input[name="fontFamily"]:checked',
        textAlign: 'input[name="textAlign"]:checked',
        lineHeight: 'input[name="lineHeight"]:checked',
        letterSpacing: 'input[name="letterSpacing"]:checked',
        color: 'input[name="fontColor"]:checked',
        textTransform: 'input[name="textTransform"]:checked',
        textDecoration: 'input[name="textDecoration"]:checked',
        border: 'input[name="textBorder"]:checked',
        borderColor: 'input[name="borderColor"]:checked',
        fontSize: 'input[name="fontSize"]:checked'
    };
    Object.keys(styleMap).forEach(property => {
        const value = document.querySelector(styleMap[property])?.value;
        if (value !== undefined) {
            box.style[property] = value;
        }
    });
}

//جزء الجافا سكريبت بمساعدة الذكاء الاصطناعي :)
