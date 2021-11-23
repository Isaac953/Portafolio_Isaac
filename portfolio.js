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
    await fetch("./components/html/06_skills.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Skills";
  backgroundContent();
};

let loadProyects = async () => {
  content.innerHTML = await (
    await fetch("./components/html/07_proyects.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Proyects";
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
  let altoVentanaH = window.innerHeight;
  let screenSizeH = document.getElementById("screenSize");
  let screenSizeHeightH = document.getElementById("screenHeight");
  let componentName = document.getElementById("componentName");

  screenSizeH.value = anchoVentanaH;
  screenSizeHeightH.value = altoVentanaH;
  componentName.value = "Cover page";
};
//End function load input default with header//

const loadUrl = () => {
  let params = location.href;
  let charurl = params.search("#")
  let componentid = params.slice(charurl);

  switch (true) {
    case componentid === "#home":
      loadCoverPage();
      break;
    case componentid === "#about-me":
      loadAboutMe();
      break;
    case componentid === "#services":
      loadServices();
      break;
    case componentid === "#skills":
      loadSkills();
      break;
    case componentid === "#proyects":
      loadProyects();
      break;
    case componentid === "#contact":
      loadContact();
      break;
    default:
      loadCoverPage();
      break;
  }
}

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
        mainContent.height = "140vh";
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
        mainContent.height = "145vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "105vh";
      }
      break;
    case componentName.value === "Services":
      contentLayout.backgroundImage = 'url("./assets/services_img.jpg")';
      if (screenSizeInt > 1200) {
        mainContent.height = "120vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "130vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "185vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "155vh";
      }
      break;
    case componentName.value === "Skills":
      contentLayout.backgroundImage = 'url("./assets/skills_img.jpg")';
      contentLayout.backgroundPosition = "top";
      if (screenSizeInt > 1200) {
        mainContent.height = "135vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "145vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "245vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "185vh";
      }
      break;
    case componentName.value === "Proyects":
      contentLayout.backgroundImage = 'url("./assets/proyects_img.jpg")';
      contentLayout.backgroundPosition = "center";
      if (screenSizeInt > 1200) {
        mainContent.height = "150vh";
      } else if (screenSizeInt <= 1200 && screenSizeInt > 850) {
        mainContent.height = "140vh";
      } else if (screenSizeInt <= 850 && screenSizeInt > 650) {
        mainContent.height = "265vh";
      } else if (screenSizeInt <= 650) {
        mainContent.height = "100vh";
      }

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
  // await loadCoverPage();
  await loadUrl();
  await loadFooter();
};

loadPage();

//End Load Functions default//
