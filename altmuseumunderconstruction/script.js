var cards = $(".work");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

$(document).ready(function() {
  $('#mode').click(function() {
    $('.alttext').toggleClass('curtain');
  });
});

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('artworks').scrollLeft -= (delta * 100); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('artworks').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('artworks').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('artworks').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('artworks').attachEvent('onmousewheel', scrollHorizontally);
    }
})();