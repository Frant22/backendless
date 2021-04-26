const selectedThemeByRadio = document.querySelectorAll('input[name="theme"]');
const links = document.querySelectorAll('.link');
const buttons = document.querySelectorAll('.button');
const selector = document.getElementById('select');
const headerElement = document.getElementById('header');
const sectionElement = document.getElementById('section');
const footerElement = document.getElementById('footer');

function changeTheme(value) {
  if (value === 'light') {
    headerElement.className = 'header header-light';
    sectionElement.className = 'section section-light';
    footerElement.className = 'footer footer-light';

    links.forEach((link) => {
      link.classList.remove('link-light');
      link.classList.add('link');
    });
  }

  if (value === 'dark') {
    headerElement.className = 'header header-dark';
    sectionElement.className = 'section section-dark';
    footerElement.className = 'footer footer-dark';

    links.forEach((link) => {
      link.classList.remove('link');
      link.classList.add('link-light');
    });
  }

  if (value === 'grey') {
    headerElement.className = 'header header-grey';
    sectionElement.className = 'section section-grey';
    footerElement.className = 'footer footer-grey';

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
