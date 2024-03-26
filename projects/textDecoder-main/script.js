function processText() {
    const text = document.getElementById('text').value.trim();
    const operation = document.getElementById('operation').value;

    let result = '';

    if (operation === 'encrypt') {
        result = encrypt(text);
    } else {
        result = decrypt(text);
    }

    document.getElementById('result').innerText = result;
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
