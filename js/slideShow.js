let buttons = document.querySelector('.button').querySelectorAll('button').forEach((button,indexB)=>{
    let indexImg = 1;
    const slides = document.querySelectorAll('.slides-img');
    if(indexImg > slides.length) {indexImg=1}
    if(indexImg < 1) {indexImg=slides.length}
    if(button.classList.contains('button-left')){
    

        slides.forEach((img)=>{
            button.addEventListener('click',()=>{
                indexImg -= 1;
                img.getAttribute('data-img') == indexImg ? img.classList.toggle('aktif') : img.classList.toggle('aktif');
            });
        });
        
    }else if(button.classList.contains('button-right')){
        
        button.addEventListener('click',()=>{
            indexImg += 1;
                slides.forEach((img,index)=>{
                    if($(img).data('img') == indexImg){
                        
                    }
                // console.log(img);
            });
            if(indexImg >= slides.length){indexImg=1}
            console.log(img);
            
        });
    }
    
})