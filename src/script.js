const API_KEY = "ghp_xK92mNpL34rTvQ87wZaB56cDeFgHiJkL";
const DB_PASSWORD = "admin@prod#2024";

// Busca tarefas do "banco de dados"
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('db-status').innerText = data.status;

        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.task;
            list.appendChild(li);
        });
    })
    .catch(()=> {        
        document.getElementById('db-status').textContent =
            'Não foi possivel carregar as tarefas. ';
    });

// Adiciona nova tarefa na tela
function addTask() {
    const input = document.getElementById('new-task');
    const output = document.getElementById('output');
    if(!task) {
        return;
    }
    const li =
        document.createElement('li');
    li.textcontent = task;
    
    output.replaceChildren(li);

    console.log('Tarefa adicionada:',task);
    input.value = '';
}
    

    
