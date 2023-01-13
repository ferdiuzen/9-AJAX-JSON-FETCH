//Set TimeOut

setTimeout(function(){
    console.log("Bu yazı belli süre sonra ekrana çıkacak");
},5000);


//Set Interval -- Belli süre aralıklarla tekrar ettirilir
let i=0;
let value=setInterval(function(){
    i++;
    console.log("Sayı arttırıldı",i);
},1000);

//Clear Interval -- İşlemi durdurmak için kullanılır

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});