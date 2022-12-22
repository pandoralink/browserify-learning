const $ = require("jquery");
const { square } = require("./utils/math");

const initialVal = 2;

(function () {
  const countDOM = $(".count");
  const count = $(".count").text();
  console.log(count);
  if (!count) {
    countDOM.text(initialVal);
  }
})();

$(".count-button").on("click", () => {
  const countDOM = $(".count");
  const count = $(".count").text();
  countDOM.text(square(Number(count)));
});
