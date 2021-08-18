function setup(){
    canvas=createCanvas(600,600);
    canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PBQfx5az_/model.json',modelLoaded)
}
function modelLoaded(){
    console.log('modelLoaded');
}
function draw(){
    image(video,0,0,600,600);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
console.log(results)
document.getElementById("result_id_name").innerHTML=results[0].label;
document.getElementById("result_id_accuracy").innerHTML=results[0]. confidence.toFixed(3);
    }
}