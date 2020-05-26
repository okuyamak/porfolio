/***responsible navigatin bar***/
/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function navResponse() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

/***smooth scroll***/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/***radar chart***/
var myConfig = {
  type: 'radar',
  plot: {
    aspect: 'area',
    animation: {
      effect: 3,
      sequence: 1,
      speed: 700
    }
  },
  scaleV: {
    visible: false
  },
  scaleK: {
    values: '0:5:1',
    labels: ['Literature review', 'Scientific writing', 'Statistical analysis', 'Grant writing', 'Data management', 'Data visualization'],
    item: {
      fontColor: '#607D8B',
      backgroundColor: "white",
      borderColor: "#aeaeae",
      borderWidth: 1,
      padding: '5 10',
      borderRadius: 10
    },
    refLine: {
      lineColor: '#c10000'
    },
    tick: {
      lineColor: '#59869c',
      lineWidth: 2,
      lineStyle: 'dotted',
      size: 20
    },
    guide: {
      lineColor: "#607D8B",
      lineStyle: 'solid',
      alpha: 0.3,
      backgroundColor: "white #718eb4"
    }
  },
  series: [{
      values: [60, 50, 40, 40, 60, 45],
      text: 'farm'
    },
    {
      //values: [20, 20, 54, 41, 41, 35],
      lineColor: '#53a534',
      backgroundColor: '#689F38'
    }
  ]
};
 
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: '100%',
  width: '100%'
});
