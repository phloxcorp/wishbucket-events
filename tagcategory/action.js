
const highlightLinka =(e) =>{

    const linkas = document.querySelectorAll(".sidebarsection");
    const sections = document.querySelectorAll(".sections");
    linkas.forEach(linka => {
        linka.classList.remove("active");
      });

    sections.forEach(section => {
        section.classList.add("section_hide");
      });
    e.target.parentNode.classList.add("active");
    const thesection = document.querySelector(e.target.id);
    thesection.classList.remove("section_hide");
}