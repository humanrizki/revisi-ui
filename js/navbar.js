const ulNav = document.querySelector('.ul-nav');
const button = document.querySelector('.navigate > span i');
function resizeToSmall(){
    button.addEventListener('click',function(){
        ulNav.style.transition = '.5s';
        ulNav.parentElement.classList.toggle('tinggi');
        ulNav.classList.toggle('turun');
        ulNav.querySelectorAll('.li-nav').forEach((liN)=>{
            if(!liN.classList.contains('li-flex')){
                liN.querySelector('a').addEventListener('mouseover',(a)=>{
                    a.target.style.textDecoration = 'underline';
                    console.log(liN);
                });
                liN.querySelector('a').addEventListener('mouseout',(a)=>{
                    a.target.style.textDecoration = 'none';
                });
            }
        });
        ulNav.querySelectorAll('.li-flex').forEach((li)=>{
            li.querySelector('a').setAttribute('href','javascript: void(0)');
            li.addEventListener('click',()=>{
                li.style.display = 'none';
                ulNav.querySelectorAll('.li-drop').forEach((liD)=>{
                    if(li.getAttribute('data-drop') == 
                        liD.getAttribute('data-for-drop')){
                        liD.style.display = 'inline-flex';
                        liD.querySelector('.close a')
                        .setAttribute('href','javascript: void(0)');
                        liD.style.transition = '.5s';
                    }
                })
            });
        });
        ulNav.querySelectorAll('.li-drop').forEach((liDrop)=>{
            liDrop.querySelector('.close').addEventListener('click',()=>{
                if(liDrop.getAttribute('data-for-drop') == 
                    liDrop.previousElementSibling.getAttribute('data-drop')){
                    liDrop.style.display = 'none';
                    liDrop.previousElementSibling.style.display = 'inherit';
                }
            });
        });
    });
}
function checkWidth(){
    return ($(window).width() >= 757);
}
function merubahIsi(){
    if(checkWidth()){
        ulNav.querySelectorAll('.li-nav').forEach((liN)=>{
            if(!liN.classList.contains('li-flex')){
                liN.querySelector('a').addEventListener('mouseover',(a)=>{
                    a.target.style.textDecoration = 'underline';
                    console.log(liN);
                });
                liN.querySelector('a').addEventListener('mouseout',(a)=>{
                    a.target.style.textDecoration = 'none';
                });
            }
        });
        
        ulNav.querySelectorAll('.li-flex').forEach((liF)=>{
            liF.querySelector('span i')
            .setAttribute('class','bi bi-arrow-down-square-fill');
            const next = liF.querySelector('.ul-nav-none');
            liF.addEventListener('mouseover',()=>{
                
                next.querySelectorAll('.li-nav-none')
                .forEach((list)=>{
                    list.style.listStyleType = 'none';
                });
                liF.querySelector('span i').setAttribute('class','bi bi-arrow-up-square-fill');
            });
            liF.addEventListener('mouseout',()=>{
                next.querySelectorAll('.li-nav-none')
                    .forEach((list)=>{
                    list.style.listStyleType = 'none';
                });
                liF.querySelector('span i').setAttribute('class','bi bi-arrow-down-square-fill');
            });
            
        });
    } else {
        ulNav.querySelectorAll('.li-flex').forEach((liF)=>{
            let next = liF.nextElementSibling;
            liF.querySelector('span i').setAttribute('class','bi bi-arrow-right-square-fill');
        });
        resizeToSmall();
    }
}
$(document).ready(()=>{
    merubahIsi();
    $(window).resize(()=>{
        merubahIsi();
    });
});
