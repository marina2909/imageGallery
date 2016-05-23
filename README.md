Responsive image gallery
=========================

This is responsive image gallery made in pure javascript.


How to use
----------

You only need to include image-gallery.js and image-gallery.css into your project.
* Define array of images `arr` you want to show in your gallery
* Define array of descriptions `descriptions` for you images you want to show with your images(below the image).
* Define starting index `idx`.

Start image gallerry by calling:
`getImageGallery(arr, info, inx);`

## Example

```js
var arr = ['img1.jpg', 'img2.jpg'].map(img => 'imgFolder/' + img);
var descriptions = ['description1', 'description2'];
getImageGallery(arr, info, 1);
```
