document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "login.php";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);
    const menuUsuarios = document.getElementById("menu-usuarios");
    const infoMatricula = document.getElementById("info-matricula");
    const isAdmin = currentUser.role === "admin";

    if (menuUsuarios) {
        menuUsuarios.style.display = isAdmin ? "flex" : "none";
    }

    if (infoMatricula && currentUser) {
        infoMatricula.textContent =
            "Matrícula: " + currentUser.matricula +
            " | Função: " + currentUser.role
    }

    document.getElementById("btn-sair").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "index.php";
    });

});