var clicked=localStorage.clicked;
var garbageItem=JSON.parse(localStorage[clicked]);
if(localStorage.length) {
document.querySelector('#title').textContent=garbageItem.title;
document.querySelector('#sum').textContent=garbageItem.sum;
document.querySelector('#stepOneimg').src=garbageItem.stepOneimg;
document.querySelector('#para1').textContent=garbageItem.para1;
document.querySelector('#item1').textContent=garbageItem.item1;
document.querySelector('#item2').textContent=garbageItem.item2;
document.querySelector('#stepTwoimg').src=garbageItem.stepTwoimg;
document.querySelector('#para2').textContent=garbageItem.para2;
document.querySelector('#item12').textContent=garbageItem.item12;
document.querySelector('#stepThreeimg').src=garbageItem.stepThreeimg;
document.querySelector('#para3').textContent=garbageItem.para3;
document.querySelector('#item13').textContent=garbageItem.item13;
document.querySelector('#stepFourimg').src=garbageItem.stepFourimg;
document.querySelector('#para4').textContent=garbageItem.para4;
document.querySelector('#stepFiveimg').src=garbageItem.stepFiveimg;
document.querySelector('#para5').textContent=garbageItem.para5;
document.querySelector('#item15').textContent=garbageItem.item15;
document.querySelector('#item25').textContent=garbageItem.item25;
document.querySelector('#stepSiximg').src=garbageItem.stepSiximg;
document.querySelector('#para6').textContent=garbageItem.para6;
document.querySelector('#stepSevenimg').src=garbageItem.stepSevenimg;
document.querySelector('#para7').textContent=garbageItem.para7;
}










document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
    var seven=document.querySelector("#Seven");
  if(one.checked!==true){

    window.alert("You didn't do step 1");
  }else if(two.checked!==true){
    window.alert("You didn't do step 2");
  }else if(three.checked!==true){
    window.alert("You didn't do step 3");
  }else if(four.checked!==true){
    window.alert("You didn't do step 4");
  }else if(five.checked!==true){
    window.alert("You didn't do step 5")
  }else if(six.checked!==true){
    window.alert("You didn't do step 6")
  }else if(seven.checked!==true){
    window.alert("You didn't do step 6")
  }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }



});
