const btnEl=document.querySelector(".watch-trailer");
const closeIconEl=document.querySelector(".exit");
const trailerContainerEl=document.querySelector(".trailer");
const videoEl=document.querySelector("video");

btnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active");
})



closeIconEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
})




