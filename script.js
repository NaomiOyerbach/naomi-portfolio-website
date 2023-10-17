
let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme)
}

let themeDot = document.getElementsByClassName('theme-dot')

let themeDotArray = Array.from(themeDot);

themeDotArray.map((them) => {
    them.addEventListener('click', (event) => {
        const mode = event.currentTarget.dataset.mode;
        console.log(mode);
        setTheme(mode)
    });
});

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}