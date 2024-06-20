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
  let myArray = [
    who[getRandomInt()],
    action[getRandomInt()],
    what[getRandomInt()],
    when[getRandomInt()]
  ];
  function getRandomInt() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  }

  // return (
  //   who[getRandomInt()] +
  //   " " +
  //   action[getRandomInt()] +
  //   " " +
  //   what[getRandomInt()] +
  //   " " +
  //   when[getRandomInt()]
  // );
  return myArray[0];
}
document.getElementById("excusa").innerHTML = fabricaexcusas();
