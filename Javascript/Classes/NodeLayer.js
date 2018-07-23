class NodeLayer {
  constructor(previousNuerons, previousWeights, numNodes, inputs) {

    if (inputs != undefined) {

      var n = [];
      for(let i = 0; i < inputs.length; i++) {
        n.push(new Node(0, 0, inputs[i]));
      }

      this.node = n;

    } else {

      var n = [];
      for(let o = 0; o < numNodes; o++) {
        var previousConnectingWeights = previousWeights.map (e => e[o]);
        n.push(new Node(previousNuerons, previousConnectingWeights));
      }

      this.node = n;

    }

  } // end constructor

  displayNodeLayerContents(pn, w) {
    var div = document.createElement("div");
    var t = document.createElement("table");
    var r = document.createElement("tr");

    for(let i = 0; i < 4; i++) {
      var c = document.createElement("td");
      let text = "";
      switch(i) {
        case 0: text = "Node";
        break;
        case 1: text = "Sum";
        break;
        case 2: text = "Bias";
        break;
        case 3: text = "Nueron";
        break;
      }
      c.appendChild(document.createTextNode(text));
      r.appendChild(c);
    }

    t.appendChild(r);

    for(let i = 0; i < this.node.length; i++) {
      var r = document.createElement("tr");

      var c = document.createElement("td");

      c.appendChild(document.createTextNode(i));
      r.appendChild(c);

      var c = document.createElement("td");
      var pw = w.map (e => e[i]);
      var sum = this.node[i].getSum(pn, pw, this.node[i].bias) - this.node[i].bias;

      c.appendChild(document.createTextNode(sum));
      r.appendChild(c);

      var c = document.createElement("td");
      c.appendChild(document.createTextNode(this.node[i].bias));
      r.appendChild(c);

      var c = document.createElement("td");
      c.appendChild(document.createTextNode(this.node[i].nueron));
      r.appendChild(c);
      t.appendChild(r);
    }

    div.appendChild(t);
    return div;
  }

  displayLayerDerivatives (previousNuerons, previousWeights, multiplyerAr) {
    var div = document.createElement("div");
    for (let i = 0; i < this.node.length; i++) {
      div.appendChild(document.createTextNode("Node: "+i));
      var connectingWeights = previousWeights.map (e => e[i]);
      div.appendChild(this.node[i].displayNodeDerivatives(previousNuerons, connectingWeights, multiplyerAr[i]));
    }
    return div;
  }

  getDerivativeCostNueronAr (expected) {
    var ar = [];
    for(let i = 0; i < this.node.length; i++) {
      ar.push(this.node[i].getDerivativeCostNueron(expected[i]));
    }
    return ar;
  }

  getSumDerivativesPreviousNueron (previousNuerons, previousWeights, multiplyerAr) {
    var ar = [];
    for (let i = 0; i < previousNuerons.length; i++) {
      var sum = 0;
      for (let o = 0; o <this.node.length; o++) {
        var connectingWeights = previousWeights.map (e => e[o]);
        sum += this.node[o].getChainedDerivativePreviousNueron(previousNuerons, connectingWeights, multiplyerAr[o], i);
      }
      ar.push(sum);
    }
    return ar;
  }

  getDerivativeLayerBiases (previousNuerons, previousWeights, multiplyer) {
    var derOfCostBias = [];
    for(let i = 0; i < this.node.length; i++){
      var previousConnectingWeights = previousWeights.map (e => e[i]);
      derOfCostBias.push(this.node[i].getChainedDerivativeBias(previousNuerons, previousConnectingWeights, multiplyer[i]));
    }
    return derOfCostBias;
  }

  getDerivativeLayerWeights (previousNuerons, previousWeights, multiplyerAr) {
    var derOfCostWeight = [];
    for(let i = 0; i < previousNuerons.length; i++) {
    var secondDeminsion = [];
      for(let o = 0; o < this.node.length; o++) {
        var previousConnectingWeights = previousWeights.map (e => e[o]);
        secondDeminsion.push(this.node[o].getChainedDerivativeWeight(previousNuerons, previousConnectingWeights, multiplyerAr[o], i));
      }
      derOfCostWeight.push(secondDeminsion);
    }
    return derOfCostWeight;
  }

  getDerivativeLayerPreviousNuerons(previousNuerons, previousWeights, multiplyerAr) {
    var derOfCostPreviousNode = [];
    for(let i = 0; i < previousNuerons.length; i++) {
      derOfCostPreviousNode.push(0);
    }
    for(let o = 0; o < this.node.length; o++) {
      var previousConnectingWeights = previousWeights.map (e => e[o]);
      for(let i = 0; i < previousNuerons.length; i++) {
        derOfCostPreviousNode[o] += this.node[o].getChainedDerivativePreviousNueron(previousNuerons, previousConnectingWeights, multiplyerAr[i], i);
      }
    }
    return derOfCostPreviousNode;
  }

  changeLayerNueronsSigmoid(previousNuerons, previousWeights) {
    for(let o = 0; o < this.node.length; o++) {
      var previousConnectingWeights = previousWeights.map (e => e[o]);
      this.node[o].createSigmoidNueronValue(previousNuerons, previousConnectingWeights);
    }
  }

  changeLayerNueronsRelu(previousNuerons, previousWeights) {
    for(let o = 0; o < this.node.length; o++) {
      var previousConnectingWeights = previousWeights.map (e => e[o]);
      this.node[o].createReluNueronValue(previousNuerons, previousConnectingWeights);
    }
  }

  setBiases(ar) {
    for(let o = 0; o < this.node.length; o++) {
      this.node[o].setBias(ar[o]);
    }
  }

}
