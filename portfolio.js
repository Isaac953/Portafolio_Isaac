//Start Functions Load Components with index.html//
const loadHeader = async () => {
  header.innerHTML = await (
    await fetch("./components/html/01_header.html")
  ).text();
  loadInput();
};

const loadSidebar = async () => {
  sidebar.innerHTML = await (
    await fetch("./components/html/02_sidebar.html")
  ).text();
};

let loadCoverPage = async () => {
  content.innerHTML = await (
    await fetch("./components/html/03_cover_page.html")
  ).text();

  let componentName = document.getElementById("componentName");
  componentName.value = "Cover page";
  backgroundContent();
};

let loadAboutMe = async () => {
  content.innerHTML = await (
    await fetch("./components/html/04_about_me.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "About me";
  backgroundContent();
};

let loadServices = async () => {
  content.innerHTML = await (
    await fetch("./components/html/05_services.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Services";
  backgroundContent();
};

let loadSkills = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Skills";
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección habilidades en construcción";
  backgroundContent();
};

let loadProyects = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Proyects";
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección proyectos en construcción";
  backgroundContent();
};

let loadContact = async () => {
  content.innerHTML = await (
    await fetch("./components/html/08_contact.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Contact";
  backgroundContent();
};

const loadFooter = async () => {
  footer.innerHTML = await (
    await fetch("./components/html/09_footer.html")
  ).text();
};
//End Functions Load Components with index.html//

//Start Additional Container Size Functions//

//Start function load input default with header//
const loadInput = () => {
  let anchoVentanaH = window.innerWidth;
  let screenSizeH = document.getElementById("screenSize");
  let componentName = document.getElementById("componentName");

  screenSizeH.value = anchoVentanaH;
  componentName.value = "Cover page";
};
//End function load input default with header//

//Start function load background content properties and size//
const backgroundContent = () => {
  let mainContent = document.getElementById("mainContent").style;
  let contentLayout = document.getElementById("content").style;
  let screenSize = document.getElementById("screenSize");
  let componentName = document.getElementById("componentName");
  let screenSizeInt = screenSize.value;

  contentLayout.flexDirection = "column";
  contentLayout.backgroundAttachment = "fixed";
  contentLayout.backgroundPosition = "center";
  contentLayout.backgroundRepeat = "no-repeat";
  contentLayout.backgroundSize = "cover";

  switch (true) {
    case componentName.value === "Cover page":
      contentLayout.backgroundImage = 'url("./assets/cover_page_img.jpg")';
      if (screenSizeInt > 1200) {
        mainContent.height = "100vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "110vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "130vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "100vh";
      }
      break;
    case componentName.value === "About me":
      contentLayout.backgroundImage = 'url("./assets/about_me_img.jpg")';
      if (screenSizeInt > 1200) {
        mainContent.height = "100vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "110vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "140vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "100vh";
      }
      break;
    case componentName.value === "Services":
      contentLayout.backgroundImage = 'url("./assets/services_img.jpg")';
      if (screenSizeInt > 1200) {
        mainContent.height = "120vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "130vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "170vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "145vh";
      }
      break;
    case componentName.value === "Skills":
      contentLayout.backgroundImage = "none";
      contentLayout.backgroundColor = "red";
      break;
    case componentName.value === "Proyects":
      contentLayout.backgroundImage = "none";
      contentLayout.backgroundColor = "purple";
      break;
    case componentName.value === "Contact":
      contentLayout.backgroundImage = 'url("./assets/contact_img.jpg")';

      if (screenSizeInt > 1200) {
        mainContent.height = "100vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "110vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "125vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "100vh";
      }
      break;
  }
  //End function load background content properties and size//
};
// End Additional Container Size Functions//

//Start Load Functions default//
let loadPage = async () => {
  await loadHeader();
  await loadSidebar();
  await loadCoverPage();
  await loadFooter();
};

loadPage();
//End Load Functions default//
