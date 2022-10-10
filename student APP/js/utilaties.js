const body = document.querySelector("body");
export const loginbtn = (btn)=>{
    body.innerHTML ='';
    body.innerHTML = btn
}

//display data

export const display = (jsonData,ID)=>{
    let i = 0;
    // console.log(jsonobject);
    for(;i<jsonData.length;i++){
        if(jsonData[i].id == ID){
           return jsonData[i];
        }
    }
}


