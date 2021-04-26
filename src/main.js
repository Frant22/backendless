const selectedThemeByRadio = document.querySelectorAll('input[name="theme"]');
const links = document.querySelectorAll('.link');
const buttons = document.querySelectorAll('.button');
const selector = document.getElementById('select');

const headerElement = document.getElementById('header');
const sectionElement = document.getElementById('section');
const footerElement = document.getElementById('footer');

const lightThemeButton = document.getElementById('lightTheme');
const darkThemeButton = document.getElementById('darkTheme');
const greyThemeButton = document.getElementById('greyTheme');

const lightThemeSelect = document.getElementById('lightSelect');
const darkThemeSelect = document.getElementById('darkSelect');
const greyThemeSelect = document.getElementById('greySelect');

function changeTheme(value) {
  if (value === 'light') {
    headerElement.className = 'header header-light';
    sectionElement.className = 'section section-light';
    footerElement.className = 'footer footer-light';

    darkThemeButton.removeAttribute('checked');
    greyThemeButton.removeAttribute('checked');
    lightThemeButton.setAttribute('checked', true);

    greyThemeSelect.removeAttribute('selected');
    darkThemeSelect.removeAttribute('selected');
    lightThemeSelect.setAttribute('selected', true);

    links.forEach((link) => {
      link.classList.remove('link-light');
      link.classList.add('link');
    });
  }

  if (value === 'dark') {
    headerElement.className = 'header header-dark';
    sectionElement.className = 'section section-dark';
    footerElement.className = 'footer footer-dark';

    lightThemeButton.removeAttribute('checked');
    greyThemeButton.removeAttribute('checked');
    darkThemeButton.setAttribute('checked', true);

    greyThemeSelect.removeAttribute('selected');
    lightThemeSelect.removeAttribute('selected');
    darkThemeSelect.setAttribute('selected', true);

    links.forEach((link) => {
      link.classList.remove('link');
      link.classList.add('link-light');
    });
  }

  if (value === 'grey') {
    headerElement.className = 'header header-grey';
    sectionElement.className = 'section section-grey';
    footerElement.className = 'footer footer-grey';

    lightThemeButton.removeAttribute('checked');
    darkThemeButton.removeAttribute('checked');
    greyThemeButton.setAttribute('checked', true);

    lightThemeSelect.removeAttribute('selected');
    darkThemeSelect.removeAttribute('selected');
    greyThemeSelect.setAttribute('selected', true);

    links.forEach((link) => {
      link.classList.remove('link');
      link.classList.add('link-light');
    });
  }
}

selectedThemeByRadio.forEach((radio) => radio.addEventListener('change', () => {
  changeTheme(radio.value);
}));

Array.from(buttons).forEach((button) => button.addEventListener('click', (event) => {
  const press = event.target.value;
  changeTheme(press);
}));

selector.addEventListener('change', (event) => {
  const select = event.target.value;
  changeTheme(select);
}, false);
