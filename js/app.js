// All the code is wrapped inside DOMContentLoaded event inorder to wait for the DOM content to be fully loaded before executing the JS code

window.addEventListener('DOMContentLoaded', () => {

    // Declarations

    const sections = document.getElementsByTagName('section');
    const navList = document.getElementById('navbar__list');

    const nav = document.querySelector('.navbar__menu');
    const vDom = document.createDocumentFragment();

    const header = document.querySelector('.page__header');
    const body = document.querySelector('body');

    let lastScroll = window.scrollY;

    // This section adds Nav bar Sections "Li & Anchors" & also prevent the default scroll behavior.
    for (const section of sections) {
        // Adding the Nav bar sections
        const navItems = document.createElement("li");
        const navLinks = document.createElement("a");
        navLinks.textContent = section.dataset.nav;
        navLinks.classList.add("menu__link");
        navLinks.href = `#${section.id}`;
        navItems.append(navLinks);
        navList.appendChild(navItems);
        vDom.append(navList);

        // Switch the default scroll behavior into smooth instead of default.
        navLinks.addEventListener('click', (e) => {
            e.preventDefault();
            const activeSection = document.getElementById(e.target.getAttribute("href").substring(1));
            activeSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        })
    };

    // Append the finished section from the Virtual DOM to the Nav Bar.
    nav.appendChild(vDom);

    // Nav bar Icon drop down menu [Show/Hide].
    const navDisplay = document.querySelectorAll('.navbar__menu li a');
    const navListDisplay = document.querySelector('.navbar__menu li');
    document.getElementById('navIcon').addEventListener('click', () => {
        for (anch of navDisplay){
            if (getComputedStyle(anch).display === 'none'){
                anch.style.display = "block";
                navListDisplay.style.display = "block";
            } else {
                anch.style.display = "none";
            }
        }
    });

    // This function loops through the Nav sections to hide the anchors
    const hideAnch = function (){
        for (anch of navDisplay){
            anch.style.display = "none";
        }
        header.classList.add("nav__hideWhenScroll");
    }

    // This section control all the scrolling behaviour
    window.addEventListener("scroll", () => {

        // This Section hides the Nav bar when scrolling down & show it again when going up for better reading space also it hides the Nav bar after 10000MS of the scroll.
        if (lastScroll < window.scrollY) {
            hideAnch();
        } else {
            header.classList.remove("nav__hideWhenScroll");

            // Comment the following line to stop the Nav Bar hide functionality.
            // setTimeout(hideAnch, 10000);
        }
        lastScroll = window.scrollY;

        // This section change the Nav bar color and set border when scroll to top page.
        if (body.scrollTop === 0) {
            nav.classList.add('navTopChangeColor');
        } else {
            nav.classList.remove('navTopChangeColor');
        }

        // This section focus the view on the Section, Heading2 & the corresponding Nav tab.
        for (const section of sections){
            const activeH2 = document.querySelectorAll(`#${section.id} h2`);
            for (h2 of activeH2){
                const activeNav = document.querySelector(`[href="#${section.id}"]`);
                if (section.className === 'your-active-class'){
                    section.classList.remove('your-active-class');
                    activeNav.classList.remove('navigation');
                    h2.classList.remove('h2__focusView');
                }
                if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < 300){
                    section.classList.add('your-active-class');
                    activeNav.classList.add('navigation');
                    h2.classList.add('h2__focusView');
                }
            }
        }
    })
});