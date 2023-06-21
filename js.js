function getposts(userId){
let request=new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+userId)
request.responseType="json"
request.send()
request.onload=function(){
    if(request.status>=200 && request.status<300){
        let posts = request.response
        document.getElementById("posts").innerHTML = ""

        for( post of posts){
            let Content=`
            
            <div id="post">
                <h3> ${post.title}</h3>
                <h4> ${post.body}
                </h4>
            </div>

            `
            document.getElementById("posts").innerHTML+= Content
        }
    }else{
        alert("error in response")
    }
}
}


function getusers(){
    let request=new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType="json"
    request.send()
    request.onload=function(){
        if(request.status>=200 && request.status<300){

            let users = request.response
            document.getElementById("users").innerHTML = ""
    
            for( user of users){
                let Content=`
                
                <div  id="user" onclick="userclic(${user.id} ,this)">
                <h3>${user.name}</h3>
                <h3>${user.email}</h3>
            </div>
    
                `
                document.getElementById("users").innerHTML += Content
            }
        }else{
            alert("error in response")
        }
    }
    }


getusers()


function userclic(id ,el){
    getposts(id)
    let element =document.getElementsByClassName("selected")
    for(bo of element){
        bo.classList.remove("selected")
    }
    el.classList.add("selected")
}