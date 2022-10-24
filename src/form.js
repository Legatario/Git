const form = document.querySelector('form');

document.addEventListener("openModal",(e) =>{
    if(e.detail.modalName == "fake"){
        console.log('inicio')
    }
    if(e.detail.modalName == "newsletter"){
        console.log('final')
    }
});

const handleSubmit = (onSubmit, onError, self) =>{
    const nameInput = self.querySelector('input#username');
    if(nameInput.value.length < 5){
        return onError()
    }
    onSubmit()
};

const error = () =>{
    console.log('error')
};

const submit = () =>{
    console.log('submit')
}

form.addEventListener('submit', function(event){
    event.preventDefault()
    handleSubmit(submit, error, this)
});

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

const functionPromise = async (condition) =>{
            if(!condition){
                throw new Error('The condition is false');
            }
        

           return true;
};

functionPromise(true)
    .then((res) => {
        console.log(res);
    })
    .catch(() => {
        console.log('error');
    });


const numbers = [1,2,3,4,5]

const numberObject = numbers.map((currentValue, index, array)=>{
    return {number: currentValue}
})

console.log(numberObject)

const numberWithout1 = numbers.filter((current)=>{
    return current !== 1
});

console.log(numberWithout1)