$(function() {
  var tribStory = [
    [
      "Terry Fox - an activist in cancer research, ",
      "a hero to people worldwide.",
      "",
      "An athlete, ",
      "a humanitarian.",
      "",
      "his legacy lives on today",
      "Terry Fox - Canada's Marathon Man",
      ""
    ],
    [
      "Terry was a track and field champion in high school",
      "he played first-string Varsity basketball",
      "he was a captain to his school's soccer team.",
      "In his senior year, it was discovered",
      "Terry had a very dangerous form of cancer",
      "",
      "To keep the cancer from spreading, ",
      "his entire right leg would have to be amputated",
      ""
    ],
    [    
      "The night before his surgery, ",
      "Terry read an article about Dick Traum, a NY runner",
      "Dick was the first amputee to complete the NY marathon",
      "Terry never forgot the article",
      "He dreamed of running across Canada",
      "",
      "After the surgery, there was 16 months of follow-up treatment",
      "At the cancer clinic, he saw other cancer patients",
      "He saw their suffering and heard their cries"
    ],
    [
      "Terry could not forget what he had seen at the clinic",
      "He felt he was one of the lucky patients who survived",
      "",
      "He felt he had a responsibility... he wanted the hurting to stop.",
      "and he was determined to take action and make it happen.",
      "Terry wanted to raise money for Cancer Research",
      "He had a special prosthetic made so he could run",    
      "He trained every day for 15 months",
      "His mom forced him to take 1 day off for Christmas."
    ],
    [
      "On April 12, 1980, the Marathon of Hope began",
      "Terry dipped his right leg into the Atlantic Ocean",
      "He would run, a marathon a day, everyday.",
      "His goal - to receive a $1 donation from every Canadian",
      "A testament to his will. Terry endured it all.",
      "Bad weather, mental solitude, physical pain.",
      "Terry ran 143 days, 3339 miles before he was forced to end his run",
      "At a tearful press conference, Terry sobbed the cancer has spread to his lungs",
      "He needed treatment, but if he could come back and finish, he would."
    ],
    [
      "Terry had raised $2 million dollars before he had to stop his marathon",
      "Just days later, an impromptu telethon was organized in Terry Fox's name",
      "From his hospital bed, he watched the broadcast televised across Canada",
      "The Telethon for Terry Fox, raised $10 million dollars,",
      "and more importantly, the fund soon reached $24 million dollars,",
      "and realizing Terry's goal of getting $1 dollar from every Canadian",
      "Terry had single-handedly doubled the annual cancer research budget",
      "He became the youngest ever recipient of the Order of Canada",
      "Terry succumbed to his cancer, dieing at age 22."
    ],
    [
      "As a Canadian, living at that time, we were all deeply affected by his death.",
      "However, Terry left more his country Terry than he could possibly realize.",
      "",
      "He left behind his spirit and his inspiration,",
      "and a dream, which became his legacy,",
      "",
      "Thank you",
      "for watching",
      ""
    ]
  ]; // end array
  
  var tl = new TimelineLite();
  var $line1 = $(".tribute-line1");
  var $line2 = $(".tribute-line2");
  var $line3 = $(".tribute-line3");
  var $currFade;
  var delay = 1000;
  var i = 0;    
  var storyLen = tribStory.length;
  
  function displayTribute( tribute, j ) { 
    console.log( tribute[j], tribute[j+1], tribute[j+2]);
    $line1.text( tribute[j] );
    $line2.text( tribute[j+1] );
    $line3.text( tribute[j+2] );
    tl.staggerTo( [$line1, $line2, $line3], 4, { opacity: 1 }, 1.0 )
      .delay(4).to( [$line1, $line2, $line3], 1, { opacity: 0 } );
  }
  
  var tribAnim = function() {

    if ( i < storyLen ) {
      
      var tribArray = tribStory[i]; 
      var tribArrLen = tribArray.length;
      
      for ( j = 0; j < tribArrLen; j+=3 ) {
        (function( tribArray, j){
          displayTribute( tribArray, j );
        }(tribArray,j));
      }
      i++;
    } 
    if ( i < storyLen ) tribAnim();
 
  };
  tribAnim();

  
}); // end IIFE


        

