window.addEventListener('scroll', function() {
  var toc = document.querySelector('.toc');
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');

  var tocHeight = toc.offsetHeight;
  var headerHeight = header.offsetHeight;
  var footerHeight = footer.offsetHeight;

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var viewportHeight = window.innerHeight;
  // var distanceFromBottom = document.documentElement.scrollHeight - (scrollTop + viewportHeight - footerHeight);

  var tocBottomPosition = toc.getBoundingClientRect().bottom; 
  // var tocTopPosition = toc.getBoundingClientRect().top; 
  var footerTopPosition = footer.getBoundingClientRect().top;
  // var headerBottomPosition = header.getBoundingClientRect().bottom;

  // if (tocTopPosition <= headerBottomPosition) {
  //   toc.style.top = headerHeight + 15 + 'px';
  // } else {
  //   toc.style.top = 15 + 'px';
  // }

  if (scrollTop < headerHeight) {
    toc.style.top = headerHeight + 15 + 'px';
  } else {
    toc.style.top = 15 + 'px';
  }

  if (tocBottomPosition > footerTopPosition) {
    toc.style.top = viewportHeight - footerHeight - tocHeight - 5 + 'px';
  }

  // if (distanceFromBottom + footerHeight < viewportHeight) {
  //   toc.style.top = viewportHeight - footerHeight - tocHeight - 5 + 'px';
  // }


});

var toc = document.querySelector('.toc');
var tocHeight = toc.offsetHeight;
var viewportHeight = window.innerHeight;

if (tocHeight > viewportHeight) {
  toc.style.overflowY = "scroll"
  toc.style.height = viewportHeight - 50 + "px"
  toc.style.padding = "0 4vw 0 2.5vw"
  toc.style.width = "min-content"
}
