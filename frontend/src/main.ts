const currentPriceElement = document.querySelector<HTMLParagraphElement>("#current-price")! 
const nextIterationButton = document.querySelector<HTMLButtonElement>("#next-iteration")!
let currentPrice = 1


nextIterationButton.addEventListener("click", () => {
  currentPrice *= 1.0001 + (Math.random() - Math.random())/10
  updatePrice()
})

function updatePrice() {
  currentPriceElement.innerHTML = currentPrice.toString()

}

function main() {
  updatePrice()
  
}

main()