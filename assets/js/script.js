
console.dir(document)





document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const button = document.querySelector('nav ul li:nth-child(5)')
    if(window.scrollY > 300){
        nav.classList.add('scrolled');
        button.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
        button.classList.remove('scrolled');
    }
})
