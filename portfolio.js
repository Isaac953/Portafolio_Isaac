// Start Functions Load Components with index.html //

async function loadHeader() {
    header.innerHTML = await (await fetch('./components/html/01_header.html')).text();
}

async function loadCoverPage() {
    content.innerHTML = await (await fetch('./components/html/02_cover_page.html')).text();
}

async function loadAboutMe() {
    content.innerHTML = await (await fetch('./components/html/03_about_me.html')).text();
}

async function loadServices() {
    content.innerHTML = await (await fetch('./components/html/04_services.html')).text();
}

async function loadProyects() {
    content.innerHTML = await (await fetch('./components/html/05_proyects.html')).text();
}

async function loadContact() {
    content.innerHTML = await (await fetch('./components/html/06_contact.html')).text();
}

async function loadFooter() {
    footer.innerHTML = await (await fetch('./components/html/07_footer.html')).text();
}

// End Functions Load Components with index.html //

// Start Load Functions default //
loadHeader();

loadCoverPage();

loadFooter();

// End Load Functions default //