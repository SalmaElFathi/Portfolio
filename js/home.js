document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector("nav");
    const noms = document.querySelectorAll('.nom');
    const progressBars = document.querySelectorAll('.progress');
    const demos=document.querySelectorAll('.demo');
    const iframe = document.querySelector('iframe');
        if (!document.querySelector('.theme-switcher')) {
        const themeSwitcher = document.createElement('div');
        themeSwitcher.className = 'theme-switcher';
        themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(themeSwitcher);
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            
            themeSwitcher.innerHTML = isDark ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
        noms.forEach((nom, index) => {
        setTimeout(() => {
            nom.classList.remove('nom');
            nom.classList.add('animate');
        }, 500 * (index + 1));
    });
    
    menu.addEventListener('click', () => {
        const navUl = nav.querySelector('ul');
        nav.classList.toggle('hidden-nav');
        
        if (nav.classList.contains('hidden-nav')) {
            navUl.classList.toggle('active');
        } else {
            navUl.classList.remove('active');
        }
    });
    
   
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const parent = bar.closest('.competence, .langues div');
            if (parent && isInViewport(parent) && !bar.classList.contains('animated')) {
                bar.style.width = bar.style.width || "0%";
                bar.classList.add('animated');
            }
        });
    };
    
 
    
    if (document.body.classList.contains('dark-theme')) {
        printButton.style.backgroundColor = '#16213e';
        printButton.style.color = 'white';
    }
    
    document.querySelector('.theme-switcher').addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            printButton.style.backgroundColor = '#16213e';
            printButton.style.color = 'white';
        } else {
            printButton.style.backgroundColor = 'white';
            printButton.style.color = 'black';
        }
    });
    
    animateProgressBars();


    function setSrc(src) {
        if (iframe) {  
            iframe.src = src;
        } else {
            console.error("L'iframe n'a pas été trouvé !");
        }}
    
        demos.forEach(demo=>{
            demo.onclick=()=>{
                setSrc(demo.getAttribute('data-src'));
            }
        }) 
});
