---
layout: article
title: 'Google Doodle Widget'
date: 2017-10-15
---

I have made plenty of amusing mistakes during technical interviews. For example, a quantitative trader asked how many handshakes occur among a dozen people who all shake each other's hand exactly once. I quickly responded, "twelve factorial," which was met by a friendly pause, "how long do you estimate that would take?"

The most cringeworthy interview I've had consisted of a single task: to recreate this <a href="https://www.google.com/logos/2011/worldsfair.html" target="_blank">Google Doodle effect</a>. I wasn't prepared at all, and I floundered around with a couple img tags for a full 60 minutes, utterly failing to make any sort of progress.

I promptly went to an empty classroom and set aside my homework, spending the next three hours learning a bit of Javascript to produce the desired <a href="https://github.com/trattner/scale" target="_blank">code</a> :)



<div class='widget-container' id='container'>
    <img id="little" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1528666/worldsfair-small.jpg"/>
    <img id="magnify" class='hidden' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1528666/glass.png"/>
    <div id="overlay" class='hidden' />
    </div>
  </div>


<style>
  .widget-container {
    width: 421px;
    padding-top:30px;
  }

  img {
    position: absolute;
  }

  #little {
    z-index: 1;
  }

  #magnify {
    z-index: 3;
  }

  #overlay{
    position: absolute;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1528666/worldsfair-large.jpg");
    z-index: 2;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 50%;
  }

  .hidden {
    display: none;
  }
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
  var scaling_factor = 2;

  //get properties of magnifying overlay
  $("#magnify").show();
  var mag_width = $('#magnify').width();
  var mag_height = $('#magnify').height();
  $("#magnify").hide();

  //set overlay properties
  $("#overlay").show();
  $("#overlay").css('height', mag_height-4); //quick patch for centering magnified area...couple pixels stuck out to either side of glass
  $("#overlay").css('width', mag_width-4);
  $("#overlay").hide();

  //get coordinates of rectangular area of interest
  var rect = document.getElementById("little").getBoundingClientRect();
  var left_lim = rect.left;
  var right_lim = rect.right;
  var lower_lim = rect.top;
  var upper_lim = rect.bottom;
  function outside(x,y) {
    return ( x<left_lim || x>right_lim || y<lower_lim || y>upper_lim );
  }

  //main function tracking mouse movement
  $( document ).on( "mousemove", function( event ) {
    var x = event.pageX;
    var y = event.pageY;

    //hide images if outside of rectangle --not very efficient
    if (outside(x,y)) {
      $("#magnify").fadeOut(300);
      $("#overlay").fadeOut(200);
        $('body').css('cursor', 'default');
    } else {
      //center magnify glass and overlay
      var l = x - mag_width/2;
      var t = y - mag_height/2;
      $("#magnify").css('left', l);
      $("#magnify").css('top', t);
      $("#overlay").css('left', l+2); //quick patch for centering magnified area...couple pixels stuck out to either side of glass
      $("#overlay").css('top', t+2);
      //adjust position of overlay's background image (top left corner of div is 0,0)
      var bkg_left = x - (l+scaling_factor*(x-left_lim));
      var bkg_top = y - (t+scaling_factor*(y-lower_lim));
      var bkg_pos = bkg_left + ' ' + bkg_top;
      $("#overlay").css('background-position', bkg_pos);
    }
  });

  $("#little").mouseenter(function(){
    //console.log('entered!');
    $("#magnify").fadeIn(250);
    $("#overlay").fadeIn(600);
    $('body').css('cursor', 'none');
  });
</script>
