document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "login.php";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);
    if (currentUser.role !== "admin") {
        alert("Acesso negado: Apenas administradores podem acessar esta página.");
        window.location.href = "dashboard.php";
        return;
    }

    const infoMatricula = document.getElementById("info-matricula");
    if (infoMatricula && currentUser) {
        infoMatricula.textContent =
            "Matrícula: " + currentUser.matricula +
            " | Função: " + currentUser.role;
    }

    const btnSair = document.getElementById("btn-sair");
    if (btnSair) {
        btnSair.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href = "login.php";
        });
    }

    const formCadastro = document.getElementById("form-cadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.getElementById("cad-nome").value.trim();
            const matricula = document.getElementById("cad-matricula").value.trim();
            const email = document.getElementById("cad-email").value.trim();
            const senha = document.getElementById("cad-senha").value;
            const cargo = document.getElementById("cad-cargo").value;

            if (!cargo) {
                alert("Selecione um cargo!");
                return;
            }

            if (!nome || !matricula || !email || !senha) {
                alert("Preencha todos os campos!");
                return;
            }

            let usuariosDb = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || {};

            if (usuariosDb[email]) {
                alert("Usuário com este e-mail já existe!");
                return;
            }

            usuariosDb[email] = {
                nome: nome,
                matricula: matricula,
                email: email,
                role: cargo,
                senha: senha
            };

            localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuariosDb));

            formCadastro.reset();

            const container = document.getElementById("mensagem-container");
            if (container) {
                container.innerHTML = `<div class="msg-sucesso">Usuário cadastrado com sucesso!</div>`;

                setTimeout(() => {
                    container.innerHTML = "";
                }, 3000);
            }
        });
    }
});