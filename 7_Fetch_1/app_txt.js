function getTextFile(){
fetch("example.txt").then(response=>response.text())
.then(data=>console.log(data))
.catch(err=>console.log(err));





}

getTextFile();

//fetch ajax alternatifidir
//fetch  - then olumlu sonuç döndürüldüğünde kullanılır
//fetch -catch olumsuz sonuç döndürüldüğünde kullanılır