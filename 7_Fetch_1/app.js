function getTextFile(){
fetch("https://v6.exchangerate-api.com/v6/ac9ece2ed21b8ea7ddc323e8/latest/EUR").then(response=>response.text())
.then(data=>console.log(data))
.catch(err=>console.log(err));





}

getTextFile();

//fetch ajax alternatifidir
//fetch  - then olumlu sonuç döndürüldüğünde kullanılır
//fetch -catch olumsuz sonuç döndürüldüğünde kullanılır