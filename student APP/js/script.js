import { loginbtn } from "./utilaties.js"
const login = document.querySelector(".login")
import { jsonobject } from "./input.js";
import { logininfo ,submitINFO,examinfo } from "./input.js";
import{display}from './utilaties.js'
//<------------------------ login  ------------------------->
let stinfo;
login.addEventListener("click",()=>{
   loginbtn(logininfo)
    const submit = document.querySelector('.log') 
    //<------------------- submit -------------------------->
    submit.addEventListener("click",()=>{
        const input = document.querySelector("input")
        if(input.value !== ''  && input.value > 0){ 
            loginbtn(submitINFO)
        }
        //<------------------student profile-------------------->
        stinfo = display(jsonobject,input.value);
        const studentProfile = document.querySelector(".btn-Profile");
         studentProfile.addEventListener("click", ()=>{
            const profile = `<div class="exams profile">
            <div class="topPart">
                <div class="texts">
                <span><i class="fas fa-arrow-left"></i></span>
                    <h4>student Profile</h4> 
                        <span><i class="fas fa-moon"></i></span>
                    <span> <i class="fas fa-home"></i></span>
                </div>
                <div class="box">
                    <div class="user">
                    <i class="fas fa-user"></i>
                    </div>
                    <h3>${stinfo.first_name} ${stinfo.last_name}</h3>
                    <span>${stinfo.id}</span>
                    <p>${stinfo.compas}</p>
                </div>
            </div>
            </div>    
            `;
            
               loginbtn(profile)
         })
        //<----------------- exam ---------------------------->
        const exambtn = document.querySelector('.btn-Exams');
        exambtn.addEventListener("click",()=>{
            loginbtn(examinfo)
                const studentinfo = `<div class="studentinfo">
                <div class="information">
                    <h3>STUDENT INFORMATION</h3>
                </div>
                <div class="info">

                    <div class="stinfo">
                        <h2>Student ID:</h2>
                        <span>${stinfo.id}</span>
                    </div>
                    <div class="stinfo">
                        <h2>Name:</h2>
                        <span>${stinfo.first_name} ${stinfo.last_name}</span>
                    </div>
                    <div class="stinfo">
                    <h2>Email:</h2>
                    <span>${stinfo.email} </span>
                </div>
                    <div class="stinfo">
                        <h2>Subjects: </h2>
                        <span>java:  ${stinfo.java}  
                        javascript: ${stinfo.javascript}</span>
                    </div>
                    <div class="stinfo">
                        <h2>Compas:</h2>
                        <span>${stinfo.compas}</span>
                    </div>
                </div>

                    
                </div>
                </div>`
                const show = document.querySelector(".show")
                show.addEventListener("click",e=>{
                     loginbtn(studentinfo)   
                    })

                

        })
          
    })
})





//    
  
//       
//    
    
//     
 
  
//  })
   
// })


