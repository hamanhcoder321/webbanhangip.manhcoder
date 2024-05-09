let slideIndex = 1;
showSlides(slideIndex);//slideIndex: Biến này được sử dụng để chỉ số trang hiện tại trong slideshow. 
//Ban đầu, nó được đặt thành 1, cho biết trang đầu tiên sẽ được hiển thị.
let slideInterval;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");//có nghĩa là lấy tất cả các phần tử HTML có class là 
  //"slide" trong tài liệu HTML. 
  //Dùng phương thức 
  const dots = document.getElementsByClassName("chamtron"); //tương tự như dòng trên, 
  //nhưng lấy tất cả các phần tử HTML có class là "chamtron" thay vì "slide".

  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function startSlideShow() {
  slideInterval = setInterval(function() {
    changeSlide(1);
  }, 2000);
  //startSlideShow(): Hàm này được gọi khi muốn bắt đầu chuyển động tự động của slideshow. 
  //Nó sử dụng setInterval() để gọi liên tục hàm changeSlide(1) mỗi 2 giây, 
  //điều này làm thay đổi trang hiển thị trong slideshow mỗi 2 giây.
}
function stopslideshow(){
  clearInterval(slideInterval);
}

startSlideShow();//bắt đầu slide tự động chuyển
document.querySelector(".left").addEventListener("click", function(){
  stopslideshow();
  changeSlide(-1);
  startSlideShow();
});
document.querySelector(".right").addEventListener("click", function(){
  stopslideshow();
  changeSlide(1);
  startSlideShow();
});
// sự kiện download lại trang chủ
function homelink() {
  window.location.homelink(); // Tải lại trang hiện tại

  return false; // Ngăn chặn trình duyệt thực hiện hành động mặc định của thẻ <a>
}