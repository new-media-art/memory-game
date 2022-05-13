document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "Jakob7",
      img: "images/j-7.JPG",
    },
    {
      name: "gameTop",
      img: "images/gameTop.JPG",
    },
    {
      name: "Jakob1",
      img: "images/j-1.JPG",
    },
    {
      name: "Jakob2",
      img: "images/j-2.JPG",
    },
    {
      name: "Jakob5",
      img: "images/j-5.JPG",
    },
    {
      name: "Jakob4",
      img: "images/j-4.JPG",
    },
    {
      name: "Jakob7",
      img: "images/j-7.JPG",
    },
    {
      name: "gameTop",
      img: "images/gameTop.JPG",
    },
    {
      name: "Jakob1",
      img: "images/j-1.JPG",
    },
    {
      name: "Jakob2",
      img: "images/j-2.JPG",
    },
    {
      name: "Jakob5",
      img: "images/j-5.JPG",
    },
    {
      name: "Jakob4",
      img: "images/j-4.JPG",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/card-back.JPG");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/card-back.JPG");
      cards[optionTwoId].setAttribute("src", "images/card-back.JPG");
      alert("You have clicked the same image you donkey!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found the right Jakobs!");
      cards[optionOneId].setAttribute("src", "images/jakobs-best-friend.JPG");
      cards[optionTwoId].setAttribute("src", "images/jakobs-best-friend.JPG");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/card-back.JPG");
      cards[optionTwoId].setAttribute("src", "images/card-back.JPG");
      alert("Ja ja, try again looser!!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found all Jakobs!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
