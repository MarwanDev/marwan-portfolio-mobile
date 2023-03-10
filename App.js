function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const menu = document.getElementById('toggle-icon');
toggleMobileMenu(menu);

const worksSection = document.getElementById('works');
const overlay = document.getElementById('overlay');
const headWork = {
  id: 550,
  header: 'Multi-Post Stories',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  imgSrc: 'assets/Img Placeholder.png',
  languages: ['css', 'html', 'bootstrap', 'ruby'],
  liveLink: 'https://github.com/MarwanDev',
  sourceLink: 'https://github.com/MarwanDev',
};

const firstWork = `<div class="head-work" id="head-work">
  <div class="image-container">
    <img src="assets/Img Placeholder.png" alt="project-cover">
  </div>
  <div>
    <h2>${headWork.header}</h2>
    <p>${headWork.paragraph}</p>
    <div class="techstack-container">
      <ul>
        <li>${headWork.languages[0]}</li>
        <li>${headWork.languages[1]}</li>
        <li>${headWork.languages[2]}</li>
        <li>${headWork.languages[3]}</li>
      </ul>
    </div>
    <a class="project-button" id="work-button-550">See Project</a>
  </div>
</div>`;

worksSection.innerHTML = firstWork;

const workHeader = document.getElementById('head-work');

const worksArray = [
  {
    id: 1,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
  {
    id: 2,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
  {
    id: 3,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
  {
    id: 4,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
  {
    id: 5,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
  {
    id: 6,
    header: 'Profesional Art Printing Data',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/MarwanDev',
    sourceLink: 'https://github.com/MarwanDev',
    imgSrc: 'assets/Img Placeholder1.png',
  },
];

const worksDisplay = (id,
  header,
  paragraph,
  languages,
  liveLink,
  sourceLink,
  imgSrc) => `<div class="works-section">
  <div class="work">
    <h2>${header}</h2>
    <p>${paragraph}</p>
    <img class="work-img" src="${imgSrc}" />
    <a class="work-link" href="${liveLink}"></a>
    <a class="work-link" href="${sourceLink}"></a>
    <div class="techstack-container">
      <ul>
        <li>${languages[0]}</li>
        <li>${languages[1]}</li>
        <li>${languages[2]}</li>
      </ul>
  </div>
  <button id="work-button-${id}" type="button" class="project-button">See Project</button>
</div>`;

worksArray.forEach((work) => {
  const htmltoAdd = worksDisplay(work.id,
    work.header,
    work.paragraph,
    work.languages,
    work.liveLink,
    work.sourceLink,
    work.imgSrc);
  workHeader.insertAdjacentHTML('afterend', htmltoAdd);
});

const popupWindow = (id, header, paragraph, languages, liveLink, sourceLink, imgSrc) => `        <section class="popup-window" id="popup-window-${id}">
<div class="popup-head">
  <h3>${header}</h3>
  <ul>
    <li>${languages[0]}</li>
    <li>${languages[1]}</li>
    <li>${languages[2]}</li>
  </ul>
  <button id="data-close-button-${id}" class="close-button">&times;</button>
</div>
<div class="popup-body">
  <div class="popup-image-container"></div>
  <img src="${imgSrc}" alt="Portfolio Image" />
  <div class="popup-content">
    <p>${paragraph}</p>
    <div class="popup-buttons">
      <button class="">
        <a href="${liveLink}">See Live</a>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
          </svg>
      </button>
      <button class="live-link-button">
        <a href="${sourceLink}">See Source</a>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_48_833)">
          <g clip-path="url(#clip1_48_833)">
          <path d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z" fill="white"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_48_833">
          <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
          </clipPath>
          <clipPath id="clip1_48_833">
          <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
          </clipPath>
          </defs>
          </svg>
      </button>
    </div>
  </div>
</div>
</section>`;

const worksSectionHeader = document.getElementById('works-header');

worksArray.forEach((work) => {
  const htmltoAdd = popupWindow(work.id,
    work.header,
    work.paragraph,
    work.languages,
    work.liveLink,
    work.sourceLink,
    work.imgSrc);
  worksSectionHeader.insertAdjacentHTML('afterend', htmltoAdd);
});

worksArray.forEach((work) => {
  const workBtn = document.getElementById(`work-button-${work.id}`);
  workBtn.addEventListener('click', () => {
    const pop = document.getElementById(`popup-window-${work.id}`);
    pop.style.display = 'flex';
    overlay.style.display = 'flex';
  });

  const popCloseBtn = document.getElementById(`data-close-button-${work.id}`);

  popCloseBtn.addEventListener('click', () => {
    const pop = document.getElementById(`popup-window-${work.id}`);
    pop.style.display = 'none';
    overlay.style.display = 'none';
  });
});

const htmltoAdd = popupWindow(headWork.id,
  headWork.header,
  headWork.paragraph,
  headWork.languages,
  headWork.liveLink,
  headWork.sourceLink,
  headWork.imgSrc);
worksSectionHeader.insertAdjacentHTML('afterend', htmltoAdd);

const headWorkBtn = document.getElementById(`work-button-${550}`);

headWorkBtn.addEventListener('click', () => {
  const pop = document.getElementById('popup-window-550');
  pop.style.display = 'flex';
  overlay.style.display = 'flex';
});

const headPopCloseBtn = document.getElementById('data-close-button-550');
headPopCloseBtn.addEventListener('click', () => {
  const pop = document.getElementById('popup-window-550');
  pop.style.display = 'none';
  overlay.style.display = 'none';
});

// Form Validation

// const errorMsg = document.getElementById('error-msg');
// const email = document.getElementById('email');
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//   if (email.value !== email.value.toLowerCase()) {
//     e.preventDefault();
//     errorMsg.style.display = 'flex';
//   } else {
//     errorMsg.style.display = 'none';
//   }
// });