var arr = ['1.jpg', '2.jpg'].map(img => 'testImages/' + img);
var info = ['cool picture', 'more cool', 'super cool'];
var imgs = document.getElementsByClassName("img-small");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function() {
    getImageGallery(arr, info, this.dataset.idx);
  }, false);
}
