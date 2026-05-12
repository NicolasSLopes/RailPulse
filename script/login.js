document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (!mensagem) {
        const divMensagem = document.createElement("div");
        divMensagem.id = "mensagem";
        document.getElementById("form").prepend(divMensagem);
        mensagem = divMensagem;
    }

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p>Email inválido.</p></div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p>Senha muito curta.</p></div>";
        return;
    }

    let usuariosDb = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || {};

    let loginmestre = (email === "admin@gmail.com" && senha === "1234");
    let loginusuario = false;
    let nomeUsuario = "User";
    let roleUsuario = "funcionario";
    let matriculaUsuario = "";

    if (usuariosDb[email] && usuariosDb[email].senha === senha) {
        loginusuario = true;
        nomeUsuario = usuariosDb[email].nome || "User";
        roleUsuario = usuariosDb[email].role || "funcionario";
        matriculaUsuario = usuariosDb[email].matricula || "";
    }

    if (loginmestre) {
        localStorage.setItem("currentUser", JSON.stringify({
            role: "admin",
            nome: "Administrador",
            email: email,
            matricula: "0001"
        }));
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        setTimeout(() => window.location.href = "dashboard.html", 500);
    } else if (loginusuario) {
        localStorage.setItem("currentUser", JSON.stringify({
            role: roleUsuario,
            nome: nomeUsuario,
            email: email,
            matricula: matriculaUsuario
        }));
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        setTimeout(() => window.location.href = "dashboard.html", 500);
    } else {
        mensagem.innerHTML = "<div class='erro'><p>Dados incorretos.</p></div>";
    }
}