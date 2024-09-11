const flagsElement = document.getElementsByClassName('flags__item');

const textsToChange = document.querySelectorAll('[data-section]');

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`/assets/languages/${language}.json`);

    
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

for (var i = 0; i < flagsElement.length; i++) {
    flagsElement[i].addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    })
}

const el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}
// or, to keep it clean
el?.addEventListener('click', swapper, false);

