

class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();
    }


    //Delete- Request

    delete(url,callback){

        this.xhr.open("DELETE",url); //Bağlantı açtık


      

       this.xhr.onload=() =>{
        if(this.xhr.status==200){
           callback("Veri silme işlemi başarılı");
        }
        else{
            //Hata durumunda
            callback("DELETE Request:Bir hata oluştu !",null);

        }

    };

    this.xhr.send();
        
}     
    
}

const apiac=new Request();

apiac.delete("https://jsonplaceholder.typicode.com/albums/10",
function(err,response){
if(err==null){
    console.log(response);
}
else{
    console.log(err);
}

}

);

//Arrow yöntemi bir alternatiftir, arrow yapılan yerden fonksiyona değer gönderilir fonksiyon get metoduyla çalışır sonuç metod içinde gösterilir


