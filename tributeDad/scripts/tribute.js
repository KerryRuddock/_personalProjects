$(window).on( 'load', function() {
    
  // caches images, avoiding white flash between background replacements     
  var base ="images/";
  var bgImageArray = [];
  
  // Images are loaded into array by Chapter, by slide.
  for ( var i = 0; i < 8; i++ ) {
    bgImageArray.push([]);
    
    // Chapter 1
    if ( i === 0 ) {
      for ( var j = 0; j < 15; j++ ) {
        var img = "01-earlydays/trib-" + padzero(j+1,3) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 2
    else if ( i === 1 ) {
      for ( var j = 0; j < 11; j++ ) {
        var img = "02-flyboys/trib-1" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 3
    else if ( i === 2 ) {
      for ( var j = 0; j < 8; j++ ) {
        var img = "03-thatgirl/trib-2" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 4
    else if ( i === 3 ) {
      for ( var j = 0; j < 13; j++ ) {
        var img = "04-vancouver/trib-3" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 5
    else if ( i === 4 ) {
      for ( var j = 0; j < 18; j++ ) {
        var img = "05-langley/trib-4" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 6
    else if ( i === 5 ) {
      for ( var j = 0; j < 39; j++ ) {
        var img = "06-clover/trib-5" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 7
    else if ( i === 6 ) {
      for ( var j = 0; j < 15; j++ ) {
        var img = "07-murray/trib-6" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    } // Chapter 8
    else if ( i === 7 ) {
      for ( var j = 0; j < 3; j++ ) {
        var img = "08-finale/trib-7" + padzero(j+1,2) + ".jpg"
        bgImageArray[i].push( img );
        new Image().src = base + img; 
      }
    }        
  }
  
  // 3 dimensional [chapter][slide][lines]
  var tribStory = [
    [ // Chapter 1 Earlydays
      [ "", "The Early Years", "" ], [ "Jerry", "grew up in ", "Bowsman, Manitoba" ],
      [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ],  [ "", "", "" ], [ "", "April 1955", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ], [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ]
    ],
    [ // Chapter 2 Flyboys
      [ "", "Flyboys", "" ],  [ "", "", "" ],[ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "", "", "" ], [ "", "", "" ],  [ "", "", "" ],  [ "", "", "" ],
      [ "Jerry's letter to Mom, Dad, & Family", "he is away training",  "in the Royal Canadian Air Force" ],
      [ "", "", "" ]
    ],    
    [ // Chapter 3 That Girl
      [ "Not sure, but this might ", "have been taken", "when Jerry's back was broken" ],
      [ "Jerry recovered", "walked again", "and met That Girl." ], [ "", "", "" ], 
      [ "Trudy met Jerry", "at his Dad's", "Pharmacy in Winnipeg" ], 
      [ "She modeled a little", "from time", "to time." ],
      [ "", "", "" ], [ "", "", "" ],  [ "Found this", "on its own.", "Love it." ]
    ],
    [ // Chapter 4 Vancouver
      [ "Vancouver", "Jerry and Trudy", "Just Married" ], [ "", "", "" ],
      [ "Jerry, Trudy, Kris, Dale.", "lived 1 block away", "E. 21st Nootka & E. 21st Renfrew" ],
      [ "", "", "" ],  [ "Allyson born Mar 9, 1968", "17 months old", "" ],
      [ "Allyson & Kerry", "", "" ],  [ "Tom Baxter on right", "a good friend in late 60s", "moved to Australia" ],  [ "", "", "" ],  [ "Jerry on his B.S.A", "", "Allyson & Uncle Jay" ], 
      [ "Jerry & John Preston", "Bridesmaid & Best Man", "at Jerry and Trudy's wedding."],
      [ "", "", "" ],  [ "boating", "fishing", "Bonnie looks great." ], [ "", "", "" ]
    ],
    [ // Chapter 5 Langley
      [ "Living in Langley", "kids getting bigger", "" ], [ "Jerry, cat, Allyson", "relaxing.", "" ],
      [ "Jerry's friend ", "Harold Taylor", "charted boats at Bayshore Inn, Vancouver" ],
      [ "", "", "" ], [ "", "", "" ], [ "", "", "" ],  [ "", "", "" ], [ "", "", "" ],
      [ "", "", "" ], [ "", "", "" ], [ "Rhonda (left)", "Dad helped her get her 1st job", "working at Preston Chev Olds" ], 
      [ "", "", "" ], [ "", "", "" ], [ "Jerry's younger brother", "Carey", "" ],[ "", "", "" ], [ "", "", "" ],
      [ "Winner, winner", "Chicken dinner", "" ], [ "At Trudy's bowling banquet", "", "Its ok to laugh at this one... I did." ]
    ],
    [ // Chapter 6 Clover
      [ "Living in Cloverdale", "an occasional visit", "to Birch Bay, WA" ], 
      [ "In 1986,", "his daughter graduated grade 12", "his son graduated a 2 year college program" ],
      [ "Expo came to Vancouver", "and Jerry's original idea", "EXPO 86 license plate" ],
      [ "an idea that was fully supported", "", "" ], [ "", "", "" ],
      [ "These next slides", "are of friends", "and family" ],
      [ "If I may", "I'll say a poem", "as you watch the years go by" ],
      [ "", "...", "" ], [ "", "Friends and family", "" ], // 9
      [ "love you no matter", "what you do.", "" ], [ "", "Friends and family", "" ], 
      [ "Always help", "each other through", "" ],[ "", "Having wonderful people", "" ], 
      [ "", "to help you along,", "" ], [ "They encourage", "and inspire you", "" ],
      [ "", "to stay strong.", "" ], [ "", "...", "" ], //17
      [ "", "Friends and Family", "" ], [ "are the trees", "of strength,", "" ],
      [ "When you need", "their help", "" ], [ "they'll go", "to any length.", "" ], 
      [ "", "They never judge you", "" ],[ "just give you", "lots of love,", "" ], 
      [ "", "What wonderful blessings", "" ],[ "they are from", "God above.", "" ], //25    
      [ "", "Friends and family", "" ], [ "", "keep in touch,", "" ], 
      [ "", "You can lean on them,", "" ], [ "", "they'll be your crutch", "" ],
      [ "", "They email or call", "" ],[ "", "day by day", "" ], 
      [ "", "and for each other", "" ],  [ "", "they always pray.", "" ], 
      [ "", "(by James Greene)", "" ], [ "", "", "" ], // 35
      [ "", "", "" ],[ "", "", "" ], [ "", "", "" ]
    ],
    [ // Chapter 7 Murrayville
      [ "Trudy passed in June 30, 1999", "Jerry moved to Murrayville shortly after", "" ],
      [ "Family and friends", "from all over", "dropped in to say hello", "" ],[ "", "", "" ], [ "", "", "" ],
      [ "sometimes coming by", "just to listen in on a good story", "" ], [ "", "", "" ],
      [ "Jerry was a great storyteller", "every detail remembered", "you couldn't help but listen" ],
      [ "He would recall stories from his RCAF days", "coke bottle machines that held beer", "" ],
      [ "or how he pitched in AAA baseball", "Jerry loved the game and coached", "boys and girls teams over the years."], //9
      [ "He loved to travel with Trudy", "always adding a charm to her bracelet", "of places they went to" ],
      [ "He once had a 57 Chevy Belair", "but not even a single photo", "to show he had once owned one" ], 
      [ "", "many stories", "" ],[ "", "many friends", "" ], [ "", "many memories", "" ], [ "", "not the end", "" ] 
    ],
    [ // Chapter 8 Finale
      [ "", "We will meet again", "" ],
      [ "", "over the horizon.", "" ], 
      [ "", "'Jerry'", "" ]
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
        //if ( tribEnd === true || slide === maxSlides && chapter == maxChapters ) {
        //  controls.end();
        //} 
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