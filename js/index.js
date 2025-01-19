function toggleDetails(button) {
    const cardFooter = button.nextElementSibling; 
    if (cardFooter.style.display === "none") {
        cardFooter.style.display = "block"; 
        button.textContent = "Hide Details"; 
    } else {
        cardFooter.style.display = "none"; 
        button.textContent = "See Details"; 
    }
}
