
// 제이쿼리
$(function(){
    $("h1").on("click",function(){
        $(this).css({"color":"red"})
    })


})


// 자바스크립트
let title = document.getElementById("tit")
console.log(title)

title.addEventListener("click",function(){
    this.style.color="blue"
})