

const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");

const display1 = document.querySelector("#display1");
const setup = document.querySelector("#setup");
const punchLine = document.querySelector("#punchline");

let button1Data = "";
// let button2Data = "";
// let button3Data = "";




button1.addEventListener("click", ()=>{

    const button1Action = (async ()=>{

        const response = await fetch("/button1/API")
        const data = await response.json()
        button1Data = await data;
        console.log("CONCLUSION" , button1Data)
        setup.innerHTML = button1Data.setup;
        punchLine.innerHTML = button1Data.punchline;
    })
    
    button1Action();


    


})