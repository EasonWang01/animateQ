 require("!style!css!./animate.min.css");

/*
Q.click('#aa','bounce',true)

before you assign another animation to the same id or class 
make sure to call stop function before it.

Q.stop('#aa','bounce')


*/


window.Q =  animateQ  = function(){
  return new animateQ.fn.init()
 }



animateQ.fn = animateQ.prototype = {


  init: function(){

  },

  store:{
    
  },

  getStore:(function(){

    return document.getElementsByClassName("animated");
  })(),


  click: function(selector,animate,infinite){

  window.onload = function() {
    if(animateQ.fn.store.hasOwnProperty(selector)!==true){
  
    var _select = document.querySelectorAll(selector)
    for(i=0;i<_select.length;i++){
      _select[i].addEventListener('click',function(){
        if(infinite===true){

            if(this.classList.contains('animated')===true){
              delete animateQ.fn.store[selector]; 
               this.classList.remove("animated");
             this.classList.remove("infinite");
             this.classList.remove(animate);
             return
            }else{

              this.classList.add("animated");
              this.classList.add("infinite");
              this.classList.add(animate);

            } 


        }else{    

          this.classList.add("animated");
          this.classList.add(animate);  

          setTimeout(function(){
            this.classList.remove("animated");
            this.classList.remove(animate); 
            delete animateQ.fn.store[selector]; 
          }.bind(this),2000)

        }

          animateQ.fn.store[selector]= {
            type: animate,
            infinite:infinite,
          }; 
        

      })
    } 
    }else{
      throw new Error('animate has been called!')
    }
  }
  },

  hover: function(selector,animate){


  window.onload = function() {
    var _select = document.querySelectorAll(selector)


    for(i=0;i<_select.length;i++){
      _select[i].addEventListener('mouseover',function(){

            animateQ.fn.store[selector]= {
            type: animate,
            }; 
              

          this.classList.add("animated");
          this.classList.add("infinite");
          this.classList.add(animate);
      })
      _select[i].addEventListener('mouseout',function(){
          this.classList.remove("animated");
          this.classList.remove("infinite");
          this.classList.remove(animate);
          delete animateQ.fn.store[selector]; 
      })


    } 
    }

  },

  load:function(selector,animate,infinite){


  window.onload = function() {
    var _select = document.querySelectorAll(selector)
    var __=[]
    var infinite = infinite || false ;


      if(animateQ.fn.store.hasOwnProperty(selector)!==true){
            animateQ.fn.store[selector]= {
                type: animate,
                infinite:infinite,
              }; 
            



    for(i=0;i<_select.length;i++){
        
          _select[i].classList.add("animated");
          if(infinite===true){
          _select[i].classList.add("infinite");
          }
          _select[i].classList.add(animate);
          __.push(_select[i]);
  

      
    } 
      if(infinite!==true){
          setTimeout(function(){
          delete animateQ.fn.store[selector]; 
            __.forEach(function(e){
              e.classList.remove("animated");
              e.classList.remove("infinite");         
                e.classList.remove(animate);
            })            
          },2000)
      }   
    }else{
      throw new Error('animate has been called!')
    } 
  }
  },
  stop:function(selector,animate){

  window.onload = function() {
    var _select = document.querySelectorAll(selector)
    var __=[]
    for(i=0;i<_select.length;i++){
      _select[i].classList.remove("animated");
      _select[i].classList.remove("infinite");
      _select[i].classList.remove(animate);

             elClone = _select[i].cloneNode(true);
             _select[i].parentNode.replaceChild(elClone,_select[i]);

      delete animateQ.fn.store[selector];
    } 
  }
  },
  keydown: function(selector,animate,infinite,keycode){

    if(animateQ.fn.store.hasOwnProperty(selector)!==true){   
      if(typeof infinite == 'number'){
        var keycode = infinite; 
        var infinite = false;
      }
      window.addEventListener('keydown',function(e){
        if(e.keyCode==keycode){
          if(this.store.hasOwnProperty(selector)!==true){
            this.store[selector]= {
                type: animate,
                infinite:infinite,
                keycode:keycode
              }; 
            }else if(this.store.hasOwnProperty(selector)==true){
              var _select = document.querySelectorAll(selector)
              
              for(i=0;i<_select.length;i++){
                  _select[i].classList.remove("animated");
                  _select[i].classList.remove("infinite");
                  _select[i].classList.remove(animate); 
                        delete animateQ.fn.store[selector];
                 } 
              return     
            }
          var _select = document.querySelectorAll(selector)
          for(i=0;i<_select.length;i++){
            _select[i].classList.add("animated");
            if(infinite===true){
            _select[i].classList.add("infinite");
            }
            _select[i].classList.add(animate);

            if(infinite!==true){
              setTimeout(function(){
              this.classList.remove("animated");
              this.classList.remove(animate); 
                    delete animateQ.fn.store[selector];
              }.bind(_select[i]),2000)
            }
          } 
        }
    }.bind(animateQ.fn))

    }else{
      throw new Error('animate has been called!')
    }   

  
  },



}



animateQ.fn.init.prototype = animateQ.fn;

window.Q = Q();