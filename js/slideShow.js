const slides = document.querySelectorAll('.slides-img');
let indexImg = 0;
slides[0].classList.toggle('aktif');
let buttons = document.querySelector('.button').querySelectorAll('button').forEach((button,indexB)=>{
    if(button.classList.contains('button-left')){
        button.addEventListener('click',()=>{
            nextImage(-1,'prev');
        });
    }else if(button.classList.contains('button-right')){
        button.addEventListener('click',()=>{
            nextImage(1,'next');
        });
    }
    const nextImage = (value, direction) =>{
        if(direction=='next'){
            indexImg += value;
            if(indexImg==slides.length){
                indexImg = 0;
            }
        } else {
            if(indexImg == 0){
                indexImg = slides.length - 1;
            } else if(indexImg > 1 || indexImg == 1){
                indexImg += value;
            }
        }   
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove('aktif');
        }
        slides[indexImg].classList.add('aktif');
    };
})