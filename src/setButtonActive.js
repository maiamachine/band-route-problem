export default function(button) {
    const activeBtns = document.querySelectorAll(".active");
    activeBtns.forEach(button => button.classList.remove('active'));
    button.className += " active";
}