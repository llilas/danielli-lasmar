// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão ou elemento que alterna o tema
  const themeToggle = document.getElementById("themeToggle");
  // Seleciona o ícone que indica o estado do tema (sol ou lua, por exemplo)
  const themeIcon = document.getElementById("themeIcon");
  // Referência ao elemento <body>, onde o tema será aplicado via classe CSS
  const body = document.body;
  // Referência ao elemento <video> e <source>
  const videoBg = document.getElementById("videobg");
  const videoSource = videoBg.querySelector("source");

  // Obtém o tema salvo no localStorage (se existir)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      // Aplica a classe "dark-theme" ao <body> se o tema salvo for "dark"
      body.classList.toggle("dark-theme", savedTheme === "dark");
      // Define o ícone com base no tema salvo: lua para "dark" e sol para "light"
      themeIcon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
  }

  // Adiciona um evento de clique ao botão para alternar o tema
  themeToggle.addEventListener("click", () => {
      // Alterna a classe "dark-theme" no <body> e verifica se o modo escuro foi ativado
      const isDark = body.classList.toggle("dark-theme");

      // Alterna o vídeo de fundo
      videoSource.src = videoSource.src.includes("darkbg.mp4")
          ? "lightbg.mp4"
          : "darkbg.mp4";

      // Recarrega o vídeo para aplicar a nova fonte
      videoBg.load();

      // Atualiza o ícone com base no estado atual do tema
      themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";

      // Salva a preferência do tema no localStorage (como "dark" ou "light")
      localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

const menuButton = document.getElementById('menuButton'); // Botão para abrir/fechar o menu
const menu = document.querySelector('nav .menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe que mostra/oculta o menu
});






















// Adicionar animações onscroll
document.addEventListener("DOMContentLoaded", () => { // Aguarda o carregamento do DOM antes de executar
    const animatedElements = document.querySelectorAll(".animate-on-scroll"); // Seleciona todos os elementos com a classe "animate-on-scroll"

    // Cria um IntersectionObserver para monitorar elementos ao entrar na viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => { // Itera sobre cada entrada observada
            if (entry.isIntersecting) { // Verifica se o elemento está visível na viewport
                entry.target.classList.add("visible"); // Adiciona a classe "visible" para iniciar a animação
                observer.unobserve(entry.target); // Para de observar o elemento após a primeira interseção
            }
        });
    }, {
        threshold: 0.1 // Percentual de visibilidade necessário para disparar a interseção (10% visível)
    });

    // Observa cada elemento com a classe "animate-on-scroll"
    animatedElements.forEach((el) => observer.observe(el));
});

// Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => { // Seleciona todos os links dentro do elemento <nav>
    anchor.addEventListener('click', function (e) { // Adiciona um evento de clique a cada link
        e.preventDefault(); // Previne o comportamento padrão do clique (navegação imediata)
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do elemento alvo removendo o "#" do href
        const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo pelo ID

        // Faz o scroll suave até o elemento alvo
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Desloca até o topo do elemento, ajustando pela altura do menu
            behavior: 'smooth' // Ativa o comportamento suave no scroll
        });
    });
});
