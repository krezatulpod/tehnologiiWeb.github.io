let phone_resolution = 576;
let tablet_resolution = 1100;
let hero_section_items = document.querySelectorAll(".hs_img");
let hero_section = document.getElementById("hero_section");
let staticBg_flag = 0;

function checkScreenWidth(){
  let topbar = document.getElementById("top-bar");

  if(window.innerWidth <= phone_resolution){
    topbar.className = "marquee";
  }else{
    topbar.className = "text-center";
  }
};

function heroSectionOnResize(){

  var images = document.getElementsByClassName('hs_img');
  var l = images.length;  

  if(window.innerWidth <= tablet_resolution){
    staticBg_flag = 1;
    for (var i = 0; i < l; i++) {
      images[0].parentNode.removeChild(images[0]);
    }

    hero_section.style.backgroundSize = "100% 60vh";
    hero_section.style.backgroundPositionY = "bottom";
    hero_section.style.backgroundImage = "url('./utile/hero_section_1.png')";
  }

  if((window.innerWidth > tablet_resolution)) {
    staticBg_flag = 0;
    hero_section.style.backgroundSize = "inherit";
    hero_section.style.backgroundImage = "url('./utile/g_6.png')";
    for(let i = 0 ;i < hero_section_items.length ; i++){
      let img = document.createElement("img");
      img.src = `${hero_section_items[i].src}`;
      img.className = `${hero_section_items[i].className}`;
      img.id = `${hero_section_items[i].id}`;
      hero_section.appendChild(img);
    }
  }

}

function parallaxEffect(){

  function getAbsPosition(element) {
    var rect = element.getBoundingClientRect();
    return {x:rect.left,y:rect.top}
 }
  
  hero_section.addEventListener('mousemove',function(e){

    var posX = e.clientX;
    var posY = e.clientY;

    for(let i = 1;i<3;i++){
        let imgWidth = document.getElementById(`g${i}`).clientWidth;
        let imgHeight = document.getElementById(`g${i}`).clientHeight;

        if(posX <= imgWidth && posY <= imgHeight){
          document.getElementById(`g${i}`).style.transform = "translate(1px,3px)";
        }
        else{
          document.getElementById(`g${i}`).style.transform = "translate(0,0)";
        }
        
      }

      for(let i = 3;i<5;i++){
        let imgHeight = document.getElementById(`g${i}`).clientHeight;
        let imgX = getAbsPosition(document.getElementById(`g${i}`)).x;

        if( posY <= imgHeight && posX >= imgX){
          document.getElementById(`g${i}`).style.transform = "translate(1px,3px)";
        }
        else{
          document.getElementById(`g${i}`).style.transform = "translate(0,0)";
        }
        
      }

  });


  }


window.onload = function(){
  parallaxEffect();
  
}






window.addEventListener('resize',function(event){
    checkScreenWidth();
    heroSectionOnResize();
    if(staticBg_flag){
      parallaxEffect();
    }
},true);
