const form = document.querySelector('form');

document.addEventListener("openModal",(e) =>{
    if(e.detail.modalName == "fake"){
        console.log('inicio')
    }
    if(e.detail.modalName == "newsletter"){
        console.log('final')
    }
});

function onSubmit(event){
    event.preventDefault()
    console.log('sim')
}

form.addEventListener('submit', onSubmit);

window.addEventListener("scroll", (e)=>{
    if(window.scrollY === 0){
        console.log(window.scrollY)
        const openModalEvent = new CustomEvent("openModal", {detail: {modalName: 'fake'}});
        document.dispatchEvent(openModalEvent);
    }
    if(
        window.scrollY == 
        document.documentElement.scrollHeight - 
            document.documentElement.clientHeight
        ){
        console.log(window.scrollY)
        const openModalEvent = new CustomEvent("openModal", {detail: {modalName: 'newsletter'}});
        document.dispatchEvent(openModalEvent);
    }
    
})