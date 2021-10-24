const slides = document.querySelectorAll('.slides-img');
let indexImg = 0;
slides[0].classList.toggle('aktif');
slides.forEach((img)=>{
    if(img.classList.contains('aktif')){
        img.querySelector('img').addEventListener('mouseover',(e)=>{
            document.querySelectorAll('.buttons').forEach((btn)=>{
                btn.classList.add('minggir');
                btn.style.transition = 'all .5s ease';
            });
        });
        img.querySelector('img').addEventListener('mouseout',(e)=>{
            document.querySelectorAll('.buttons').forEach((btn)=>{
                btn.classList.remove('minggir');
                btn.style.transition = 'all .5s ease';
            });
        });
        document.querySelector('.button').addEventListener('mouseover',(button)=>{
            button.target.querySelectorAll('.buttons').forEach((buttons)=>{
                buttons.classList.add('minggir');
                buttons.addEventListener('mouseover',(btn)=>{
                    btn.target.classList.add('minggir');
                    
                });
            });
        });
        document.querySelector('.button').addEventListener('mouseout',(button)=>{
            button.target.querySelectorAll('.buttons').forEach((buttons)=>{
                buttons.classList.toggle('minggir');
                
            });
        });
            
    }
});

let buttons = document.querySelector('.button').querySelectorAll('.buttons').forEach((button,indexB)=>{
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
        // slides.forEach((img)=>{
        //     if(img.classList.contains('aktif')){
        //         img.querySelector('img').addEventListener('mouseover',(e)=>{
        //             document.querySelectorAll('.buttons').forEach((btn)=>{
        //                 btn.style.margin = "0px 20px";
        //                 btn.style.transition = 'all .5s ease';
        //             });
        //         });
        //         img.querySelector('img').addEventListener('mouseout',(e)=>{
        //             document.querySelectorAll('.buttons').forEach((btn)=>{
        //                 btn.style.margin = "0px -20px";
        //                 btn.style.transition = 'all .5s ease';
        //             });
        //         });
        //     }
        // });
        // slides.addEventListener('mouseover',()=>{
        //     document.querySelectorAll('.buttons').forEach((btn)=>{
        //         btn.style.margin = "0px 20px";
        //         btn.style.transition = 'all .5s ease';
        //     });
        // });
        // slides.addEventListener('mouseout',()=>{
        //     document.querySelectorAll('.buttons').forEach((btn)=>{
        //         btn.style.margin = "0px -20px";
        //         btn.style.transition = 'all .5s ease';
        //     });
        // });
        slides.forEach((img)=>{
            if(img.classList.contains('aktif')){
                img.querySelector('img').addEventListener('mouseover',(e)=>{
                    document.querySelectorAll('.buttons').forEach((btn)=>{
                        btn.classList.add('minggir');
                        btn.style.transition = 'all .5s ease';
                    });
                });
                img.querySelector('img').addEventListener('mouseout',(e)=>{
                    document.querySelectorAll('.buttons').forEach((btn)=>{
                        btn.classList.remove('minggir');
                        btn.style.transition = 'all .5s ease';
                    });
                });
                document.querySelector('.button').addEventListener('mouseover',(button)=>{
                    button.target.querySelectorAll('.buttons').forEach((buttons)=>{
                        buttons.classList.add('minggir');
                        buttons.addEventListener('mouseover',(btn)=>{
                            btn.target.classList.add('minggir');
                            
                        });
                    });
                });
                document.querySelector('.button').addEventListener('mouseout',(button)=>{
                    button.target.querySelectorAll('.buttons').forEach((buttons)=>{
                        buttons.classList.toggle('minggir');
                        
                    });
                });
                    
            }
        });
        
    };
    
})
