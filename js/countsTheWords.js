
var myTextareaElement = document.getElementById("myWordsToCount")

myTextareaElement.onkeyup = function(){
    var i=0;
    var sum=0;
    var myText = document.getElementById("myWordsToCount").value
    var myWordCount = myText.split(" ")
    while (i<myWordCount.length){
        if (myWordCount[i] != "") {
            sum=sum+1;
        }
        i=i+1;
    }
    document.getElementById("wordcount").innerHTML = sum
}