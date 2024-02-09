function setup(){
canvas=createCanvas(400,300)
canvas.center()
canvas.mouseReleased(classifier);
synth=window.speechSynthesis
}

function preload(){
 classifiers=ml5.imageClassifier("DoodleNet");
}
function draw(){
   strokeWeight(7);
   stroke("blue");
   if(mouseIsPressed){
      line(pmouseX,pmouseY,mouseX,mouseY);
   }

}
function classifier(){
   classifiers.classify(canvas,got_result);

}
function got_result(error,result){
   if(error){
      console.log(error);
   }else{
      console.log(result);
      document.getElementById("label").innerHTML=result[0].label;
      document.getElementById("confidence").innerHTML="Confidence"+Math.round(result[0].confidence*100)+"%";
      utter_this=new SpeechSynthesisUtterance(result[0].label);
      synth.speak(utter_this);
   }

}