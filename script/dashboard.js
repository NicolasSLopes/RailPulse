document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "login.php";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);

    const boasVindas = document.getElementById("boas-vindas");
    const menuUsuarios = document.getElementById("menu-usuarios");
    const infoMatricula = document.getElementById("info-matricula");

    if (infoMatricula && currentUser) {
        infoMatricula.textContent =
            "Matrícula: " + currentUser.matricula +
            " | Função: " + currentUser.role
    }

    if (currentUser.role === "admin") {
        boasVindas.innerText = "Bem-vindo, Administrador";
        if (menuUsuarios) {
            menuUsuarios.style.display = "flex";
        }
    } else {
        boasVindas.innerText = "Bem-vindo, " + (currentUser.nome || "User");
        if (menuUsuarios) {
            menuUsuarios.style.display = "none";
        }
    }

    const btnSair = document.getElementById("btn-sair");
    if (btnSair) {
        btnSair.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href = "login.php";
        });
    }
});