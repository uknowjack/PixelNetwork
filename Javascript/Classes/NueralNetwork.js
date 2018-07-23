class NueralNetwork {
  constructor (inputs, numNodes, structure) {

    let wl = [];
    for(let i = 0; i < numNodes.length-1; i++) {
      wl.push(new WeightLayer(numNodes[i], numNodes[i+1]));
    }

    this.weightLayer = wl;

    var nl = [new NodeLayer(0, 0, inputs.length, inputs)];
      for(let i = 1; i < numNodes.length; i++) {
        var pastWeights = this.weightLayer[i-1].weight;
        var previousNuerons = nl[i-1].node.map (e => e.nueron);
        nl.push(new NodeLayer(previousNuerons, pastWeights, numNodes[i]));
      }

    this.nodeLayer = nl;

    this.structure = structure;

  } // end constructor

  getOutput () {
    var last = this.nodeLayer.length - 1;
    var output = this.nodeLayer[last].node.map (e => e.nueron);
    return output;
  }

  getCost (expected) {
    var output = this.getOutput();
    var cost = [];
    for(let i = 0; i < output.length; i++) {
      cost.push((output[i]-expected[i])**2);
    }
    return cost;
  }

  getTotalCost (expected) {
    var ar = this.getCost(expected);
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return sum;
  }

  displayNueralNetworkContents() {
    var div = document.createElement("div");
    for(let i = 0; i < this.nodeLayer.length; i++){
      var nodeDiv = document.createElement("div");
      // nodeDiv.style.backgroundColor = "green";
      nodeDiv.style.padding = "10px";
      nodeDiv.style.borderRadius = "10px";
      nodeDiv.style.borderTop = "2px solid black";

      nodeDiv.appendChild(document.createTextNode("Node Layer: "+i));
      nodeDiv.appendChild(document.createElement("br"));
      if(i > 0) {
        var pn = this.nodeLayer[i-1].node.map(e => e.nueron);
        var w = this.weightLayer[i-1].weight;
      } else {
        var pn = [0];
        var w = [[0,0,0,0]];
      }
      nodeDiv.appendChild(this.nodeLayer[i].displayNodeLayerContents(pn, w));
      nodeDiv.appendChild(document.createElement("br"));
      div.appendChild(nodeDiv);
      if(i < this.nodeLayer.length-1) {
        var weightDiv = document.createElement("div");
        // weightDiv.style.backgroundColor = "darkgoldenrod";
        weightDiv.style.padding = "10px";
        weightDiv.style.borderRadius = "10px";
        weightDiv.style.borderTop = "2px solid black";
        weightDiv.appendChild(document.createTextNode("Weight Layer: "+i));
        weightDiv.appendChild(document.createElement("br"));
        weightDiv.appendChild(this.weightLayer[i].displayWeightLayerContents());
        weightDiv.appendChild(document.createElement("br"));
        div.appendChild(weightDiv);
      }
    }
    return div;
  }

  displayTrainingInstanceResult (expectedOutput) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Training Instance Results"));
    div.appendChild(document.createElement("br"));

    var t = document.createElement("table");
    var r = document.createElement("tr");
    for(let i = 0; i < 4; i++) {
      var c = document.createElement("td");
      let text = "";
      switch(i) {
        case 0: text = "Nuerons";
        break;
        case 1: text = "Expected";
        break;
        case 2: text = "Difference";
        break;
        case 3: text = "Cost";
        break;
      }
      c.appendChild(document.createTextNode(text));
      r.appendChild(c);
    }
    t.appendChild(r);

    var output = this.getOutput();
    var difference = [];
    for(let i = 0; i < output.length; i++) {
      difference.push(output[i]-expectedOutput[i]);
    }
    var cost = this.getCost(expected);

    for(let i = 0; i < output.length; i++) {
      var r = document.createElement("tr");
      var c = document.createElement("td");
      c.appendChild(document.createTextNode(output[i]));
      r.appendChild(c);
      var c = document.createElement("td");
      c.appendChild(document.createTextNode(expectedOutput[i]));
      r.appendChild(c);
      var c = document.createElement("td");
      c.appendChild(document.createTextNode(difference[i]));
      r.appendChild(c);
      var c = document.createElement("td");
      c.appendChild(document.createTextNode(cost[i]));
      r.appendChild(c);
      t.appendChild(r);
    }

    t.appendChild(r);

    div.appendChild(t);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createTextNode("Total Cost: "+this.getTotalCost(expectedOutput)));
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    return div;
  }

  displayNetworkDerivatives (expected) {
    var div = document.createElement("div");
    var last = this.nodeLayer.length-1;
    var multiplyerAr = this.nodeLayer[last].getDerivativeCostNueronAr(expected);

    for(let i = this.nodeLayer.length-1; i >=1; i--) {

      var previousNuerons = this.nodeLayer[i-1].node.map (e => e.nueron);
      var previousWeights = this.weightLayer[i-1].weight;

      div.appendChild(document.createTextNode("Derivatives of Node Layer: "+i));
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createTextNode("- - - - - - - - - - - - - - - -"));
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createElement("br"));

      div.appendChild(this.nodeLayer[i].displayLayerDerivatives(previousNuerons, previousWeights, multiplyerAr));

      multiplyerAr = this.nodeLayer[i].getSumDerivativesPreviousNueron(previousNuerons, previousWeights, multiplyerAr);

      div.appendChild(document.createTextNode("= = = = = = = = = = = = = = = ="));
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createElement("br"));
    }

    return div;
  }

  backpropogate (expected) {
    var store = [];
    var last = this.nodeLayer.length-1;
    var multiplyerAr = this.nodeLayer[last].getDerivativeCostNueronAr (expected);

    for(let i = this.nodeLayer.length-1; i >=1; i--) {
      var previousNuerons = this.nodeLayer[i-1].node.map (e => e.nueron);
      var previousWeights = this.weightLayer[i-1].weight;

      var derLayerBiases = this.nodeLayer[i].getDerivativeLayerBiases(previousNuerons, previousWeights, multiplyerAr);

      var derLayerWeights = this.nodeLayer[i].getDerivativeLayerWeights(previousNuerons, previousWeights, multiplyerAr);

      var derLayerPreviousNuerons = this.nodeLayer[i].getDerivativeLayerPreviousNuerons(previousNuerons, previousWeights, multiplyerAr);

      store.push({dB: derLayerBiases, dW: derLayerWeights, SdPn: derLayerPreviousNuerons});

      multiplyerAr = this.nodeLayer[i].getSumDerivativesPreviousNueron(previousNuerons, previousWeights, multiplyerAr);
    }

    store = this.reverseArray(store);

    for(let l = this.nodeLayer.length - 1; l > 0; l--) {
      var outputLength = this.nodeLayer[l].node.length;
      var inputLength = this.nodeLayer[l-1].node.length;

      for(let i = 0; i < outputLength; i++) {
        // check here for a future problem with weight adjustments not right
        this.nodeLayer[l].node[i].bias -= store[l-1].dB[i];
      }

      for(let o = 0; o < outputLength; o++) {
        for(let i = 0; i < inputLength; i++) {
          // check here for a future problem with weight adjustments not right
          this.weightLayer[l-1].weight[i][o] -= store[l-1].dW[i][o];
        }
      }

      if(l-1>0) {
        for(let i = 0; i < inputLength; i++) {
          // check here for a future problem with weight adjustments not right
          this.nodeLayer[l-1].node[i].nueron -= store[l-1].SdPn[i];
        }
      }
    }

  }

  reverseArray(ar) {
    var newArray = [];
    for(let i = ar.length-1; i >= 0; i--) {
      newArray.push(ar[i]);
    }
    return newArray;
  }

  propogate(input) {
    for(let i = 0; i < this.nodeLayer[0].node.length; i++) {
      this.nodeLayer[0].node[i].nueron = input[i];
    }
    for(let i = 1; i < this.nodeLayer.length; i++) {
      var pn = this.nodeLayer[i-1].node.map (e => e.nueron);
      var pw = this.weightLayer[i-1].weight;
      if(this.structure[i-1] == "s") {
        this.nodeLayer[i].changeLayerNueronsSigmoid(pn, pw);
      } else if(this.structure[i-1] == "r") {
        this.nodeLayer[i].changeLayerNueronsRelu(pn, pw);
      }

    }
  }

}
