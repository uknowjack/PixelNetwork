var tliButton = document.getElementById("topLeftInput");
var triButton = document.getElementById("topRightInput");
var bliButton = document.getElementById("bottomLeftInput");
var briButton = document.getElementById("bottomRightInput");

var propogateButton = document.getElementById("process");

var input = [[1,1],[1,1]];

tliButton.addEventListener("click", toggleTopLeft);
triButton.addEventListener("click", toggleTopRight);
bliButton.addEventListener("click", toggleBottomLeft);
briButton.addEventListener("click", toggleBottomRight);

propogateButton.addEventListener("click", processNewInputs);

var expected = [0,0,0,0,0];

function toggleTopLeft() {
  if(input[0][0] == 1) {
    input[0][0] = -1;
    tliButton.style.backgroundColor = "black";
  } else if (input[0][0] == -1) {
    input[0][0] = 1;
    tliButton.style.backgroundColor = "white";
  }
}

function toggleTopRight() {
  if(input[0][1] == 1) {
    input[0][1] = -1;
    triButton.style.backgroundColor = "black";
  } else if (input[0][1] == -1) {
    input[0][1] = 1;
    triButton.style.backgroundColor = "white";
  }
}

function toggleBottomLeft() {
  if(input[1][0] == 1) {
    input[1][0] = -1;
    bliButton.style.backgroundColor = "black";
  } else if (input[1][0] == -1) {
    input[1][0] = 1;
    bliButton.style.backgroundColor = "white";
  }
}

function toggleBottomRight() {
  if(input[1][1] == 1) {
    input[1][1] = -1;
    briButton.style.backgroundColor = "black";
  } else if (input[1][1] == -1) {
    input[1][1] = 1;
    briButton.style.backgroundColor = "white";
  }
}

function processNewInputs() {
  // if(document.getElementById("solid").checked) {
  //   expected = [1,0,0,0,0];
  // } else if (document.getElementById("vertical").checked) {
  //   expected = [0,1,0,0,0];
  // } else if (document.getElementById("horizontal").checked) {
  //   expected = [0,0,1,0,0];
  // } else if (document.getElementById("diagonal").checked) {
  //   expected = [0,0,0,1,0];
  // } else if (document.getElementById("dot").checked) {
  //   expected = [0,0,0,0,1];
  // }
  document.getElementById("networkDisplay").innerHTML = "";

  showPropagatedNetwork();
}
