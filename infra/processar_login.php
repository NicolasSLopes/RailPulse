<?php
session_start();

include '../infra/conexao.php';

$email_digitado = $_POST['email'];
$senha_digitada = $_POST['senha'];

$sql = "SELECT * FROM usuarios WHERE email = '$email_digitado'";

$query = mysqli_query($mysqli, $sql);

$total_linhas = mysqli_num_rows($query);

if ($total_linhas == 1) {
    
    $usuario = mysqli_fetch_assoc($query);

    if ($senha_digitada == $usuario['senha']) {
        
        $_SESSION['id'] = $usuario['id'];
        $_SESSION['nome'] = $usuario['nome'];

        
        //aqui voce coloca a página para onde o usuário será redirecionado após o login bem-sucedido

   
} else {
    echo "E-mail não encontrado no nosso sistema.";
}
?>
