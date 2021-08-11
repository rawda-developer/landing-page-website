/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

let sectionList = [];
let unorderList = document.getElementById("navbar__list");
/**
 * To create a list of section elements
 */
createSectionList = () => {
    for (let i = 0; i < 4; i++) {
        sectionList.push(document.getElementById("section" + (i + 1)));
    }
}

/**
 * A function to create the nav bar
 */
buildNav = () => {
    for (let i = 0; i < sectionList.length; i++) {
        let sectionElement = document.createElement("li");
        sectionElement.innerHTML = "<a href='#section" + (i + 1) + "'>Section " + (i + 1) + "</a>";
        //  sectionElement.innerHTML = "<a href='#'>Section " + (i + 1) + "</a>";
        sectionElement.addEventListener('click', handler = (e) => {
            e.preventDefault();
            sectionList[i].scrollIntoView({ behavior: "smooth" });
        });
        sectionElement.classList.add('list_item');
        unorderList.appendChild(sectionElement);
        window.addEventListener('scroll', function () {
            let element = sectionList[i];
            let position = element.getBoundingClientRect();
            // checking whether fully visible
            if (position.top >= 0 && position.bottom <= 825) {
                detectSection(sectionElement, true);
            } else {
                detectSection(sectionElement, false);

            }
        });
    }
}

detectSection = (element, add_or_remove) => {
    if (add_or_remove) { element.classList.add("your-active-class"); }
    else if (element.classList.contains("your-active-class")) {
        element.classList.remove("your-active-class");
    }
}


/**
 * To calculate the performance in milli seconds
 */

testPerformance = () => {
    console.log(performance.now() + " milli seconds");
}
/**
 * Main function to combine other fuuctions
 */
main = () => {
    createSectionList();
    buildNav();
    testPerformance();
}

main();