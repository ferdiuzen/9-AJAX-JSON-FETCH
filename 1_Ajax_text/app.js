//0:Request not initialized --- istek başlatılamadı
//1:Server connection established --sunucu bağlantısı kuruldu
//2:Request Received --istek alındı
//3:Processing Request --istek işletiliyor
//4:Request finished and response is ready --istek tamamlandı ve yanıt hazır


//XMLHttpRequest  --- xhr

// const xhr=new XMLHttpRequest();
// console.log(xhr);

// xhr.open("GET","example.txt",true)//yeni bir istek başlatıyoruz ilk alan GET yani metod seçilir, ikinci alanda example.txt yani hangi dosyadan alacağımızı belirtiyoruz , üçüncü alanda da asenkron işlem seçilir bunun için true yapılır(varsayılan true dur)
//Aşağıda xhr içindeki onreadystatechange fonksiyon çalıştırır
//response hazırsa durum işlemleri tamamsa , istek sonucu buraya döner
// xhr.onreadystatechange=function(){

// // console.log(this.readyState);//Yukarıda yazılan 0-1-2-3-4 gibi istek sonuçları alınır
// // console.log(this.status);//işlem sonucu belirtilir 200 ise ok
// if(this.status==200 && this.readyState==4){
//  //Response Hazır!
//     console.log(this.responseText);
// }



// }


document.getElementById("btn").addEventListener("click",function(){

const xhr=new XMLHttpRequest();
//şimdi de onload yöntemi kullanılarak aynı işlem yapıldı
xhr.onload=function(){
    if(this.status==200){
        // console.log(this.responseText);

        document.getElementById("ajax").textContent=this.responseText;
//index sayfasındaki ajax isimli div e text dosyası içinden alınan değer atıldı - textContent kullanılarak

    }
}

xhr.open("GET","example.txt",true)

xhr.send();//Bağlantı açtıktan sonra requesti(isteği) send ile gönderiyoruz
 
})