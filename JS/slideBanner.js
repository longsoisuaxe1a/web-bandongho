var i = 1;
var x = 1;
slideBanner = function() {
    var imgs = ["IMAGE/banner-trang-chu-doxa-grandemetre.webp", "IMAGE/banner3.jpg", "IMAGE/bannerq.jpg", "IMAGE/bannert.jpg"];
    document.getElementById("banner").src = imgs[i];
    i++;
    if (i == 4) {
        i = 0;
    }
}
setInterval(slideBanner, 2000);
slideHeader = function() {
    var imgs = ["IMAGE/banner-trang-chu-doxa.webp", "IMAGE/banner1.webp", "IMAGE/banner2.jpg", "IMAGE/bannert.jpg"];
    document.getElementById("bannerHeader").src = imgs[x];
    x++;
    if (x == 3) {
        x = 0;
    }
}
setInterval(slideHeader, 2000);