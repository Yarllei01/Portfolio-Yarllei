const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            display.innerText = '';
        } else if (value === '<') {
            display.innerText = display.innerText.slice(0, -1);
        } else if (value === '=') {
            try {
                const expression = display.innerText.replace('x', '*');
                display.innerText = eval(expression);
            } catch (e) {
                display.innerText = 'Erro';
            }
        } else {
            display.innerText += value;
        }
    });
});
