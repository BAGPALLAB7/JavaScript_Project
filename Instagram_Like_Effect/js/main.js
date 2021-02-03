const image = document.querySelector('.image');
const smallLike = document.getElementById('small-like-heart');
const likeHeart = document.querySelector('.like-heart');
liked=false;
red=false;
animLike=false;

const blinkHeart= (e) => {
    const heart = document.createElement('i');
    heart.classList.add('like');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    likeHeart.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },800);
    if (red){
        if (animLike){
            smallLike.classList.remove('like3');
            smallLike.classList.add('like2');
            animLike=false;
        }
        else{
            smallLike.classList.remove('like2');
            smallLike.classList.add('like3');
            animLike=true;
        }
    }
    else{
        red=true;
        smallLike.classList.replace('far', 'fas');
        smallLike.classList.add('like2');
    }
    
    

}

image.addEventListener('dblclick', (e) => {
    blinkHeart(e);
});

smallLike.addEventListener('click', () => {
    if (!red){
        red=true;
        smallLike.classList.replace('far', 'fas');
        smallLike.classList.add('like2');
    }
    else{
        red=false;
        smallLike.classList.replace('fas', 'far');
        smallLike.classList.remove('like2');
        smallLike.classList.remove('like3');
        
    }

})