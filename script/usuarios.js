const tabela = document.getElementById("tabela-usuarios");

const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
) || {};

const infoMatricula =document.getElementById("info-matricula");

if (infoMatricula && currentUser) {
    infoMatricula.textContent =
        "Matrícula: " + currentUser.matricula +
        " | Função: " + currentUser.role
    }

const usuariosDb = JSON.parse(
    localStorage.getItem("usuarios_cadastrados")
) || {};

const usuarios = Object.values(usuariosDb)

if (usuarios.length === 0){

    tabela.innerHTML = `
        <tr>
            <td colspan="4" class="sem-usuarios">
                Nenhum usuário cadastrado.
            </td>
        </tr>
    `;
} else {

    usuarios.forEach((usuario, index) => {
         tabela.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${usuario.nome || "-"}</td>
                <td>${usuario.email || "-"}</td>
                <td>${usuario.matricula || "-"}</td>
            </tr>
        `;
    });

}

const btnSair = document.getElementById("btn-sair");

if (btnSair) {

    btnSair.addEventListener("click", (e) => {

        e.preventDefault();

        localStorage.removeItem("currentUser");

        window.location.href = "login.php";

    });

}