document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "login.html";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);

    const boasVindas = document.getElementById("boas-vindas");
    const menuUsuarios = document.getElementById("menu-usuarios");
    const infoMatricula = document.getElementById("info-matricula");

    if (infoMatricula && currentUser.matricula) {
        infoMatricula.textContent = 'Matrícula' + currentUser.matricula;
    }

    if (currentUser.role === "admin") {
        boasVindas.innerText = "Bem-vindo, Administrador";
        if (menuUsuarios) {
            menuUsuarios.style.display = "block";
        }
    } else {
        boasVindas.innerText = "Bem-vindo, " + (currentUser.nome || "User");
    }

    document.getElementById("btn-sair").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
});