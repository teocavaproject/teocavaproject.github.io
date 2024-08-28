// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");

var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");
var captionText5 = document.getElementById("caption5");
var captionText6 = document.getElementById("caption6");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
