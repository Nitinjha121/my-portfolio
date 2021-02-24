const togleBtn = document.querySelector(".nav_item");
const section1 = document.getElementById("home");
const allSection = document.querySelectorAll(".section");
const activeList = document.querySelectorAll(".smooth");
const contactForm = document.querySelector(".contact-form");
const settledMessage = document.querySelector(".settled-message");
const names = document.querySelector(".contact-name");
const email = document.querySelector(".contact-email");
const message = document.querySelector(".contact-message");
const subject = document.querySelector(".contact-subject");
const projectImg =document.querySelectorAll(".project-img");
const btnClick = document.querySelector(".btn-click");
// const closest = btnClick.closest("");

// projectImg.forEach(img=>{
//     img.addEventListener("mouseover", ()=>{
//         btnClick.classList.remove("hidden");
//     })
//     img.addEventListener("mouseout",()=>{
//         btnClick.classList.add("hidden");
//     })
// })




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

const observerCall = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting){
        document.querySelector("header").style.position="fixed";
    }
    else document.querySelector("header").style.position="sticky";
    
}

const headerObserrver = new IntersectionObserver(observerCall, {root:null, threshold:0.3})

headerObserrver.observe(section1);

// observer and handlling condition/////////////////////////////////////////////////////

const observer = function(func, observer){
    
    const sectionObserver = new IntersectionObserver(sectionCall, {root:null, threshold:0.2});
    
    allSection.forEach(section=>{
        sectionObserver.observe(section);
        section.classList.add("section-hidden");
    });

    function sectionCall (entries, observe) {
        const [entry] = entries;
    
        if(!entry.isIntersecting)return

            
        if(observer){
            func( entry.target.id)
           return;
        }

        func(entry.target);
         observe.unobserve(entry.target)
    }
}

// for section visibility/////////////////////////////////////////////////////////////////////////

const visibleSection = function(para){
    para.classList.remove("section-hidden");
}

observer(visibleSection, false);


// for navbtn activity////////////////////////////////////////////////////////////////


const navBtn = function(id){
        
    activeList.forEach(active=>{
        if(id === active.href.split("#")[1]) active.classList.add("active");
        
        else active.classList.remove("active");
        
    })
}

observer(navBtn, true);


// contact-form action

contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData = {
        name: names.value,
        email: email.value,
        message: message.value,
        subject: subject.value,
    }
    console.log(formData);

    const xhr = new XMLHttpRequest();

    // xhr.open('POST',"/");
    // xhr.setRequestHeader('Content-Type', 'application/');
    // xhr.onload=function(){
    //     console.log(xhr.responseText);
    //     if(xhr.responseText="success"){
    //         settledMessage.innerHTML="Your Form Submitted Successfully";
    //         settledMessage.style.color="#13A76B";
    //     }
    //     else{
    //         alert(error)
    //     }
    // }

    // const mail = new FormData(form);

    // fetch("/send",{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: mail,
    // }).then(res=> {
    //     console.log(res);
    //     if(res.status="success"){
    //         settledMessage.innerHTML="Your Form Submitted Successfully";
    //         settledMessage.style.color="#13A76B";
    //     }
    //     else{
    //         alert(error)
    //     }
    //    return res.json()
    // } )
    

    // sendMail(mail);

})