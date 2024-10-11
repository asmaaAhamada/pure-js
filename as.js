//لانو كل ماساوينا ريفرش للصفحة لازم يضل التوكين مخزن واعرف انو هاد مسجل دخول 
setuI()
let currentpage=1
///////paginationn////
window.addEventListener("scroll", function(){
  const endOfPage = window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
  if(endOfPage){
    currentpage=currentpage+1
    getposts( false,currentpage)
  }
});
///////paginationn////
//الريلود بالحالة الطبيعية بدي ياه يفضي البوستات  وبالاستدعاء مشلن جيبهن على دفعات
function getposts( relod=true,page=1){



    axios.get(`https://tarmeezacademy.com/api/v1/posts?page=${page}`)
    .then(function (response) {
      // handle success
      console.log(response);
      let post=response.data.data
      console.log(post)
      if(relod){
       document.getElementById("d").innerHTML=""
      }


      for(p of post){
  let postTitle=""
  if(p.title==null){

    postTitle-p.title
  }
       let content=`
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         <div  id ="d"class="card">
        <div class="card-header">
          <img src="src/ol;.jpg" style="width: 40px;height: 40x;" class="rounded-circle"/>
          <b>${p.author.username}</b>
        </div>
        <div class="card-body shadow p-3 mb-5 bg-body rounded" onclick="postclick(${p.id})" style="cursor:pointer;">

          <img class="w-100" src="${p.image}"/>
          <h6  class ="mt-1"style="color: gray;">${p.created_at}</h6>
          <h4>${postTitle}</h4>
          <p>${p.body}</p>
          <!-- 3coments -->
           <hr>
           <div>
            <!-- pen// -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
              </svg>
            <span>${p.comments_count}
            
            </span>
           </div>
        </div>
      </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        `







        document.getElementById("d").innerHTML+=content
        



      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })









}getposts()


function login(){


const password=document.getElementById("password").value
const username=document.getElementById("username").value








const prams= {
       
    "username" : username,
        "password" : password}
    
    
    
    



    axios.post('https://tarmeezacademy.com/api/v1/login',prams
       

      )
      .then(function (response) {
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user",JSON.stringify(response.data.user))

const model=document.getElementById("login")
const modelinstance=bootstrap.Modal.getInstance(model)
modelinstance.hide()
to_logalert()

setuI()









      })
      .catch(function (error) {
        console.log(error);
      });




} login()

function setuI(){

const token=localStorage.getItem("token")
const login=document.getElementById("log_button")
const regester=document.getElementById("regester_button")
const logout=document.getElementById("logout_button")
const add=document.getElementById("add")
if(token==null){
  
  login.style.visibility="visible"
  regester.style.visibility="visible"
  logout.style.visibility="hidden"
  add.style.visibility="hidden"
}
else{
login.style.visibility="hidden"
regester.style.visibility="hidden"
logout.style.visibility="visible"
 add.style.visibility="visible"

}

}
function logout(){



localStorage.removeItem("token")
localStorage.removeItem("user")

setuI()

}logout()


function to_logalert(){





  const alertPlaceholder = document.getElementById('alert')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert" style="width: 40%;
height: 10%;background-color:green;justify-content: center">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }

  appendAlert('Nice, you loggedin successfly!', 'success')


setTimeout(()=>{

  const alertto = bootstrap.Alert.getOrCreateInstance('#alert')
  alertto.close()

},1000

)
 



}
function regster(){


 
  const username=document.getElementById("username-reg").value
  const password=document.getElementById("password-reg").value
  const name=document.getElementById("name-reg").value



const params={

"username":username,
"password":password,
"name":name,





}
// console.log(name,username,password)

axios.post('https://tarmeezacademy.com/api/v1/register',params
   

  )
  .then(function (response) {
    localStorage.setItem("token",response.data.token)
    localStorage.setItem("user",JSON.stringify(response.data.user))

const model=document.getElementById("regster")
const modelinstance=bootstrap.Modal.getInstance(model)
modelinstance.hide()
to_regalert()

setuI()


  })//الخطا يلي صار بالكود فوق لحتى اةصل للرسالة يلي عم يبعتها لباك
  .catch(function (error) {
    const message=error.response.data.message
    alert(message)
  });


  
  
}regster()





function to_regalert(){





  const alertPlaceholder = document.getElementById('alert')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert" style="width: 40%;
height: 10%;background-color:green;justify-content: center">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }

  appendAlert('Nice, welcom in my app!', 'success')


setTimeout(()=>{

  const alertto = bootstrap.Alert.getOrCreateInstance('#alert')
  alertto.close()

},1000

)}
 





























function create_post(){







  const title=document.getElementById("title").value
  const body=document.getElementById("body").value
  const image=document.getElementById("image").files[0]//لانو صورة
  const token =localStorage.getItem("token")
  
  
  let x=new FormData()
  x.append("body",body)
  
  x.append("title",title)
  x.append("image",image)
  
  
  
      
      
      const header={
        "Content-Type":"multipart/form-data",

        "Authorization":`Bearer ${token}`
      }
  
  
  
      axios.post('https://tarmeezacademy.com/api/v1/posts',x,{headers:header}
         
  
        )
        .then(function (response) {
          alert("created anew post  ")
          getposts()
        }).catch((error)=>{

const message=error.response.data.message
alert(message)

        })  

        const model=document.getElementById("add-create")
        const modelinstance=bootstrap.Modal.getInstance(model)
        modelinstance.hide()
 
        to_post_alert()

       


}create_post()



function to_post_alert(){





  const alertPlaceholder = document.getElementById('alert')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert" style="width: 40%;
height: 10%;background-color:purple;justify-content: center">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }

  appendAlert('Nice, post created successfly!', 'success')


setTimeout(()=>{

  const alertto = bootstrap.Alert.getOrCreateInstance('#alert')
  alertto.close()

},1000)}




function postclick(postid){
  
  window.location=`post.html?postid=${postid}`
}