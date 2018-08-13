ChangeImages = () => {
  const __VoVEEteAviso__ = 'https://imgur.com/8jrEfw5.png'
  var object = document.getElementsByTagName("img");
  setInterval(()=> {
    for (var x = 0; x < object.length;x++){
      if(object[x].getAttribute('src') != __VoVEEteAviso__){
        object[x].setAttribute('src',__VoVEEteAviso__);
      }
    }
  },1500); //1.5s
}


ChangeImages();
