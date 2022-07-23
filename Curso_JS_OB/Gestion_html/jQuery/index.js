//$(selector).accion()
//$("h1").hide()

//$(document).ready(() => {})
$(()=>{
    //Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    //$("#el-1").hide()

    // $(".hide-btn").click(()=>{
    //     console.log("Ocultando...");
    //     $("h1").hide()
    // })
    // $(".show-btn").click(()=>{
    //     console.log("Mostrando...");
    //     $("h1").show()
    // })
    $(".hide-btn").click(()=>{
        console.log("Ocultando...");
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        console.log("Mostrando...");
        $("h1").fadeIn()
    })
    $("li").click(() => {
        $("h1").css({ color:"red"})
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $(".new-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})