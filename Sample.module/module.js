var belchsn545_ = (function(){
  return {
    container: ".belch-sticky-notice",
    dismiss: ".dismiss",
    sessionKey: "PONBF34DJD-KLCIPEW",
    svg: "#backdropSVG",
    init: function(){
      if(this.get()){
        window.$(this.container).show();
      }
      this.timeline = new TimelineMax({paused: true});
      this.initAnimation();
      this.createListeners();
    },
    initAnimation: function(){
      this.timeline
        .to(this.svg,0,{attr:{
          d:"M 0 0 Q 0 100 0 100 Q 330 80 659 100 L 659 0 L 0 0"
        }})
        .to(this.svg,2,{attr:{
          d:"M 0 0 Q 0 100 0 100 Q 330 100 659 100 L 659 0 L 0 0"
        },ease:Elastic.easeOut.config(1.5,0.2)});
    },
    createListeners: function(){
      window.$(this.container).on('mouseleave', function(){
        this.play();
      }.bind(this));
      window.$(this.container).find(this.dismiss).on('click', function(){
        this.set("closed");
        window.$(this.container).hide();
      }.bind(this));
    },
    play: function(){
      this.timeline.restart();
    },
    set: function(val){
      sessionStorage.setItem(this.sessionKey, val);
    },
    get: function(){
      if(sessionStorage.getItem(this.sessionKey) === null || sessionStorage.getItem(this.sessionKey) == "open") {
        return true;
      }
      return false;
    }
  }
})();
$(function(){
  belchsn545_.init();
});
