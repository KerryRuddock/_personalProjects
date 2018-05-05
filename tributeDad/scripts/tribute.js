$(window).on( 'load', function() {
    
  // caches images, avoiding white flash between background replacements     
  var base ="images/";
  var bgImageArray = [];
  
  // Images are loaded into array by Chapter, by slide.
  for ( var i = 0; i < 2; i++ ) {
    bgImageArray.push([]);
    
    // Chapter 1
    if ( i === 0 ) {
      for ( var j = 0; j < 20; j++ ) {
        var img = "01-earlydays/trib-" + padzero(j+1,3) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 2
    else if ( i === 1 ) {
      for ( var j = 0; j < 13; j++ ) {
        var img = "02-vancouver/trib-1" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } 
  }
  
  // 3 dimensional [chapter][slide][lines]
  var tribStory = [
    [ // Chapter 1
      [ "", "The Early Years", "" ],
      [ "Jerry", "grew up in ", "Bowsman, MB" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ],  [ "", "", "" ],
      [ "", "April 1955", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ], 
      [ "Jerry's letter to Mom, Day, & Family", "while he is away training to be a pilot.",  "" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ]
    ],
    [ // Chapter 2
      [ "Vancouver", "Jerry and Trudy", "Just Married" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "End of Slides", "" ]
    ]
    
  ]; // end array
  
  var $line1 = $(".tribute-line1");
  var $line2 = $(".tribute-line2");
  var $line3 = $(".tribute-line3");

  var maxChapters = tribStory.length-1;
  var chapter = 0;
  var maxSlides = tribStory[chapter].length -1;
  var slide = 0;

  var maxLines = tribStory[chapter][slide].length; // currently 3 lines per slide/Image
  var line = 0;
  
  var paused = false;
  var tribEnd = false; // true at END of tribute slideshow.
  var tl = new TimelineMax({ onComplete: animateStory });
  
  /*
  ** Slides
  */
  var bgImg = {
    
    bwd: function() {
      slide--;
      if ( slide < 0 ) {
        if ( chapter > 0 ){
          chapter--;
          slide = tribStory[chapter].length -1;
          maxSlides = slide;
        } else {
          slide = 0;
        }
      }
      this.setBGImage();
    },
    
    fbwd: function () {
      chapter--;
      if ( chapter < 0 ) chapter = 0;
      slide = 0;
      maxSlides = tribStory[chapter].length -1;
      this.setBGImage();
    },
    
    fwd: function () {
      slide++;
      if ( slide > maxSlides ) {
        chapter++;
        
        if ( chapter > maxChapters ) {
          chapter--; // don't go past END of SLIDES
          slide--;
        } else {
          slide = 0;
        }
      }
      maxSlides = tribStory[chapter].length -1;
      this.setBGImage();
    },
    
    ffwd: function () {
      slide = 0;
      chapter++;
      
      if ( chapter > maxChapters ) {
        chapter--; 
        maxSlides = tribStory[chapter].length -1;
        slide = maxSlides;  // LAST SLIDE -- END
      } else {
        maxSlides = tribStory[chapter].length -1;
      }
 
      this.setBGImage();
    },
    
    setBGImage: function () {
      $('.hero picture').css( 'background-image', "url(" + base + bgImageArray[chapter][slide] + ")" );
      $('.tribute-overlay-chapter').text("Chapter:" + (chapter+1) + "/" + (maxChapters+1) );
      $('.tribute-overlay-slide').text("Slide:" + (slide+1) + "/" + (maxSlides+1) );
    }
  };
  
  /*
  ** EVENTS
  */
  $('.tribute-overlay').on( "mouseenter", function() {
    controls.togglePlay();
  });
  
  $('.tribute-overlay').on( "mouseleave", function() {
    controls.togglePlay();
  });
  
  // pause/play toggle btn
  $('.tribute-control-btn--toggle-play').on( "click", function() {
    controls.togglePlay();
  });
 
  // fast backward btn
  $('.tribute-control-btn--fbwd').on( "click", function() {
    tribEnd = false;
    line = 0; 
    bgImg.fbwd();
    controls.play();
    
    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });
    animateStory();
  });  
  
  // backward btn
  $('.tribute-control-btn--bwd').on( "click", function() {
    tribEnd = false;
    line = 0; 
    bgImg.bwd();
    controls.play();

    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });
    animateStory();
  });  

  // forward btn
  $('.tribute-control-btn--fwd').on( "click", function() {
    line = 0;
    bgImg.fwd();
    controls.play();
    
    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });
    animateStory();
  });  
  
  // fast forward btn
  $('.tribute-control-btn--ffwd').on( "click", function() {
    line = 0;
    bgImg.ffwd();
    controls.play();
      
    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });  
    animateStory();
  });  
  

  function animateStory() {
   
    if ( ! paused ) {
      if ( line < maxLines ) {

        var totalLetters = 0, mSecs=0.5;

        totalLetters += tribStory[chapter][slide][line].length;
        totalLetters += tribStory[chapter][slide][line +1].length;
        totalLetters += tribStory[chapter][slide][line +2].length;
        mSecs += ( totalLetters / 5 * 0.1 + 0.5 ); 
        
        $line1.text( tribStory[chapter][slide][line] );
        $line2.text( tribStory[chapter][slide][line + 1] );
        $line3.text( tribStory[chapter][slide][line + 2] );
        
        // Note: Timeline invokes animateStory() after completing call to tl.to()
        tl.staggerTo([$line1, $line2, $line3], mSecs, { opacity: 1 }, 0.5);
        if ( tribEnd === true || slide === maxSlides && chapter == maxChapters ) {
          controls.end();
        } 
        tl.to([$line1, $line2, $line3], mSecs * 0.7, { opacity: 0 }, "+=2.0");
        line += 3;
        
      } else {
        
        line = 0;
        
        if ( tribEnd === true || slide === maxSlides && chapter == maxChapters ) {
          controls.end();
        } else {
          bgImg.fwd();
          animateStory();
        }
      } 
      
    } else {
      
      setTimeout ( function () {
        animateStory();
      }, 100 );
    }
  }
  animateStory();

/*
** Playback controls
*/  
  var controls = {
  
    end: function () {
        if ( $('.tribute-control-btn--toggle-play').find('.fa-pause').length !== 0 ) {
          $('.fa-pause').removeClass("fa-pause").addClass("fa-play");
          $('.hero--end').css('display', "block");
          tl.pause();
          paused = true;
          tribEnd = true;
        }     
    },   
    
    pause: function() {    
        $('.fa-pause').removeClass("fa-pause").addClass("fa-play");
        $('.hero--paused').css('display', "block");
        tl.pause();
        paused = true;
    },
    
    play: function() {
        $('.fa-play').removeClass("fa-play").addClass("fa-pause");
        $('.hero--paused').css('display', "none");
        
        if ( $('.hero--end').css('display') === 'block' ) {
          $('.hero--end').css('display', "none");
            line = 0; 
        }
        tl.play();
        paused = false;
    },
    
    togglePlay: function() {
      
        // btn showing PAUSE indicates tribute currently playing 
        if ( $('.tribute-control-btn--toggle-play').find('.fa-pause').length !== 0 ) {
          this.pause();

        } // btn showing PLAY indicates tribute currently paused
        else if ( $('.tribute-control-btn--toggle-play').find('.fa-play').length !== 0 ) {
          this.play();
        }
      
    }
    
  }; // end obj controls 
  
  // helper functions
  function clearTimeLine() {
    tl.clear();    
    tl.eventCallback("onComplete", null);
  }
  
  function padzero( num, width ){
    var n_ = Math.abs(num);
    var zeros = Math.max(0, width - Math.floor(n_).toString().length );
    var zeroString = Math.pow(10,zeros).toString().substr(1);
    if( num < 0 ) {
      zeroString = '-' + zeroString;
    }
    return zeroString + num;
  }
 
}); // end IIFE