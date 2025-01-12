// les selections des boutons avec const et getElementById
document.getElementById('incrementation').addEventListener('click', incrementCounter)

document.getElementById('decrementation').addEventListener('click', decrementCounter)

document.getElementById('resetBtn').addEventListener('click', resetCounter)

// la variable counter pour le compteur
let counterDisplay = document.getElementById('counterDisplay')
let counterValue = 0

// la fonction displayCounter pour l'affichage du compteur
function displayCounter() {
    counterDisplay.textContent = counterValue
}


// la fonction incrementCounter pour l'incrementation
function incrementCounter() {
    counterValue++
    displayCounter()
}

// la fonction decrementCounter pour la decrementation
function decrementCounter() {
    if (counterValue > 0) {
        counterValue--
        displayCounter()
    }    
}

// la fonction resetCounter pour le reset
function resetCounter() {
    counterValue = 0
    displayCounter()
}