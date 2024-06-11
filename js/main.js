//creare una array con la lista della spesa
const listaDellaSpesa = ['burro', 'latte', 'uova', 'pomodori', 'zucchine', 'formaggio', 'affettati', 'pane', 'biscotti', 'pasta','acqua'];
console.log(listaDellaSpesa);
//creare un ciclo usando while per leggere il contenuto della mia array
let item = 0;
while (item < listaDellaSpesa.length){
    console.log(listaDellaSpesa[item]);
    item++;
    let foglio = document.querySelector('#contitore');
    let itemFoglio = `
            <div class="lista_spesa" > 
            ${listaDellaSpesa[item]}
            </div>`;
    foglio.innerHTML += itemFoglio;
}



//stamparlo in pagina 