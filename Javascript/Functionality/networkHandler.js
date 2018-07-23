var displayDiv = document.getElementById('networkDisplay');

function pixelsToArray (TDA) {
  ar = [];
  for(let i = 0; i < TDA.length; i++) {
    for(let j = 0; j < TDA[i].length; j++) {
      ar.push(TDA[i][j]);
    }
  }
  return ar;
}

inputAr = pixelsToArray(input);

function displayInput(TDA) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("Input: "));
  div.appendChild(document.createElement("br"));

  var t = document.createElement("table");

  // creat a function that shows a box and corresponds the value with greyscal. -1 being black, 1 being white

  for(let i = 0; i < TDA.length; i++) {
    var r = document.createElement("tr");

    for(let j = 0; j < TDA[i].length; j++) {
      var c = document.createElement("td");
      c.appendChild(document.createTextNode(TDA[i][j]));
      r.appendChild(c);
    }
    t.appendChild(r);
  }
  div.appendChild(t);
  return div;
}

displayDiv.appendChild(document.createElement("br"));

function createDivider() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("*********************************************************************"));
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
  return div;
}

function textLine(string) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(string));
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
  return div;
}

// var n = new Node(0,0,3);

var expectedNN = new NueralNetwork(inputAr, [inputAr.length, 4, 8, 16, expected.length], ["s","r","r","r"]);
var requiredWeightLayer0 = [[1,0,1,0], [0,1,0,1], [1,0,-1,0], [0,1,0,-1]];
var requiredWeightLayer1 = [[1,-1,0,0,0,0,0,0], [0,0,1,-1,0,0,0,0], [0,0,0,0,1,-1,0,0], [0,0,0,0,0,0,1,-1]];
var requiredWeightLayer2 = [
  [ 1,-1,-1, 1, 0, 0, 0, 0, 0, 0, 1,-1, 0, 0, 1,-1],
  [-1, 1, 1,-1, 0, 0, 0, 0, 0, 0,-1, 1, 0, 0,-1, 1],
  [ 1,-1, 1,-1, 0, 0, 0, 0, 1,-1, 0, 0, 1,-1, 0, 0],
  [-1, 1,-1, 1, 0, 0, 0, 0,-1, 1, 0, 0,-1, 1, 0, 0],
  [ 0, 0, 0, 0, 1,-1, 1,-1,-1, 1, 0, 0, 1,-1, 0, 0],
  [ 0, 0, 0, 0,-1, 1,-1, 1, 1,-1, 0, 0,-1, 1, 0, 0],
  [ 0, 0, 0, 0, 1,-1,-1, 1, 0, 0,-1, 1, 0, 0, 1,-1],
  [ 0, 0, 0, 0,-1, 1, 1,-1, 0, 0, 1,-1, 0, 0,-1, 1]
];

var requiredWeightLayer3 = [
  [ 1, 0, 0, 0, 0],
  [ 1, 0, 0, 0, 0],
  [ 0, 1, 0, 0, 0],
  [ 0, 1, 0, 0, 0],
  [ 0, 0, 1, 0, 0],
  [ 0, 0, 1, 0, 0],
  [ 0, 0, 0, 1, 0],
  [ 0, 0, 0, 1, 0],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1],
  [ 0, 0, 0, 0, 1]
]

var requiredBiases3 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];


expectedNN.weightLayer[0].setWeightLayer(requiredWeightLayer0);
expectedNN.weightLayer[1].setWeightLayer(requiredWeightLayer1);
expectedNN.weightLayer[2].setWeightLayer(requiredWeightLayer2);
expectedNN.weightLayer[3].setWeightLayer(requiredWeightLayer3);

expectedNN.nodeLayer[3].setBiases(requiredBiases3);
expectedNN.propogate(inputAr);

displayDiv.appendChild(expectedNN.displayNueralNetworkContents());

function showPropagatedNetwork() {
  displayDiv.appendChild(document.createElement("br"));
  inputAr = pixelsToArray(input);
  expectedNN.propogate(inputAr);
  displayDiv.appendChild(expectedNN.displayNueralNetworkContents());
}
