
const raices = [9, 64, 25].map(num => Math.sqrt(num));

raices.forEach((raiz, index) => {
    document.querySelector(`#raiz${index + 1}`).textContent = raiz;
};


