class WeightLayer {

  constructor(inputNodes, outputNodes) {

    var w2d = [];
    for(let i = 0; i < inputNodes; i++) {
        var w1d = [];
        for(let o = 0; o < outputNodes; o++) {
          w1d.push(0);
          // w1d.push(Math.random()*2-1);
        }
        w2d.push(w1d);
    }
   this.weight = w2d;

  } // end constructor

  displayWeightLayerContents() {
    var div = document.createElement("div");
    var numInputs = this.weight.length;
    var numOutputs = this.weight[0].length;

    var t = document.createElement("table");
    // t.setAttribute("border", "1");

    var r = document.createElement("tr");
    var c = document.createElement("td");
    c.appendChild(document.createTextNode(""));
    r.appendChild(c);

    var c = document.createElement("td");
    c.appendChild(document.createTextNode(""));
    r.appendChild(c);

    var c = document.createElement("td");
    c.setAttribute("colspan", numInputs);
    c.setAttribute("align", "center");
    c.appendChild(document.createTextNode("Inputs"));
    c.style.height = '40px';
    r.appendChild(c);

    t.appendChild(r);

    var r = document.createElement("tr");
    var c = document.createElement("td");
    c.appendChild(document.createTextNode(""));
    r.appendChild(c);

    var c = document.createElement("td");
    c.appendChild(document.createTextNode(""));
    r.appendChild(c);

    for(let i = 0; i < numInputs; i++) {
      var c = document.createElement("td");
      c.setAttribute("align", "center");
      c.appendChild(document.createTextNode(i));
      r.appendChild(c);
    }

    t.appendChild(r);

    var r = document.createElement("tr");
    var c = document.createElement("td");
    c.setAttribute("rowspan", numOutputs+1);
    c.appendChild(document.createTextNode("Outputs"));

    r.appendChild(c);
    t.appendChild(r);

    for(let o = 0; o < numOutputs; o++) {

      var r = document.createElement("tr");

      for(let i = -2; i < this.weight.length; i++) {

        if(i == -2) {

        } else if(i == -1) {
          var c = document.createElement("td");
          c.setAttribute("align", "center");
          c.appendChild(document.createTextNode(o));
          r.appendChild(c);
        } else {
          var c = document.createElement("td");
          c.setAttribute("align", "center");
          c.appendChild(document.createTextNode(this.weight[i][o]));
          c.style.color = "white";
          c.style.width = "20px";
          c.style.height = "15px";

          if(this.weight[i][o] == 0) {

            c.style.backgroundColor = "rgb(127, 127, 127)";

          } else if(this.weight[i][o] > 0) {

            var redGreenValue = Math.floor(127 - this.weight[i][o]*127);
            c.style.backgroundColor = "rgb("+redGreenValue+", "+redGreenValue+", 150)";

          } else if(this.weight[i][o] < 0) {

            var greenBlueValue = Math.floor(127 - this.weight[i][o]*-127);
            c.style.backgroundColor = "rgb(150, "+greenBlueValue+", "+greenBlueValue+")";

          }

          r.appendChild(c);
        }
      }
      t.appendChild(r);
    }

    div.appendChild(t);

    return div;

  }

  setWeightLayer(TDA) {
    this.weight = TDA;
  }

}
