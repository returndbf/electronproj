var fs =require('fs')
window.onload=function(){
    var btn = document.getElementById("btn")
    var text=document.getElementById("text")
    btn.onclick=function(){
        fs.readFile('text.txt',(err,data)=>{
            text.innerHTML=data
        })
    }
}