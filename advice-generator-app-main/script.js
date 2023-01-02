const adviceID = document.querySelector("#adviceID");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceKey = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceID.innerHTML = adviceKey;
      adviceText.innerHTML = `<p> " ${advice} "</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", (e) => {
  getAdvice();
  //   console.log("i was clicked");
});

window.onload = () => {
  getAdvice();
};
