document.addEventListener("DOMContentLoaded", function () {
    // Inicialização do Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                // Pausar todos os vídeos ao mudar de slide
                document.querySelectorAll('.carousel-video').forEach(video => {
                    video.pause();
                });
                // Reproduzir vídeo no slide ativo
                const activeSlide = document.querySelector('.swiper-slide-active video');
                if (activeSlide) {
                    activeSlide.play();
                }
            },
        },
    });

    // Função para redirecionar para a página de download
    document.querySelector("button").addEventListener("click", function () {
        window.location.href = "https://example.com/download"; // Substitua pela URL de download correta
    });

    // Função para envio de formulário de contato
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const responseMessage = document.getElementById("responseMessage");

        if (name && email && message) {
            responseMessage.textContent = "Obrigado pela sua mensagem!";
            this.reset();
        } else {
            responseMessage.textContent = "Por favor, preencha todos os campos.";
        }
    });
});
