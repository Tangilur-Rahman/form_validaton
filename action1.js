

  let text = document.getElementById("text");
  let password = document.getElementById("password");

  let form = document.getElementById("form");

  let flag = 1;

   
   form.addEventListener("submit",function(event){

     
      let p = document.getElementById("para1")

      if(text.value == ""){
          
         p.innerHTML = '<i class="fas fa-exclamation-circle"></i>' +' Input field is empty';

         p.classList.add("icon-con");

         flag = 0;

      }else if(text.value.length <3){
        p.innerHTML = '<i class="fas fa-exclamation-circle"></i>' +' Please Input more than 3';

         p.classList.add("icon-con");

         flag = 0;

      }else{
        p.innerHTML = "";
        flag = 1;
      }


      let p1 = document.getElementById("para2")

      if(password.value == ""){
             
         p1.innerHTML = '<i class="fas fa-exclamation-circle"></i>' +' Input field is empty';

         p1.classList.add("icon-con");

         flag = 0;

      }else if(password.value.length <8){
        p1.innerHTML = '<i class="fas fa-exclamation-circle"></i>' +' Please Input more than 8';

        p1.classList.add("icon-con");

        flag = 0;

      }else{
        p1.innerHTML = "";
        flag = 1;
      }

      

      if(flag == 1){

      }else{
        event.preventDefault();
      }
      




   });


   let eye = document.getElementById("span");

    let state = false;
    eye.addEventListener("click",function(){
        if(state == false){

          eye.innerHTML  = '<i class="fas fa-eye eye"></i>';

          state = true;
          password.setAttribute("type" ,"text");
        

        }else if(state == true){
         
          eye.innerHTML  = '<i class="fas fa-eye-slash eye"></i>';

          state = false;

          password.setAttribute("type" ,"password");
        }
    });
