Webcam.set({
    width : 300,
    height : 300 ,
    image_format : 'png',
    png_quality : 100,
    constraints : {
        facingMode : "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='result_img' src='" + data_uri + "'>";
    });
}

console.log("ML5 Version Loaded" , ml5.version);

classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
function modelLoaded(params) {
    console.log("Model Loaded");
}

function identify(){
    img = document.getElementById("result_img");
    classifier.classify(img , gotResult)
}

function gotResult (error , results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("object_name").innerHTML = results[0].label;
}
}

