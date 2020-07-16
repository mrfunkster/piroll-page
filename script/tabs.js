const headerTabs = document.querySelectorAll('.tabs-header-item');
const contentTabs = document.querySelectorAll('.tabs-content-item');
let prevClientWidth = this.outerWidth;


for (let headerTab of headerTabs) {
    headerTab.addEventListener('click', function(e) {
        e.preventDefault();

        headerTabs.forEach((childTab) => {
            childTab.classList.remove('active-tab');
        }); 
        contentTabs.forEach((childTab) => {
            childTab.classList.remove('active-tab');
        });

        headerTab.classList.add('active-tab');
        const tabID = headerTab.getAttribute('href').substr(1);
        let tab = document.getElementById(tabID);
        tab.classList.add('active-tab');
    });
};

getMaxHeight();
window.onresize = function (e) {
    let currentClientWidth = e.target.outerWidth;
    if (currentClientWidth != prevClientWidth) {
        prevClientWidth = currentClientWidth;
        getMaxHeight();
    }
}

function getMaxHeight() {
    let maxTabHeight = 0;
    contentTabs.forEach((currentTab) => {
        currentTab.style.height = '';
    });
    for (let i = 0; i < headerTabs.length; i++) {
        headerTabs[i].click();
        let currentHeight = contentTabs[i].offsetHeight;
        if (currentHeight > maxTabHeight) {
            maxTabHeight = currentHeight;
        }
    }
    headerTabs[0].click();
    contentTabs.forEach((currentTab) => {
        currentTab.style.height = `${maxTabHeight}px`;
    });
    console.log(`Equal resize tab-content height to ${maxTabHeight}px.`);
}

