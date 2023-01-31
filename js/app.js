const menuBars = document.getElementById("menuBars");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const menuHome = document.getElementById("p__home");
const aboutMe = document.getElementById("p__aboutme");
const work = document.getElementById("p__work");
const contact = document.getElementById("p__contact");
const sections = document.querySelectorAll(".section");
const nav = document.querySelector("nav");
const navA = document.querySelectorAll("li a")
const navList = document.querySelectorAll("li")
const iHome = document.getElementById("iHome");
const iMe = document.getElementById("iMe");
const iWork = document.getElementById("iWork");
const iContact = document.getElementById("iContact");


menuBars.addEventListener("click", ()=>{
    bars.classList.toggle("active");
    header.classList.toggle("header__complete");
    main.classList.toggle("main__min");
    footer.classList.toggle("main__min");
    menuHome.classList.toggle("d-none");
    aboutMe.classList.toggle("d-none");
    work.classList.toggle("d-none");
    contact.classList.toggle("d-none");
})

iHome.addEventListener("click",()=>{
    iHome.classList.add("active")
    iMe.classList.remove("active")
    iWork.classList.remove("active")
    iContact.classList.remove("active")
})

iMe.addEventListener("click",()=>{
    iMe.classList.add("active")
    iHome.classList.remove("active")
    iWork.classList.remove("active")
    iContact.classList.remove("active")
})

iWork.addEventListener("click",()=>{
    iWork.classList.add("active")
    iHome.classList.remove("active")
    iMe.classList.remove("active")
    iContact.classList.remove("active")
})

iContact.addEventListener("click",()=>{
    iContact.classList.add("active")
    iHome.classList.remove("active")
    iWork.classList.remove("active")
    iMe.classList.remove("active")
})

// anclas y active

const checkVisibility = (entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            console.log(entry.target.id, "is intersecting")
            navList.forEach((link)=>{
                if(entry.target.id === iHome.dataset.nav){
                    iHome.classList.add("active");
                    iMe.classList.remove("active");
                    iWork.classList.remove("active");
                    iContact.classList.remove("active");
                } else if(entry.target.id === iMe.dataset.nav){
                    iMe.classList.add("active");
                    iHome.classList.remove("active");
                    iWork.classList.remove("active");
                    iContact.classList.remove("active");
                } else if(entry.target.id === iWork.dataset.nav){
                    iWork.classList.add("active");
                    iHome.classList.remove("active");
                    iMe.classList.remove("active");
                    iContact.classList.remove("active");
                } else if(entry.target.id === iContact.dataset.nav){
                    iContact.classList.add("active");
                    iHome.classList.remove("active");
                    iMe.classList.remove("active");
                    iWork.classList.remove("active");
                }
            })
        }
        return console.log("error")
    })
}

const options = {
    threshold: 0.6
}

const observer = new IntersectionObserver(checkVisibility, options);

sections.forEach(section => {
    observer.observe(section)
})

// works


//btn up