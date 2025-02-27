function setup()
{
    document.getElementById("modal-close").addEventListener("click", _ => {
        document.getElementById("modal").classList.remove("is-active");
    });

    for (let minipi of document.getElementsByClassName("button-minipi"))
    {
        minipi.addEventListener("click", _ => {
            document.getElementById("modal-title").innerHTML = minipi.innerHTML;
            document.getElementById("modal-likes").innerHTML = minipi.dataset.likes.replaceAll("\n", "<br>");
            document.getElementById("modal-behaviors").innerHTML = minipi.dataset.behaviors.replaceAll("\n", "<br>");
            document.getElementById("modal").classList.add("is-active");
        });
    }
}

document.onreadystatechange = async function () {
    if (document.readyState == "interactive") {
        setup();
    }
};