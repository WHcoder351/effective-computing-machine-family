function preload(){

}
function setup(){
canvas=createCanvas(320, 320);
canvas.center();
Video = createCapture(VIDEO);
Video.hide();
images = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JrkzOmpgQ/model.json',modeloaded);
}
function modeloaded(){
    console.log("model initialized");
 }
 function draw(){
    image(Video ,0,0,320,320);
    images.classify(Video,gotresults);
 }
 function gotresults(error,results){
    if(error){
       console.error(error);
    }else{
       console.log(results);
       document.getElementById("FM").innerHTML=results[0].label;
       document.getElementById("A").innerHTML=results[0].confidence.toFixed(3);
    }
 }
 