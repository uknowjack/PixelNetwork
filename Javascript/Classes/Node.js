class Node {
  constructor (previousNuerons, connectingWeights, input) {
    this.bias = 0;

    if (input != undefined) {
      this.nueron = input;
    } else {
      this.createSigmoidNueronValue(previousNuerons, connectingWeights, this.bias);
    }

  } // end constructor

  createSigmoidNueronValue(previousNuerons, previousConnectingWeights) {
    this.nueron = this.sigmoid(previousNuerons, previousConnectingWeights, this.bias);
  }

  getSum(pn, w, b) {
    if(pn != undefined && w != undefined) {
      var sum = b;
      for(let i = 0; i < pn.length; i++) {
        sum += (pn[i]*w[i])
      }
      return sum;
    } else {
      return "N/A"
    }
  }

  sigmoid(pn, w, b) {
    var sum = this.getSum(pn, w, b);
    return Math.tanh(sum);
  }

  createReluNueronValue(previousNuerons, previousConnectingWeights) {
    this.nueron = this.ReLU(previousNuerons, previousConnectingWeights, this.bias);
  }

  ReLU(pn, w, b) {
    var sum = this.getSum(pn, w, b);
    if(sum < 0) {
      return 0;
    } else {
      return sum;
    }
  }

  getDerivativeCostNueron(expected) {
    return 2*(this.nueron-expected);
  }

  getDerivativeNueronSigmoid(previousNuerons, connectingWeights) {
    var sum = this.getSum(previousNuerons, connectingWeights, this.bias);
    return 1-(Math.tanh(sum))**2;
  }

  getChainedDerivativeBias (previousNuerons, previousWeights, multiplyer) {
    return this.getDerivativeNueronSigmoid(previousNuerons, previousWeights)*multiplyer;
  }

  getChainedDerivativeWeight (previousNueron, previousWeight, multiplyer, i) {
    return previousNueron[i]*this.getDerivativeNueronSigmoid(previousNueron, previousWeight)*multiplyer;
  }

  getChainedDerivativePreviousNueron (previousNuerons, previousWeight, multiplyer, i) {
    return previousWeight[i]*this.getDerivativeNueronSigmoid(previousNuerons, previousWeight)*multiplyer;
  }

  setBias(n) {
    this.bias = n;
  }

  displayNodeDerivatives (previousNuerons, connectingWeights, multiplyer) {

    var div = document.createElement("div");

    var t = document.createElement("table");
    var r = document.createElement("tr");
    var c = document.createElement("td");
    c.setAttribute("colspan", "2");
    c.appendChild(document.createTextNode("dC/dB: "+this.getChainedDerivativeBias(previousNuerons, connectingWeights, multiplyer)));
    r.appendChild(c);
    t.appendChild(r);

    var r = document.createElement("tr");

    for(let i = 0; i < 3; i++) {
      var c = document.createElement("td");
      let text = "";
      switch(i) {
        case 0: text = "Previous Node";
        break;
        case 1: text = "dC/dPn";
        break;
        case 2: text = "dC/dW";
        break;
      }
      c.appendChild(document.createTextNode(text));
      r.appendChild(c);
    }

    t.appendChild(r);

    for(let i = 0; i < previousNuerons.length; i++) {
      var r = document.createElement("tr");

      var c = document.createElement("td");
      c.appendChild(document.createTextNode(i));
      r.appendChild(c);

      var c = document.createElement("td");

      c.appendChild(document.createTextNode(this.getChainedDerivativePreviousNueron(previousNuerons, connectingWeights, multiplyer, i)));
      r.appendChild(c);

      var c = document.createElement("td");

      c.appendChild(document.createTextNode(this.getChainedDerivativeWeight(previousNuerons, connectingWeights, multiplyer, i)));
      r.appendChild(c);
      t.appendChild(r);
    }

    div.appendChild(t);
    div.appendChild(document.createElement("br"));
    return div;
  }

}
