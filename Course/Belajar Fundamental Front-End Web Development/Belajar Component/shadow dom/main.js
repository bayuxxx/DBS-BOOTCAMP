// Membuat shadow Host dengan <div>
const divElement = document.createElement('div');
 
// Membuat elemen untuk dimasukkan dalam shadow tree
const headingElement = document.createElement('h1');
headingElement.innerText = 'Ini adalah konten <h1> dalam shadow DOM';
 
// Membuat/melampirkan shadow root pada shadow host
// Caranya: mengatur mode shadow dengan `open`
const divElementShadowRoot = divElement.attachShadow({ mode: 'open' });
 
// Memasukkan element ke dalam shadow tree
// Menjadi child element dari shadow root. Shadow root seperti <html>
divElementShadowRoot.appendChild(headingElement);
 
// Memasukkan shadow host (elemen) ke regular DOM (DOM utama)
document.body.appendChild(divElement);
 
// Tampilkan object shadow root
console.log(divElement);
console.log(headingElement);
console.log(divElementShadowRoot);