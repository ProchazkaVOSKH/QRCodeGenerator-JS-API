
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function GenerateQR(){

    //we check if the input box empty 
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); //adding css class
    }else{
        qrText.classList.add('error');
        
        //removed after one second
        setTimeout(()=>{

          qrText.classList.remove('error');

        },1000);
    }
   

}

