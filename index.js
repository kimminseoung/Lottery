const result = document.querySelector("#result");
const bonus = document.querySelector("#bonus");
const st = document.querySelector("#start");
const rst = document.querySelector("#reset");

const numbers = Array(45)
  .fill()
  .map((ele, index) => {
    return index + 1;
  }); // 1~45 숫자 생성

const shuffle = [];

while (numbers.length > 0) {
  const Ramdom = Math.floor(Math.random() * numbers.length);
  const spliceArray = numbers.splice(Ramdom, 1);
  const value = spliceArray[0];
  shuffle.push(value);
} // 7개의 숫자 뽑기

const lotterNum = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonusNum = shuffle[6];

function numGen(number, $target) {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  color(number, $ball);
  $ball.textContent = number;
  $target.appendChild($ball);
}

function color(number, tag) {
  if (number < 10) {
    tag.style.backgroundColor = "#e84118";
  } else if (number < 20) {
    tag.style.backgroundColor = "#ffa502";
  } else if (number < 30) {
    tag.style.backgroundColor = "#fbc531";
  } else if (number < 40) {
    tag.style.backgroundColor = "#44bd32";
  } else {
    tag.style.backgroundColor = "#0097e6";
  }
} // 숫자 범위 별 공 색깔 결정하기

function callNum() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      numGen(lotterNum[i], result);
    }, (i + 1) * 1000);
  }

  setTimeout(() => {
    numGen(bonusNum, bonus);
  }, 7000);
}

st.addEventListener("click", () => {
  callNum();
  st.disabled = "true";
});

rst.addEventListener("click", () => {
  result.textContent = "";
  bonus.textContent = "";
  callNum();
});
