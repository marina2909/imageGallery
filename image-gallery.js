function getImageGallery(arr, infoArr, idx) {

  var imageList = arr;
  var currentIdx = parseInt(idx);

  // create gallery
  var mig = document.createElement('div');
  mig.className = "mig";
  mig.innerHTML = '<div class="mig-dialog">' +
    '<svg class="mig-left-arrow mig-outer-arrow" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 50 50">' +
    '<path class="mig-arrow" transform="matrix(-1 0 0 1 50 -1002.4)" stroke-linejoin="round" d="m0.5166 1002.9 31.829 24.483-31.829 24.483h17.138l31.829-24.483-31.829-24.483h-17.138z"/>' +
    '</svg>' +
    '<div class="mig-image-holder">' +
    '<img class="mig-image"/>' +
    '</div>' +
    '<svg class="mig-exit" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 50 50">' +
    '<path stroke-linejoin="round" d="m35.641 39.504c-5.591-5.741-10.227-10.439-10.303-10.439-0.07544 0-4.8952 4.661-10.711 10.358-5.8147 5.697-10.615 10.372-10.667 10.389-0.0786 0.027-2.6466-2.803-3.427-3.776l-0.24379-0.305 10.565-10.29c5.8108-5.6599 10.551-10.348 10.534-10.417-0.017-0.06973-4.8234-4.775-10.681-10.456-5.857-5.682-10.65-10.381-10.65-10.443 0-0.06187 0.86871-1.0024 1.9305-2.0902l1.9309-1.9773 0.5315 0.5199c0.2924 0.28594 5.1074 4.8851 10.7 10.221l10.169 9.7005 1.0625-1.0347c0.58436-0.5691 5.1894-5.1179 10.233-10.108 5.044-4.9905 9.207-9.0737 9.2511-9.0737s0.89186 0.89867 1.8839 1.9971l1.803 1.9966-1.769 1.8109c-0.97289 0.99601-4.7238 4.8853-8.3353 8.6429s-7.2823 7.5659-8.1574 8.463l-1.591 1.6311 10.121 10.559 10.121 10.559-1.1804 1.1372c-0.6492 0.62548-1.5797 1.5256-2.0677 2.0002l-0.887 0.865-10.166-10.439z"/>' +
    '</svg>' +
    '<svg class="mig-right-arrow mig-outer-arrow" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 50 50">' +
    '<path class="mig-arrow" transform="translate(0 -1002.4)" d="m0.5166 1002.9 31.829 24.483-31.829 24.483h17.138l31.829-24.483-31.829-24.483h-17.138z"/>' +
    '</svg>' +
    '<div class="mig-page-num"></div>' +
    '<div class="mig-info"></div>' +
    '</div>';
  document.body.appendChild(mig);

  // add image src
  var img = document.getElementsByClassName("mig-image")[0];
  var page = document.getElementsByClassName("mig-page-num")[0];
  var info = document.getElementsByClassName("mig-info")[0];
  changeImageSrc();

  // bind events
  function close(event) {
    if (mig !== event.target) return;
    document.body.removeChild(mig);
  }

  function nextImage() {
    currentIdx++;
    currentIdx = currentIdx == imageList.length ? 0 : currentIdx;
    changeImageSrc();
  }

  function prevImage() {
    currentIdx--;
    currentIdx = currentIdx == -1 ? imageList.length - 1 : currentIdx;
    changeImageSrc();
  }

  function changeImageSrc() {
    img.src = imageList[currentIdx];
    page.innerHTML = (currentIdx + 1) + '/' + imageList.length;
    info.innerHTML = infoArr[currentIdx];
  }
  mig.addEventListener("click", close, false);
  var nextArrow = document.getElementsByClassName("mig-right-arrow")[0];
  nextArrow.addEventListener("click", nextImage, false);
  var prevArrow = document.getElementsByClassName("mig-left-arrow")[0];
  prevArrow.addEventListener("click", prevImage, false);
  var migDialog = document.getElementsByClassName("mig-image")[0];
  migDialog.addEventListener("click", nextImage, false);
  var migExit = document.getElementsByClassName("mig-exit")[0];
  migExit.addEventListener("click", function() {
    document.body.removeChild(mig);
  }, false);
}
