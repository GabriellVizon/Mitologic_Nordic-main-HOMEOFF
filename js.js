document.addEventListener('DOMContentLoaded', () => {

    // Abre o modal correspondente SEM ACUMULAR CLIQUES ANTIGOS
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => {

            // Fecha todos antes de abrir o novo
            document.querySelectorAll('.modal').forEach(m => {
                m.style.display = "none";
            });

            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) modal.style.display = "block";
        });
    });

    // Fecha pelo X
    document.querySelectorAll('.modal .close').forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').style.display = "none";
        });
    });

    // Fecha ao clicar fora da caixa
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = "none";
        }
    });

    // Fecha todos pelo ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
        }
    });


    /* ===========================
        SCROLL SUAVE
    ============================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ===========================
        HOVER CARDS (EFEITO)
    ============================*/
    const cards = document.querySelectorAll('.deus-card, .criatura-card, .runa-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#fff';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#d4af37';
        });
    });

});