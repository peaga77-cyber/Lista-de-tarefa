 const novatarefa = document.querySelector("#input_id");
 const botaoAdd = document.getElementById("botao_add_id"); 
 const formulario = document.getElementById("form_id");
 const listaDetarefas = document.getElementById("lista_id");
 const botaoMarca = document.getElementById("botao_marca_id");
 const botaoLimpa = document.getElementById("botao_limpa_id");

 botaoAdd.addEventListener("click", (event) => {
    event.preventDefault();

    const elementoLista = document.createElement("li")
    const textoTarefa = document.createElement("p");
    const iconDeleta= document.createElement("span");

    textoTarefa.innerText = novatarefa.volue;
    iconDeleta.innerText = " ";
   
    if (textoTarefa.innerText.trim() === "") {
        alert("Você precisa escrever alguma coisa!");

    } else {
        listaDetarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoTarefa);
        elementoLista.appendChild(iconDeleta);
        formulario.reset();
    }
    novatarefa.focus();


textoTarefa.addEventListener("click", () => {

    textoTarefa.classList.toggle("checked");
    verificaMarcados();
 });

iconDeleta.addEventListener("click", () => {

    elementolista.remove();
});
verificaMarcados();
 });

 botaoMarca.addEventListener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");

    if (botaoMarca.innerText === "Marcar todos") {
       todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.add("checked");
            });
            botaoMarca.innerText = "Desmarcar todos";
        } else{
            todasAsTarefas.forEach((tarefa) => {
                tarefa.classList.remove("checked");
            });
            botaoMarca.innerText = "Marcar todos";
        }
    });

    botaoLimpa.addEventListener("click", () => {
        listaDetarefas.innerHTML = "";
    });
    
    function verificaMarcados() {
        let todasAsaTarefas = document.querySelectorAll("p");
         let verificacao = [];

todasAsaTarefas.forEach((tarefa) => {
    
    if (!tarefa.classList.contains("checked")) {

        verificacao.push(tarefa);
    }
});

if(verificacao.length === 0 && todasAsaTarefas) {
    
    botaoMarca.innerText = "Desmarcar todos";
} else {

    botaoMarca.innerText = "Marcar todos";
   }
 }