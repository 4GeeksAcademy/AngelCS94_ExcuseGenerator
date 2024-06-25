/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function fabricaexcusas() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car", "my head"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  function getRandomInt(MyArray) {
    let randomNumber = Math.floor(Math.random() * MyArray.length);
    return randomNumber;
  }

  return (
    who[getRandomInt(who)] +
    " " +
    action[getRandomInt(action)] +
    " " +
    what[getRandomInt(what)] +
    " " +
    when[getRandomInt(when)]
  );
}
document.getElementById("excusa").innerHTML = fabricaexcusas();
