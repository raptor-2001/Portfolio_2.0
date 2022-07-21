// lat: 19.849899, lng: 79.347900

// Sticky menu background
window.addEventListener('scroll', function(){

  if(window.scrollY > 150){
      document.querySelector('#navbar').style.opacity = 0.9;

  }else{
      document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling

$('#navbar a, .btn').on('click',function(event){

  if(this.hash !==''){
      event.preventDefault();

      const hash = this.hash;
      
      $('html, body').animate(
          {
              scrollTop: $(hash).offset().top
          },
          800
      );
  }

});

// Loader

const Loader = document.querySelector('.Load-container');
const overlay = document.getElementById('loading-overlay');


function init(){
  setTimeout((()=>{
    overlay.remove();
  }),100)
} 

init();