var nineSpan = document.querySelector("#nineSpan");
var nineBtn = document.querySelector("#nineBtn");
var tenSpan = document.querySelector("#tenSpan");
var tenBtn = document.querySelector("#tenBtn");
var elevenSpan = document.querySelector("#elevenSpan");
var elevenBtn = document.querySelector("#eleveneBtn");
var twelveSpan = document.querySelector("#twelveSpan");
var twelveBtn = document.querySelector("#twelveBtn");
var oneSpan = document.querySelector("#oneSpan");
var oneBtn = document.querySelector("#oneBtn");
var twoSpan = document.querySelector("#twoSpan");
var twoBtn = document.querySelector("#twoBtn");
var threeSpan = document.querySelector("#threeSpan");
var threeBtn = document.querySelector("#threeBtn");
var fourSpan = document.querySelector("#fourSpan");
var fourBtn = document.querySelector("#fourBtn");
var fiveSpan = document.querySelector("#fiveSpan");
var fiveBtn = document.querySelector("#fiveBtn");


renderNotes();

function renderNotes() {
  var storedNineSpan = localStorage.getItem("nineSpan");
  var storedTenSpan = localStorage.getItem("tenSpan");
  var storedElevenSpan = localStorage.getItem("elevenSpan");
  var storedTwelveSpan = localStorage.getItem("twelveSpan");
  var storedOneSpan = localStorage.getItem("oneSpan");
  var storedTwoSpan = localStorage.getItem("twoSpan");
  var storedThreeSpan = localStorage.getItem("threeSpan");
  var storedFourSpan = localStorage.getItem("fourSpan");
  var storedFiveSpan = localStorage.getItem("fiveSpan");

  nineSpan.textContent = storedNineSpan;
  tenSpan.textContent = storedTenSpan;
  elevenSpan.textContent = storedElevenSpan;
  twelveSpan.textContent = storedTwelveSpan;
  oneSpan.textContent = storedOneSpan;
  twoSpan.textContent = storedTwoSpan;
  threeSpan.textContent = storedThreeSpan;
  fourSpan.textContent = storedFourSpan;
  fiveSpan.textContent = storedFiveSpan;
  
  
}


$(".saveBtn").on("click", function (){

  var nineSpanInput = document.querySelector("#nineSpan").value;
  var tenSpanInput = document.querySelector("#tenSpan").value;
  var elevenSpanInput = document.querySelector("#elevenSpan").value;
  var twelveSpanInput = document.querySelector("#twelveSpan").value;
  var oneSpanInput = document.querySelector("#oneSpan").value;
  var twoSpanInput = document.querySelector("#twoSpan").value;
  var threeSpanInput = document.querySelector("#threeSpan").value;
  var fourSpanInput = document.querySelector("#fourSpan").value;
  var fiveSpanInput = document.querySelector("#fiveSpan").value;

  localStorage.setItem("nineSpan", nineSpanInput);
  localStorage.setItem("tenSpan", tenSpanInput);
  localStorage.setItem("elevenSpan", elevenSpanInput);
  localStorage.setItem("twelveSpan", twelveSpanInput);
  localStorage.setItem("oneSpan", oneSpanInput);
  localStorage.setItem("twoSpan", twoSpanInput);
  localStorage.setItem("threeSpan", threeSpanInput);
  localStorage.setItem("fourSpan", fourSpanInput);
  localStorage.setItem("fiveSpan", fiveSpanInput);
  renderNotes();


});







$("#currentDay").text(moment().format(('dddd MMMM Do YYYY, h:mm:ss A'))); 
    



var currentHour = moment().hours();
console.log(currentHour);

$(".timeBlock").each(function(){
var block = parseInt($(this).attr("data-block"));
console.log(block);

if (block < currentHour){
  $(this).addClass("past");
  
}
if(block > currentHour){
$(this).removeClass("past");
$(this).addClass("future");
}
if(block === currentHour){
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present")
}

});



