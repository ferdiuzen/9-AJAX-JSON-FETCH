

class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();
    }


    //Post Request

    post(url,data,callback){

        this.xhr.open("POST",url); //Bağlantı açtık

//ÖNEMLİ Post metodunda bağlantı açıldıktan sonra içerik tipi set yapılır  json/text

        this.xhr.setRequestHeader("Content-type","application/json");//JSON verisi
//201 CREATE status kodudur  post ta kullanılır
       this.xhr.onload=() =>{
        if(this.xhr.status==201){
           callback(this.xhr.responseText);
        }
        else{
            //Hata durumunda
            callback("Get Request:Bir hata oluştu")

        }


/*        this.xhr.onload=function(){
            if(temp.xhr.status==200){
                console.log(temp.xhr.responseText);
            } */

        }
        this.xhr.send(JSON.stringify(data));
  //içerik stringe dönüştürülür stringify ile 
    }
}

const apiac=new Request();

apiac.post("https://jsonplaceholder.typicode.com/albums",{ 
"userId": 1502,
"title": "bizim içeriğimiz"},function(albums){
    
console.log(albums);
});

//Arrow yöntemi bir alternatiftir, arrow yapılan yerden fonksiyona değer gönderilir fonksiyon get metoduyla çalışır sonuç metod içinde gösterilir


