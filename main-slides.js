const slidesElHorror=[...document.querySelectorAll(".slides-horror")];
const nextBtnElHorror=[...document.querySelectorAll('.nxt-btn-horror')];
const prevBtnElHorror=[...document.querySelectorAll('.prv-btn-horror')];


slidesElHorror.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nextBtnElHorror[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth/2;
        
    })

    prevBtnElHorror[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth/2;
    })
})






const slidesElAction=[...document.querySelectorAll(".slides-action")];
const nextBtnElAction=[...document.querySelectorAll('.nxt-btn-action')];
const prevBtnElAction=[...document.querySelectorAll('.prv-btn-action')];


slidesElAction.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nextBtnElAction[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth/2;
        
    })

    prevBtnElAction[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth/2;
    })
})




const slidesElThriller=[...document.querySelectorAll(".slides-thriller")];
const nextBtnElThriller=[...document.querySelectorAll('.nxt-btn-thriller')];
const prevBtnElThriller=[...document.querySelectorAll('.prv-btn-thriller')];


slidesElThriller.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nextBtnElThriller[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth/2;
        
    })

    prevBtnElThriller[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth/2;
    })
})