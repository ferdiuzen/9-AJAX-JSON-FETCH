

class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();
    }


    //Get Request
//callback ile fonksiyona sonuç döndürülür
    get(url,callback){

        this.xhr.open("GET",url); //Bağlantı açtık
       // const temp=this;
//Arrow yöntemi
       this.xhr.onload=() =>{
        if(this.xhr.status==200){
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
        this.xhr.send();

    }
}

const apiac=new Request();
apiac.get("https://jsonplaceholder.typicode.com/albums",function(response){
    
console.log(response);
});

//Arrow yöntemi bir alternatiftir, arrow yapılan yerden fonksiyona değer gönderilir fonksiyon get metoduyla çalışır sonuç metod içinde gösterilir


