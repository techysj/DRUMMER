window.addEventListener('keydown',playNow);
function playNow(e){
    // console.log(e.key);
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; //to disable other key events
    audio.play();
    audio.currentTime=0;// to reset the audio every time evvent occurs

    //adding animations to the buttons
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing')
    }, 70);
}

// reseting the animatons
// function removeAnimation(e) {
//     if(e.propertyName!='transform') return;
//     this.classList.remove('playing')
// }
//  const keys= document.querySelectorAll('.key');
// //  console.log(keys);
// keys.forEach(key=> key.addEventListener('transitionend',removeAnimation));




// the animations reset using the removeAnimation function is having bug 
// and tend to hold the playing class even upon releasing it.