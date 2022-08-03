// Enunciado
// (JavaScript - CRUD e Verbos HTTP) Criar um sistema para gerenciar um cadastro de tarefas (ToDo List).

// Dentre as funcionalidades, espera-se que seja possível:

// • Adicionar uma tarefa
// • Editar uma tarefa salva
// • Remover uma tarefa salva
// • Listar todas as tarefas salvas
// • Obter uma tarefa, através de um parâmetro (id)
// • Testar os métodos através do Thunder Client

// Adicionar as seguintes validações:

// • Ao receber uma chamada a alguma rota que tenha parâmetro, verificar se o mesmo foi enviado
// • Validar se foi enviado o corpo da requisição, nos casos de POST, PUT e PATCH
// • Validar que não seja possível alterar o id no PUT e PATCH
// • Validar se o item existe, nos casos de GET de um recurso específico, PUT, PATCH e DELETE
// • Para todos os casos, enviar uma mensagem ao cliente

const express = require("express");
const app = express();
const toDoList = require("./toDoList.json");

const port = 8081;

app.use(express.json());

app.get("/todolist", (req, res)=>{
    res.json(toDoList);
});

app.get("/todolist/:id", (req, res) =>{
    const id = req.params.id;

    const task = toDoList.find(id => )

});

app.post("todolist", (req, res)=>{
    if(!req.body){
        return res.status(404).json({errormessage: "Tarefa não enviada no corpo da requisição"});
    }

    const newTask = req.body;

    if(!newTask.id || !newTask.task){
        return res.status(404).json({errormessage: "Todos os campos precisam ser preenchidos"});
    }

    toDoList.push(newTask);
    res.json(newTask);
})

app.listen(port, () =>{
    console.log(`Server running is ${port}`);
})