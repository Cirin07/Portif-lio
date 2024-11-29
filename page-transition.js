document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            let targetUrl = this.getAttribute('href'); // Obtém o link de destino

            // Adiciona a animação de fade-out
            document.body.style.opacity = '0';

            // Após a animação de saída, carrega a nova página
            setTimeout(function () {
                window.location.href = targetUrl; // Vai para a próxima página
            }, 500); // Aguarda meio segundo para a animação de saída
        });
    });
});
function toggle(el) {
    var display = document. getElementById(el).style.display;
    if(display == "block"){
        document.getElementById(el).style.display = "none";
    }
    else{
        document.getElementById(el).style.display = "block";
    }
}
