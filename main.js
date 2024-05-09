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
// Dòng 22: Định nghĩa hàm showSlides(n) với tham số n đại diện cho chỉ số của slide cần hiển thị.
// Dòng 23: Khai báo biến i để sử dụng trong vòng lặp.
// Dòng 24: Lấy tất cả các phần tử có lớp là "slide" từ tài liệu HTML và gán cho biến slides.
// Dòng 25: Lấy tất cả các phần tử có lớp là "chamtron" từ tài liệu HTML và gán cho biến dots.
// Dòng 27-30: Kiểm tra xem chỉ số n có lớn hơn số lượng phần tử trong mảng slides hay không. Nếu có, slideIndex (biến chỉ số của slide) sẽ được đặt lại thành 1, tức là hiển thị slide đầu tiên.
// Dòng 32-35: Kiểm tra xem chỉ số n có nhỏ hơn 1 không. Nếu có, slideIndex sẽ được đặt lại thành số lượng phần tử trong mảng slides, tức là hiển thị slide cuối cùng.
// Dòng 37-40: Dùng vòng lặp để duyệt qua tất cả các phần tử trong mảng 
// slides và đặt thuộc tính CSS display của mỗi phần tử thành "none", ẩn chúng đi.
// Dòng 41-44: Dùng vòng lặp tương tự như trên để loại bỏ lớp "active" 
// từ tất cả các phần tử trong mảng dots, đảm bảo rằng không có dấu chấm nào được đánh dấu là active trước khi chúng ta hiển thị slide mới.
//Dòng 46: Hiển thị slide với chỉ số slideIndex - 1 (vì chỉ số bắt đầu từ 0 trong mảng) bằng cách đặt thuộc tính CSS display của nó thành "block".
//Dòng 47: Đánh dấu dấu chấm tương ứng là active bằng cách thêm lớp "active" vào lớp của phần tử dots[slideIndex - 1].