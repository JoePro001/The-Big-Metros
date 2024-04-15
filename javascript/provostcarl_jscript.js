let input=document.querySelectorAll("input");
let count0 = 0;
input[0].addEventListener("click", function() {
  count0++;
  input[0].nextElementSibling.textContent = "North East" + " " + count0;
})


let count1 = 0;
input[1].addEventListener("click", function() {
  count1++;
  input[1].nextElementSibling.textContent = "South East" + " " + count1;
})


let count2 = 0;
input[2].addEventListener("click", function() {
  count2++;
  input[2].nextElementSibling.textContent = "Mid West" + " " + count2;
})


let count3 = 0;
input[3].addEventListener("click", function() {
  count3++;
  input[3].nextElementSibling.textContent = "South West" + " " + count3;
})


let count4 = 0;
input[4].addEventListener("click", function() {
  count4++;
  input[4].nextElementSibling.textContent = "West" + " " + count4;
})
