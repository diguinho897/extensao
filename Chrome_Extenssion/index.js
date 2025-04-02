const botao = document.getElementById("input-btn")
const input = document.getElementById("input-el")
const lista = document.getElementById("ul-el")
let myLeads = []
const delete_btn = document.getElementById("delete-btn")
const leadsLocal = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsLocal)
const tabBtn = document.getElementById("tab-btn")


if(leadsLocal != null){
    myLeads = leadsLocal
    renderLista(myLeads)
}

tabBtn.addEventListener("click", function(){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLista(myLeads)
   })

   
})

delete_btn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads.length = 0
    renderLista(myLeads)
    
})

botao.addEventListener("click", function(){
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLista(myLeads)

    console.log(localStorage.getItem("myLeads"))
})


function renderLista(leads) {
let listaItens = ""
for (let i = 0; i < leads.length; i++){
    //listaItens += "<li> <a href ='" + myLeads[i] + "' target = 'blank'>"+ myLeads[i] + "<a/> </li>"
    listaItens += 
    `<li> 
    <a href ='${leads[i]}' target = 'blank'>${leads[i]}<a/> 
    </li>`
    }

    lista.innerHTML = listaItens

}
