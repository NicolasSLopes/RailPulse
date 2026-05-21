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

    const sectionCadastro = document.getElementById("section-cadastro");
    const formSensor = document.getElementById("form-sensor");
    const btnNovoSensor = document.getElementById("btn-novo-sensor");
    const btnCancelar = document.getElementById("btn-cancelar-sensor");
    const msgSensor = document.getElementById("btn-novo-sensor");
    const tbodySensores = document.getElementById("tbody-sensores");
    const colAcoes = document.getElementById("col-acoes");
    const avisoHistorico = document.getElementById("aviso-historico");
    const msgVazio = document.getElementById("msg-vazio");
    const modalEditar = document.getElementById("modal-editar");
    const btnFecharModal = document.getElementById("btn-fechar-modal");

    if (isAdmin) {
        btnNovoSensor.style.display = "inline-block";
        colAcoes.style.display = "table-cell";
    }

    const STORAGE_KEY = "sensores_cadastrados";

    function salvarSensores(lista) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
    }

    function badgeStatus(status) {
        const map = {
            "Ativo": "badge-ativo",
            "Em Espera": "badge-espera",
            "Falha": "badge-falha",
        };
        const cls = map[status] || "badge-espera";
        return `<span class="badge ${cls}">${status.toUpperCase()}</span>`;
    }

    function renderizar(lista) {
        tbodySensores.innerHTML = "";

        if (lista.length === 0) {
            msgVazio.style.display = "block";
            return;
        }
        msgVazio.style.display = "none";

        lista.forEach((s, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${s.id}</td>
                <td>${s.nome}</td>
                <td>${s.tipo}</td>
                <td>${s.localizacao}</td>
                <td>${badgeStatus(s.status)}</td>
                ${isAdmin ? `<td>
                    <a href="#" class="acao-link editar"  data-idx="${idx}">EDITAR</a>
                    <a href="#" class="acao-link excluir" data-idx="${idx}">EXCLUIR</a>
                </td>` : ""}
            `;

            tbodySensores.appendChild(tr);
        });

        if (isAdmin) {

            tbodySensores.querySelectorAll(".acao-link.editar").forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    abrirModalEditar(Number(link.dataset.idx));                
                });
            });

            tbodySensores.querySelectorAll(".acao-link.excluir").forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    excluirSensor(Number(link.dataset.idx));
                });
            });

        }
    }

    btnNovoSensor.addEventListener("click", () => {
        sectionCadastro.style.display = "block";
        formSensor.reset();
        msgSensor.innerHTML = "";
        btnNovoSensor.style.display = "none";
        sectionCadastro.scrollIntoView({ behavior: "smooth" });
    });

    btnCancelar.addEventListener("click", () => {
        sectionCadastro.style.display = "none";
        btnNovoSensor.style.display = "inline-block";
        msgSensor.innerHTML = "";
    });

    formSensor.addEventListener("submit", (e) => {
        e.preventDefault();


        const id = document.getElementById("snr-id").value.trim().toUpperCase();
        const nome = document.getElementById("snr-nome").value.trim();
        const tipo = document.getElementById("snr-tipo").value;
        const localizacao = document.getElementById("snr-localizacao").value.trim();
        const status = document.getElementById("snr-status").value;
        const descricao = document.getElementById("snr-descricao").value.trim();

        if (!id || !nome || !tipo || !localizacao) {
            mostrarMsg(msgSensor, `Já existe um sensor com o ID "${id}".`, "err");
            return;
        }

        lista.push({ id, nome, tipo, localizacao, status, descricao });
        salvarSensores(lista);
        renderizar(lista);

        formSensor.reset();
        mostrarMsg(msgSensor, `Sensor ${id} cadastrado com sucesso!`, "ok");

        setTimeout(() => {
            sectionCadastro.style.display = "none";
            btnNovoSensor.style.display = "inline-block";
            msgSensor.innerHTML = "";
        }, 2200);

    });

    function excluirSensor(idx) {
        const lista = carregarSensores();
        const sensor = lista[idx];
        const idsComHistorico = [];

        if (idsComHistorico.includes(sensor.id)) {
            avisoHistorico.style.display = "block";
            setTimeout(() => (avisoHistorico.style.display = "none"), 4000);
            return;
        }

        if (!confirm(`Deseja excluir o sensor "${sensor.nome}" (${sensor.id})?`))
            return;

        lista.splice(idx, 1);
        salvarSensores(lista);
        renderizar(lista);

    }



});