const togleBtn = document.querySelector(".nav_item");
const section2 = document.getElementById("skills");

togleBtn.addEventListener("click", ()=>{
    togleBtn.classList.toggle("rotate");

    document.querySelector("ul").classList.toggle("short-hidden")
})

// Navbar smooth scrolling
document.querySelectorAll(".smooth").forEach(btn =>btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const id=e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
}))

const observerCall = function(entries, observer){
    const [entry] = entries;
    console.log(entry);
    // if(entry.isIntersecting){
    //     document.querySelector("header").style.position="fixed";
    // }
}

const observer = new IntersectionObserver(observerCall, {root:null, threshold:0.8})

observer.observe(section2);