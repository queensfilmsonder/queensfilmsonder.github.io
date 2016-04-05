var tl = new TimelineLite();

tl.from("#sonderHeader", 2, {
    opacity:0,
    ease:Power2.easeOut,}, 0)

tl.from("#suitcase", 4, {
    opacity:0,
    x:100,
    ease:Power4.easeOut,}, 2)