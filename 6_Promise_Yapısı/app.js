function getData(data){  //promise objesi döndüren bi r fonksiyon

//Promise yapısı resolve(olumlu) - reject(olumsuz)
//then ile olumluyu karşılıyoruz 
//catch ile olumsuzu karşılarız -hata var ise
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        if(typeof data=="string"){
            resolve(data);
            console.log(typeof data)
        }
        else{
            reject("Lütfen string bir değer girin");
            console.log(typeof data)
        }

      
      },1000);
     

    })

   


}

getData("34").then(function(response){console.log("Gelen Değer   "+response);}).catch(function(err){console.log(err);

})