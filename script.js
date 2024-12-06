let vid = document.getElementById("videoPlay1");
let vid2 = document.getElementById("videoPlay2");
const mGlass = document.querySelector(".mGlass");
const sbar = document.querySelector(".search-bar");
const img1 = document.querySelector(".imgBox3");
const img2 = document.querySelector(".imgBox5");
const img3 = document.querySelector(".imgBox7");
const img4 = document.querySelector(".imgBox9");
const img5 = document.querySelector(".imgBox11");
const img6 = document.querySelector(".imgBox13");
const img7 = document.querySelector(".imgBox15");
const disappText = document.querySelector(".disappText");
const disappComments = document.querySelectorAll(".disappCom");
const antMan = document.getElementById("antManVideo");
const antManTxt = document.querySelector(".ironmanTxt");
const letterIcon = document.querySelector(".letterIcon");
var audio = new Audio('sound/livechat.mp3');



  vid.addEventListener('ended', function() {

    setTimeout(function(){
        letterIcon.style.display = 'block';
        audio.play();
        letterIcon.addEventListener('click', function(){
            letterIcon.style.display = 'none';
            setTimeout(function(){
                antMan.style.display = 'block';
                }, 1000);
        
                setTimeout(function(){
                    antManTxt.style.display = 'block';
                    }, 11000);
            
        })
        }, 15000);

  


    setTimeout(function(){
    mGlass.classList.add('hidden');
    }, 4500);

    setTimeout(function(){
    sbar.classList.add('sbarAnimation');
    }, 6200);
     
    setTimeout(function(){
        img1.classList.add('hidden');   
    }, 4000);

    setTimeout(function(){
        img2.classList.add('hidden');   
    }, 3000);

    setTimeout(function(){
        img3.classList.add('hidden');   
    }, 4000);

    setTimeout(function(){
        img4.classList.add('hidden');   
    }, 5000);

    setTimeout(function(){
        img5.classList.add('hidden');   
    }, 7000);

    setTimeout(function(){
        img6.classList.add('hidden');   
    }, 7600);

    setTimeout(function(){
        img7.classList.add('hidden');   
    }, 8000);

    setTimeout(function(){
        disappText.classList.add('hidden');   
    }, 2000);

    setTimeout(function(){
        window.scrollTo({
           top: document.body.scrollHeight,
           behavior: 'smooth'
      });
    }, 6300);

    setTimeout(function(){
        disappComments.forEach(function(disappCom) {
            disappCom.style.color = 'white';
        });
    }, 9000);
            
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar');
    const ironmanVideo = document.querySelector('.ironmanVideo');
    const videoContainer = document.querySelector('.videoPlayer2');
    const videoContainer1 = document.querySelector('.videoPlayer');
    const videotitle1 = document.querySelector('.videoDesc');
    const videotitle2 = document.querySelector('.videosecDesc');

    searchInput.addEventListener('input', () => {
        if (searchInput.value.toLowerCase() === 'im ironman') {
            videoContainer.style.display = 'block';
            videoContainer1.style.display = 'none';
            videotitle1.style.display = 'none';
            videotitle2.style.display = 'block';

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
           });

            ironmanVideo.play();
        } else {
            ironmanVideo.pause();
            ironmanVideo.currentTime = 0;
            videoContainer.style.display = 'none';
        }
    });
});

vid2.addEventListener('ended', function() {


    setTimeout(function(){
    mGlass.classList.remove('hidden');
    }, 4500);

    setTimeout(function(){
    sbar.classList.remove('sbarAnimation');
    }, 6200);
     
    setTimeout(function(){
        img1.classList.remove('hidden');   
    }, 2000);

    setTimeout(function(){
        img2.classList.remove('hidden');   
    }, 3000);

    setTimeout(function(){
        img3.classList.remove('hidden');   
    }, 4000);

    setTimeout(function(){
        img4.classList.remove('hidden');   
    }, 5000);

    setTimeout(function(){
        img5.classList.remove('hidden');   
    }, 7000);

    setTimeout(function(){
        img6.classList.remove('hidden');   
    }, 7600);

    setTimeout(function(){
        img7.classList.remove('hidden');   
    }, 8000);

    setTimeout(function(){
        disappText.classList.remove('hidden');   
    }, 5500);

    setTimeout(function(){
        window.scrollTo({
           top: document.body.scrollHeight,
           behavior: 'smooth'
      });
    }, 6300);


    setTimeout(function(){
        disappComments.forEach(function(disappCom) {
            disappCom.style.color = 'black';
        });
    }, 9000);

    antMan.style.display = 'none';
    antManTxt.style.display = 'none';
            
});
