function setup()
{
    document.getElementById("modal-minipi-close").addEventListener("click", _ => {
        document.getElementById("modal-minipi").classList.remove("is-active");
    });
    document.getElementById("modal-specials-close").addEventListener("click", _ => {
        document.getElementById("modal-specials").classList.remove("is-active");
    });

    for (let minipi of document.getElementsByClassName("button-minipi"))
    {
        minipi.addEventListener("click", _ => {
            document.getElementById("modal-minipi-title").innerHTML = minipi.innerHTML + (minipi.dataset.writtenby ? ` (${minipi.dataset.writtenby})` : "");
            document.getElementById("modal-minipi-likes").innerHTML = minipi.dataset.likes.replaceAll("\n", "<br>");
            document.getElementById("modal-minipi-behaviors").innerHTML = minipi.dataset.behaviors.replaceAll("\n", "<br>").replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
            document.getElementById("modal-minipi").classList.add("is-active");
        });
    }
    for (let minipi of document.getElementsByClassName("button-special"))
    {
        minipi.addEventListener("click", _ => {
            document.getElementById("modal-specials-title").innerHTML = minipi.innerHTML + (minipi.dataset.writtenby ? ` (${minipi.dataset.writtenby})` : "");
            document.getElementById("modal-specials").classList.add("is-active");
        });
    }
}

document.onreadystatechange = async function () {
    if (document.readyState == "interactive") {
        setup();
    }
};