
// Contador regressivo
        function updateCountdown() {
            const weddingDate = new Date('December 11, 2025 16:30:00').getTime();
            const now = new Date().getTime();
            const timeLeft = weddingDate - now;
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Atualizar contador a cada segundo
        setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // Modal de confirmação
        const modal = document.getElementById('rsvpModal');
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.getElementById('closeModal');
        const rsvpForm = document.getElementById('rsvpForm');
        
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Efeito de confete
        function createConfetti() {
            const colors = ['#d4af85', '#e8d0b3', '#c19d6f', '#f0e6d8', '#8c7b6c'];
            const confettiCount = 150;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                
                document.body.appendChild(confetti);
                
                const animation = confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720 - 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.1, 0.2, 0.8, 0.9)'
                });
                
                animation.onfinish = () => {
                    confetti.remove();
                };
            }
        }
        
        // Envio do formulário
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você normalmente enviaria os dados para um servidor
            // Por enquanto, vamos apenas mostrar um alerta
            alert('Obrigado por confirmar sua presença! Sua resposta foi registrada.');
            modal.style.display = 'none';
            rsvpForm.reset();
            
            // Efeito de confete
            createConfetti();
            
            // Mudar o texto do botão para confirmado
            openModalBtn.textContent = 'Presença Confirmada ✓';
            openModalBtn.style.background = '#8c7b6c';
            openModalBtn.style.cursor = 'default';
            openModalBtn.removeEventListener('click', arguments.callee);
        });
        
        // Efeito de digitação nos nomes
        function typeWriterEffect() {
            const name1 = document.getElementById('name1');
            const name2 = document.getElementById('name2');
            
            const name1Text = name1.textContent;
            const name2Text = name2.textContent;
            
            name1.textContent = '';
            name2.textContent = '';
            
            let i = 0;
            const typing1 = setInterval(() => {
                if (i < name1Text.length) {
                    name1.textContent += name1Text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing1);
                    name1.style.opacity = 1;
                    
                    // Iniciar digitação do segundo nome
                    let j = 0;
                    const typing2 = setInterval(() => {
                        if (j < name2Text.length) {
                            name2.textContent += name2Text.charAt(j);
                            j++;
                        } else {
                            clearInterval(typing2);
                            name2.style.opacity = 1;
                        }
                    }, 150);
                }
            }, 150);
        }
        
        // Animações de entrada para elementos
        function animateElements() {
            const dateElements = document.querySelectorAll('.date, .location');
            dateElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = `fadeInUp 1s ease forwards ${1.5 + index * 0.2}s`;
                }, 100);
            });
            
            const detailCards = document.querySelectorAll('.detail-card');
            detailCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = `fadeInUp 1s ease forwards ${2 + index * 0.2}s`;
                }, 100);
            });
            
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.animation = `fadeInUp 1s ease forwards ${2.5 + index * 0.1}s`;
                }, 100);
            });
        }
        
        // Controles de música e modo noturno
        const musicToggle = document.getElementById('musicToggle');
        const nightModeToggle = document.getElementById('nightModeToggle');
        const backgroundMusic = document.getElementById('backgroundMusic');
        let isPlaying = false;
        let isNightMode = false;
        
        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                backgroundMusic.play().catch(e => {
                    console.log('Reprodução automática bloqueada. Clique novamente para tocar.');
                });
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
        
        nightModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('night-mode');
            isNightMode = !isNightMode;
            nightModeToggle.innerHTML = isNightMode ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        });
        
        // Lightbox para galeria
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        const galleryItems = document.querySelectorAll('.gallery-item');
        let currentImageIndex = 0;
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                currentImageIndex = parseInt(this.getAttribute('data-index'));
                updateLightbox();
                lightbox.style.display = 'flex';
            });
        });
        
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        
        lightboxPrev.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
            updateLightbox();
        });
        
        lightboxNext.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
            updateLightbox();
        });
        
        function updateLightbox() {
            const currentImage = galleryItems[currentImageIndex].querySelector('img');
            lightboxImg.src = currentImage.src;
            lightboxCaption.textContent = currentImage.alt;
        }
        
        // Fechar lightbox com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        });
        
        // Efeito de partículas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 5 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = 'rgba(212, 175, 133, 0.5)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.opacity = Math.random() * 0.5 + 0.2;
                
                particlesContainer.appendChild(particle);
                
                // Animação de flutuação
                animateParticle(particle);
            }
        }
        
        function animateParticle(particle) {
            const duration = Math.random() * 20000 + 10000;
            const xMovement = Math.random() * 100 - 50;
            const yMovement = Math.random() * 100 - 50;
            
            particle.animate([
                { transform: 'translate(0, 0)' },
                { transform: `translate(${xMovement}px, ${yMovement}px)` }
            ], {
                duration: duration,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
        }
        
        // Iniciar efeitos após carregamento
        window.addEventListener('load', function() {
            typeWriterEffect();
            animateElements();
            createParticles();
        });
