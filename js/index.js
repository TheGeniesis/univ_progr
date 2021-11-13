const activeItemFromGroup = (elements, clickedId) => {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id == clickedId) {
            elements[i].classList.add("active");
            continue;
        }
        elements[i].classList.remove("active");
    }
}

const changeFontSize = (elements, clickedId) => {
    activeItemFromGroup(elements, clickedId);
    const body = document.getElementsByTagName("body");
    const size = clickedId.split("-").pop();

    body[0].className = body[0].className.replace(/(text-size-.*?)\S?/, `text-size-${size} `)
}

const changeContrast = (elements, clickedId) => {
    activeItemFromGroup(elements, clickedId);
    const body = document.getElementsByTagName("body");
    const contrast = clickedId.split("-").pop();
    body[0].className = body[0].className.replace(/(text-contrast-.*?)\S?/, `text-contrast-${contrast} `)
}

window.onload = function () {
    const sizeElements = document.getElementById("text-size-section").getElementsByTagName("button");
    for (let i = 0; i < sizeElements.length; i++) {
        sizeElements[i].onclick = (element) => {
            changeFontSize(sizeElements, sizeElements[i].id);
        }
    }

    const contrastElements = document.getElementById("text-contrast-section").getElementsByTagName("button");
    for (let i = 0; i < contrastElements.length; i++) {
        contrastElements[i].onclick = (element) => {
            changeContrast(contrastElements, contrastElements[i].id);
        }
    }
};
