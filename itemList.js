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
document.querySelector('#item17').textContent=garbageItem.item17;
document.querySelector('#title1').textContent=garbageItem.title1;
document.querySelector('#title2').textContent=garbageItem.title2;
document.querySelector('#title3').textContent=garbageItem.title3;
document.querySelector('#title4').textContent=garbageItem.title4;
document.querySelector('#title5').textContent=garbageItem.title5;
document.querySelector('#title6').textContent=garbageItem.title6;
document.querySelector('#title7').textContent=garbageItem.title7;





}
var para6= document.querySelector("#para6").textContent;
var para7= document.querySelector("#para7").textContent;
var para5= document.querySelector("#para5").textContent;
var item22= document.querySelector("#item22").textContent;
var item1= document.querySelector("#item1").textContent;
var item2= document.querySelector("#item2").textContent;
var item12= document.querySelector("#item12").textContent;
var item13= document.querySelector("#item13").textContent;
var item15= document.querySelector("#item15").textContent;
var item25=document.querySelector("#item25").textContent;
var item16=document.querySelector("#item16").textContent;
var item26=document.querySelector("#item26").textContent;
var item17=document.querySelector("#item17").textContent;
var item27=document.querySelector("#item27").textContent;

if(para6==""){
  document.querySelector("#stepSix").style.display="none";
}
if(para7==""){
    document.querySelector("#stepSeven").style.display="none";

}
if(para5==""){
  document.querySelector("#stepFive").style.display="none";

}
if(item22==""){
  document.querySelector("#item22").style.display="none";
}
if(item1==""){
  document.querySelector("#item1").style.display="none";
}
if(item2==""){
  document.querySelector("#item2").style.display="none";
}
if(item12==""){
  document.querySelector("#item12").style.display="none";
}
if(item13==""){
  document.querySelector("#item13").style.display="none";
}
if(item15==""){
  document.querySelector("#item15").style.display="none";
}
if(item25==""){
  document.querySelector("#item25").style.display="none";
}
if(item16==""){
  document.querySelector("#item16").style.display="none";
}
if(item26==""){
  document.querySelector("#item26").style.display="none";
}
if(item17==""){
  document.querySelector("#item17").style.display="none";
}
if(item27==""){
  document.querySelector("#item27").style.display="none";
}
var synth = window.speechSynthesis;
  synth.cancel();


document.querySelector('#play').addEventListener('click', readText);


function readText() {
console.log('text');
var title=document.querySelector("#title").textContent;
if(title=="How to Dispose of Antifreeze"){
  var text=garbageItem.title+". "+garbageItem.sum+". "+garbageItem.title1+". "+garbageItem.para1+". "+garbageItem.item1+". "+garbageItem.item2+". "+garbageItem.title2+". "+garbageItem.para2+". "+garbageItem.item12+". "+garbageItem.title3+". "+garbageItem.para3+". "+garbageItem.item13
+". "+garbageItem.title4+". "+garbageItem.para4+". "+garbageItem.title5+". "+garbageItem.para5+". "+garbageItem.item15+". "+garbageItem.item25;
}
if(title=="How to Dispose of Fluids"){
  var text =garbageItem.title+". "+garbageItem.sum+". "+garbageItem.title1+". "+garbageItem.para1+". "+garbageItem.title2+". "+garbageItem.para2+". "+garbageItem.title3+". "+garbageItem.para3+". "+garbageItem.title4+". "+garbageItem.para4;

}
if(title=="How to Dispose of Motor Oil"){
  var text =garbageItem.title+". "+garbageItem.sum+". "+garbageItem.title1+". "+garbageItem.para1+". "+garbageItem.title2+". "+garbageItem.para2+". "+garbageItem.title3+". "+garbageItem.para3+". "+garbageItem.title4+". "+garbageItem.para4+". "+garbageItem.title5+". "+garbageItem.para5+". "
  +garbageItem.title6+". "+garbageItem.para6+". "+garbageItem.title7+". "+garbageItem.para7;



}
if(title=="How to Dispose of Oil Filter"){
  var text =garbageItem.title+". "+garbageItem.sum+". "+garbageItem.title1+". "+garbageItem.para1+". "+garbageItem.title2+". "+garbageItem.para2+". "+garbageItem.title3+". "+garbageItem.para3+". "+garbageItem.title4+". "+garbageItem.para4+". "+garbageItem.title5+". "+garbageItem.para5+". "
  +garbageItem.title6+". "+garbageItem.para6+". "+garbageItem.title7+". "+garbageItem.para7;



}
if(title=="How to Dispose of Gasoline"){
  var text =garbageItem.title+". "+garbageItem.sum+". "+garbageItem.title1+". "+garbageItem.para1+". "+garbageItem.item1+". "+garbageItem.item2+". "+garbageItem.title2+". "+garbageItem.para2+". "+garbageItem.item12+". "+garbageItem.title3+". "+garbageItem.para3+". "+garbageItem.item13
  +". "+garbageItem.title4+". "+garbageItem.para4+". "+garbageItem.title5+". "+garbageItem.para5+". "+garbageItem.item15+". "+garbageItem.item25+". "+garbageItem.title6+". "+garbageItem.para6+". "+garbageItem.title7+". "+garbageItem.para7+". "+garbageItem.item17;



}





if(synth.paused){
  synth.resume();
}
if (text !== '') {
  var speech = new SpeechSynthesisUtterance(text);

  speech.onerror = function (event) {
    console.error('SpeechSynthesisUtterance.onerror');
  }

  var voices = synth.getVoices();
  speech.voice = voices[0]; // Google US English
  speech.pitch = 1;
  speech.rate = 0.9;
  synth.speak(speech);
}
}

document.querySelector('#pause').addEventListener('click', pauseText);
function pauseText() {
  if(synth.speaking){
    synth.pause();
  }
}







document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
  var ans=document.querySelector("#title").textContent;
    var seven=document.querySelector("#Seven");
    if(ans=="How to Dispose of Antifreeze"){
      if(one.checked!==true){

        window.alert("You didn't do step 1");
      }else if(two.checked!==true){
        window.alert("You didn't do step 2");
      }else if(three.checked!==true){
        window.alert("You didn't do step 3");
      }else if(four.checked!==true){
        window.alert("You didn't do step 4");
      }else if(five.checked!==true){
        window.alert("You didn't do step 5");


  }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }
}





});
document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
  var ans=document.querySelector("#title").textContent;
    var seven=document.querySelector("#Seven");
    if(ans=="How to Dispose of Fluids"){
      if(one.checked!==true){

        window.alert("You didn't do step 1");
      }else if(two.checked!==true){
        window.alert("You didn't do step 2");
      }else if(three.checked!==true){
        window.alert("You didn't do step 3");
      }else if(four.checked!==true){
        window.alert("You didn't do step 4");
      }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }
}





});
document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
  var ans=document.querySelector("#title").textContent;
    var seven=document.querySelector("#Seven");
    if(ans=="How to Dispose of Motor Oil"){
      if(one.checked!==true){

        window.alert("You didn't do step 1");
      }else if(two.checked!==true){
        window.alert("You didn't do step 2");
      }else if(three.checked!==true){
        window.alert("You didn't do step 3");
      }else if(four.checked!==true){
        window.alert("You didn't do step 4");
      }else if(five.checked!==true){
        window.alert("You didn't do step 5");
      }else if(six.checked!==true){
        window.alert("You didn't do step 6");
      }else if(seven.checked!==true){
        window.alert("You didn't do step 7");



  }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }
}





});
document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
  var ans=document.querySelector("#title").textContent;
    var seven=document.querySelector("#Seven");
    if(ans=="How to Dispose of Oil Filter"){
      if(one.checked!==true){

        window.alert("You didn't do step 1");
      }else if(two.checked!==true){
        window.alert("You didn't do step 2");
      }else if(three.checked!==true){
        window.alert("You didn't do step 3");
      }else if(four.checked!==true){
        window.alert("You didn't do step 4");
      }else if(five.checked!==true){
        window.alert("You didn't do step 5");
      }else if(six.checked!==true){
        window.alert("You didn't do step 6");
      }else if(seven.checked!==true){
        window.alert("You didn't do step 7");



  }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }
}





});
document.querySelector('#Done').addEventListener('click', function() {
  var one=document.querySelector("#One");
  var two=document.querySelector("#Two");
  var three=document.querySelector("#Three");
  var four=document.querySelector("#Four");
  var five=document.querySelector("#Five");
  var six=document.querySelector("#Six");
  var ans=document.querySelector("#title").textContent;
    var seven=document.querySelector("#Seven");
    if(ans=="How to Dispose of Gasoline"){
      if(one.checked!==true){

        window.alert("You didn't do step 1");
      }else if(two.checked!==true){
        window.alert("You didn't do step 2");
      }else if(three.checked!==true){
        window.alert("You didn't do step 3");
      }else if(four.checked!==true){
        window.alert("You didn't do step 4");
      }else if(five.checked!==true){
        window.alert("You didn't do step 5");
      }else if(six.checked!==true){
        window.alert("You didn't do step 6");
      }else if(seven.checked!==true){
        window.alert("You didn't do step 7");



  }else{
    document.querySelector("#Modal").style.display="block";
setTimeout(function(){     location.href="index.html";
}, 5000);

  }
}





});
