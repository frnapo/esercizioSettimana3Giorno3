// tre cose
// 1.funzione che fa addTask
// 2. funzione che gestisce riga sbarrata
// 3. funzione che fa cancella


const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");


textInput.addEventListener('keyup', function(event) { // uso per non far inserire campi bianchi
    const inputText = textInput.value.trim();

    if (inputText !== '') {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
});

addButton.addEventListener('click', function(event) { // prima funzione crea liste e pulsante elimina
    const text = textInput.value.trim();
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.style.color = 'white';
    li.style.cursor = 'pointer';
    li.textContent = text;
    btn.style.backgroundColor = 'red';
    btn.style.cursor = 'pointer';
    btn.style.color = 'white';
    btn.textContent = 'ELIMINA';
    list.appendChild(li);
    li.appendChild(btn);
    textInput.value = '';
    btn.addEventListener('click', function() {   // ho inserito direttamente dentro la funzione che cancella (fuori non mi andava :P)
        li.remove();
        btn.remove();
    });
    li.addEventListener('click', function() {  
        toggleTaskComplete(li);   //invoco la funzione
    });
});

function toggleTaskComplete(lista) {          // funzione task complete
    lista.classList.toggle("taskComplete");
}


