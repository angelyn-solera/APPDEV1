const colors = ["green","red","blue","f15025","yellow"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click",() => {
    console.log(document.body)
  const randomNumber = getRandomNumber()
      document.body.style.background = colors[randomNumber]
      color.textContent = colors[randomNumber]
  

})

getRandomNumber = () => {
    return Math.floor (Math.random() * colors.length)
}