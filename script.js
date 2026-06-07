const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

toggle.addEventListener("click", () => {
	toggle.classList.toggle("active")
	menu.classList.toggle("active")
});

links.forEach(link => {
	link.addEventListener("click", () => {
		menu.classList.remove("active")
		toggle.classList.remove("active")
	});
});
//Efeito Stars
const starsContainer = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.dataset.x = star.style.left;
    star.dataset.y = star.style.top;

    starsContainer.appendChild(star);
}
//Efeitoao passa o mouse
document.addEventListener("mousemove", (e)=>{

    document.querySelectorAll(".star").forEach(star=>{

        const rect = star.getBoundingClientRect();

        const dx = rect.left - e.clientX;
        const dy = rect.top - e.clientY;

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 100){

            star.style.transform =
                `scale(2) translate(${dx/15}px, ${dy/15}px)`;

        }else{

            star.style.transform = "scale(1)";
        }
    });

});