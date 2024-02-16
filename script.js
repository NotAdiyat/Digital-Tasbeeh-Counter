let count = 0
const Mi = document.querySelector(".e1")
let plus = document.querySelector(".e2")
let ans = document.querySelector(".value")
let rst = document.querySelector(".reset")
let word = document.querySelector(".name")

let namee = prompt("Tasbeeh Word")

word.innerHTML = namee

Mi.addEventListener('click', function (e){   
    count-- 
    ans.innerHTML = count
    console.log("ok")
})

plus.addEventListener('click', function(e){   
    count++
    ans.innerHTML = count
    console.log("ok")
})

rst.addEventListener("click", function(e){
    count = 0
    ans.innerHTML = count
    console.log("Okk")
})