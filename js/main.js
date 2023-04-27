console.log("prova")
const selectionEle = document.getElementById("chooseNumber")
// const grid = document.getElementById("grid")
const generator = document.getElementById("generator")
const mainEle= document.getElementById("mainGrid")
let bombs=[]
let scorePoints= 0

generator.addEventListener("click", function(){
    bombs=[]
    scorePoints= 0
    mainEle.innerHTML=""
    let bombsNumber= 16
    let desiredNumber=Number(selectionEle.value)
    // let bombs=[]
    for (let i = 0; i < bombsNumber; i++) {
        bombs.push(getRandomNumberRange(1,desiredNumber))        
    }

    console.log(bombs)
    squaring(desiredNumber)

    
})


function squaring(boxNumber) {
    const grid = document.createElement("div")
    grid.classList.add("grid")
    mainEle.appendChild(grid)
    for (let i = 0; i < boxNumber; i++) {
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square")
        nuovoDiv.classList.add(`box${boxNumber}`)
        nuovoDiv.innerHTML=`${i+1}`
    
        
        
        if (bombs.includes(Number(nuovoDiv.innerHTML))) {
            nuovoDiv.classList.add("select1")
            nuovoDiv.addEventListener("click", bomba
            )

        }else {
            nuovoDiv.classList.add("select2")
            nuovoDiv.addEventListener("click", nonBomba
            )
            nuovoDiv.addEventListener("click", function(){
                nuovoDiv.removeEventListener("click", nonBomba)
            })
        }
        
    
        grid.appendChild(nuovoDiv)
        
    }
}

function nonBomba() {
    this.classList.toggle("clicked")
    console.log(`hai scelto la casella numero ${this.innerHTML}`)
    scorePoints++
}

function bomba() {
    
    // this.classList.toggle("bomba")
    console.log(`hai scelto la casella numero ${this.innerHTML} ed era la bomba!`)
    let bombe = []
    bombe = document.getElementsByClassName("select1")
    for (let i = 0; i < bombe.length; i++) {
        bombe[i].removeEventListener("click", bomba)
        bombe[i].classList.toggle("bomba")
        
    }
    nonBombe = document.getElementsByClassName("select2")
    for (let i = 0; i < nonBombe.length; i++) {
        nonBombe[i].removeEventListener("click", nonBomba)
        
    }
    console.log(`hai totalizzato ${scorePoints} punti`)
    const result = document.createElement("div")
    result.classList.add("result")
    result.innerHTML=`<h3>il tuo punteggio è ${scorePoints}</h3>`
    mainEle.appendChild(result)
}

function getRandomNumberRange (min,max) {
    let numero

    //Math.floor( Math.random() * (max - min + 1) + min)
    numero = Math.floor( Math.random() * (max - min + 1 ) + min)

    return numero
}


// // versione alternativa 

// function initGame() {
//     const mainEle= document.querySelector("main")
//     const grid = document.createElement("div")
//     grid.classList.add("grid")
//     createCell(grid)
//     mainEle.appendChild(grid)
// }
// //la crea celle va sopra 
// function createCell(parentEle) {
//     let cellQuantity = 100
    
//     for (let i = 0; i < cellQuantity; i++) {
//         const cell = document.createElement("div");
//         cell.classList.add("cell")
//         cell.innerHTML=`${i+1}`
//         parentEle.appendChild(cell)
        
//     }
// }

// //quindi
// createCell(grid)

// //per togliere append dalla funzione sotto

// function initGame() {
//     const mainEle= document.querySelector("main")
//     const grid = document.createElement("div")
//     grid.classList.add("grid")
//     for (let i = 0; i < 100; i++) {
//         let cella= createCell()
//         grid.appendChild(cella)
//     }
//     mainEle.appendChild(grid)
// }
// //la crea celle va sopra 
// function createCell() {
//         const cell = document.createElement("div");
//         cell.classList.add("cell")
//         cell.innerHTML=`${i+1}`
//         return cell;
// }

// //oppure create piu semplificato 

// function createEle(tagHtml, classe, contenuto) {
//     const cell = document.createElement(tagHtml);
//     cell.classList.add(classe)
//     cell.innerText=(contenuto)
// }
// function initGame() {
//     const mainEle= document.querySelector("main")
//     const grid = createEle("div", "grid", "")
//     for (let i = 0; i < 100; i++) {
//         let cella= createEle("div", "cell", "x")
//         grid.appendChild(cella)
//     }
//     mainEle.appendChild(grid)
// }

// // per lo style adattivo

// function createEle(tagHtml, classe, contenuto) {
//     const cell = document.createElement(tagHtml);
//     cell.classList.add(classe)
//     cell.innerText=(contenuto)
// }
// function initGame() {
//     const mainEle= document.querySelector("main")
//     const grid = createEle("div", "grid", "")
//     let numeroCelle=100
//     let numeroCelleLato= math.ceil(math.sqrt(numeroCelle))
//     for (let i = 0; i < numeroCelle; i++) {
//         let cella= createEle("div", "cell", i+1)
//         cella.style.width = `calc (100%/${numeroCelleLato})`
//         cella.style.height = `calc (100%/${numeroCelleLato})`
//         grid.appendChild(cella)
//     }

//     mainEle.appendChild(grid)
// }

// //per ottimizzare i calcoli e farne meno

// function createEle(tagHtml, classe, contenuto) {
//     const cell = document.createElement(tagHtml);
//     cell.classList.add(classe)
//     cell.innerText=(contenuto)
// }
// function initGame() {
//     const mainEle= document.querySelector("main")
//     const grid = createEle("div", "grid", "")
//     let numeroCelle=100
//     let dimensioni=`calc (100%/${math.ceil(math.sqrt(numeroCelle))})` 
//     for (let i = 0; i < numeroCelle; i++) {
//         let cella= createEle("div", "cell", i+1)
//         cella.style.width = dimensioni
//         cella.style.height = dimensioni
//         grid.appendChild(cella)
//     }

//     mainEle.appendChild(grid)
// }

// //funzione event listener per classe non funziona perche getelebyclassname ci da un array e non posso aggiungere 
// //un nevent listener ad un array. se creo un ciclo for per dare l'event listener a ogni elemento dell'array con 
// //console.log("clickato", this) allora funziona
// let celle=document.getElementsByClassName("cell")
// for (let i = 0; i < celle.length; i++) {
//     celle[i].addEventListener("click", function() {
//         this.classList.toggle("clicked")
//         console.log(`hai scelto la casella numero ${this.innerHTML}`)
//     })
    
// }


// // esercizio: devi generare 16 numeri casuali da 1 a numero massimo di caselle. questi numeri di caselle avranno una bomba.
// //se il numero è nell'array di numeri con le bombe la cella diventa di un colore diverso e il gioco finisce. per bloccare
// //il gioco : o remove event listener sulle caselle (passando all'event listener il nome di una funzione (?)) oppure
// //metto un if nell'event listener di evidenzia cella con un booleano che diventa false all'esplosione. la partita termina
// //anche quando le celle libere sono tutte selezionate. alla fine della partita tenere traccia delle caselle senza bomba selezionate.
// // SUPERBONUS a fine partita blocca il click con remove event listener e fai vedere tutte le bombe