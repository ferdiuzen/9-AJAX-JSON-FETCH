document.getElementById("ajax").addEventListener("click",getAllEmployees)

function getAllEmployees(){
   const xhr=new XMLHttpRequest(); //xhr isimli obje oluşturduk

   xhr.open("GET","employees.json",true);

   xhr.onload=function(){
    let list=document.getElementById("employees");
    if(this.status==200){

        const employees=JSON.parse(this.responseText);
        // console.log(JSON.parse(this.responseText));
//Aşağıda tüm kayıtlar foreach ile taranır ve employee içinden dışa aktarılır -callback kullandık
        employees.forEach(function(employee){
            list.innerHTML +=`
            <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            
             </tr>
            
            
            `;


        });



        // console.log(this.responseText);
    }
    


   } 
   

   xhr.send();




}