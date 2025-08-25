const result = document.getElementById("result");

function getAnswer(input) {
  result.value += input;
}

function clearAll(params) {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value)
  } catch (error) {
    result.value = "Can't Calculate"
  }
  
}
