# RailPulse

## Sobre o Projeto

O **RailPulse** é uma solução tecnológica desenvolvida para otimizar e auxiliar a gestão de operações ferroviárias. O sistema captura e monitora dados críticos dos trens em tempo real — como velocidade, localização, consumo de combustível e diagnósticos de falhas — por meio de sensores IoT (Internet das Coisas) estrategicamente instalados nos trilhos e nas próprias locomotivas.

O foco principal do projeto é transformar dados brutos em decisões inteligentes, aumentando a segurança e a eficiência operacional. Com isso, falhas podem ser detectadas rapidamente e manutenções preditivas passam a ser realizadas com base em fatos, permitindo que os gestores acompanhem o desempenho da frota e identifiquem padrões operacionais a serem otimizados.

---

## Funcionalidades

* **Controle de Acesso Seguro:** Sistema de login com autenticação para administradores e usuários.
* **Gestão de Sensores e Trens:** Telas dedicadas para o cadastro e vinculação de sensores IoT a locomotivas específicas.
* **Monitoramento em Tempo Real:** Painel de controle (Dashboard) para acompanhar o status da ferrovia.
* **Geolocalização:** Visualização e rastreamento dos trens ativos em um mapa interativo.
* **Alertas Automáticos:** Notificações instantâneas no sistema em caso de anormalidades ou falhas detectadas.
* **Relatórios e Gráficos:** Ferramentas para geração de relatórios detalhados e gráficos interativos para análise histórica de desempenho.

---

## Tecnologias Utilizadas

* **Back-end:** PHP (Estruturado com separação de rotas e camadas pública/privada)
* **Front-end:** HTML5, CSS3, JavaScript (ES6+)
* **Banco de Dados:** MySQL / MariaDB (Arquivo `railpulse.sql`)
* **Metodologia & Documentação:** Scrum, Markdown (pesquisas e documentações internas)

---

## Estrutura do Projeto

Abaixo está a organização de pastas e arquivos do repositório:

```text
RAILPULSE/
│
├── assets/
│   ├── img/                  # Imagens e vetores do sistema
│   └── style/                # Arquivos de estilização CSS
│
├── doc/                      # Documentação do projeto e pesquisas
│   ├── logo_scrum.png
│   ├── logo_xampp.png
│   ├── pesquisa-crud.md
│   ├── pesquisa-scrum.md
│   └── pesquisa-xampp.md
│
├── infra/
│   └── db/
│       └── railpulse.sql     # Script de criação do banco de dados
│
├── private/                  # Regras de negócio e processamento interno (PHP)
│   ├── cadastro.php
│   ├── dashboard.php
│   ├── login.php
│   ├── relatorios.php
│   ├── rotas.php
│   ├── sensores.php
│   ├── trens.php
│   └── usuarios.php
│
├── public/                   # Telas e arquivos acessíveis ao usuário (PHP)
│   ├── cadastro.php
│   ├── dashboard.php
│   ├── login.php
│   ├── relatorios.php
│   ├── rotas.php
│   ├── sensores.php
│   └── trens.php
│
├── script/                   # Lógica e interatividade no Front-end (JavaScript)
│   ├── cadastro.js
│   ├── dashboard.js
│   ├── login.js
│   ├── relatorios.js
│   ├── rotas.js
│   ├── sensores.js
│   ├── trens.js
│   └── usuarios.js
│
├── index.html                # Página de entrada da aplicação
├── LICENSE                   # Arquivo de licença do projeto
└── README.md                 # Documentação principal
```
---

## Aprendizados e Objetivos

O principal objetivo deste projeto é aplicar conceitos práticos de desenvolvimento de sistemas comerciais, conectando hardware (sensores IoT simulados/integrados) a uma aplicação web completa. Durante o desenvolvimento, foram consolidados aprendizados em:

* Arquitetura e organização de projetos web divididos em escopo público e privado.

* Integração de banco de dados relacional com PHP.

* Manipulação dinâmica de elementos de tela, mapas e gráficos via JavaScript.

* Aplicação da metodologia ágil Scrum para organização de tarefas da equipe.

---

## Como Executar o Projeto

1 - **Pré-requisitos:** Certifique-se de ter um ambiente de servidor local instalado, como o XAMPP (com PHP e MySQL ativos).

2 - **Clonar o Repositório:**

```bash
git clone [https://github.com/seu-usuario/railpulse.git](https://github.com/seu-usuario/railpulse.git)
````

3 - **Mover para o Servidor:** Cole a pasta do projeto dentro do diretório htdocs do seu XAMPP (ou equivalente).

4 - **Configurar o Banco de Dados:**

  * Abra o phpMyAdmin (http://localhost/phpmyadmin).
  
  * Crie um banco de dados chamado railpulse.

  * Importe o arquivo encontrado em infra/db/railpulse.sql.

5 - **Acessar a Aplicação:** Abra o navegador e digite http://localhost/railpulse/index.html.

---

## Desenvolvedores

**Este projeto foi desenvolvido por:**

Arthur Vieira

Gabriel Ostrovski

Gustavo Miquelute

Nicolas Lopes

Estudantes do Curso Técnico em Desenvolvimento de Sistemas no SENAI Santa Catarina.
