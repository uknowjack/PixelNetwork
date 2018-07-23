<!DOCTYPE html>
<html lang = "en-us">

<?php include '../includes/head.php'; ?>

<body>

  <div class= "container">

    <header id = "header">

        <div id = "logoDiv">

          &nbsp;Wirking<b>Title</b>

        </div> <!-- end logoDiv -->

        <div id = "rightHeaderDiv">
          <!-- get outta here -->

          <!-- <form name="logout" id = "logout" method="post" action="../actions/logOut.php">
            <button id = "logOutButton" class="goButton">
              Log Out
            </button>
          </form> -->

        </div>

    </header>

    <main>

      <div id = "title">
        </br>
        Pixel Pattern Identification Network
      </div>
      </br>

      <div id = "inputDiv">
        Make your Input

        <div id = "inputCreater">
          <div id = "topLeftInput" class = "input"></div>
          <div id = "topRightInput" class = "input"></div>
          <div id = "bottomLeftInput" class = "input"></div>
          <div id = "bottomRightInput" class = "input"></div>
        </div>

        <!-- <div>
          <div>
            Choose your cost identifyer
          </div>
          </br>
          <input type = "radio" name = "pattern" id = "solid">Solid</input></br>
          <input type = "radio" name = "pattern" id = "vertical">Vertical</input></br>
          <input type = "radio" name = "pattern" id = "horizontal">Horizontal</input></br>
          <input type = "radio" name = "pattern" id = "diagonal">Diagonal</input></br>
          <input type = "radio" name = "pattern" id = "dot">Dot</input></br>
          </br>
        </div> -->

        <div id = "process">
          Propagate
        </div>

        </br>

        <div>
          Top Left pixel is the first Node's Nueron
          </br>
          Top Right pixel is the second Node's Nueron
          </br>
          Bottom Left pixel is the third Node's Nueron
          </br>
          Bottom Right pixel is the fourth Node's Nueron
          </br></br>
          Black is -1, and White is 1
        </div>

      </div>

      <div id = "networkDisplay"></div>

      <div id = "outputDiv">
        </br>
        The first Node's Nueron correlates to a solid configuration
        </br>
        The second Node's Nueron correlates to a vertical configuration
        </br>
        The third Node's Nueron correlates to a horizontal configuration
        </br>
        The fourth Node's Nueron correlates to a diagonal configuration
        </br>
        The fifth Node's Nueron correlates to dot configuration
        </br></br>

        <!-- <div id = "finalResults">
          <div id = "trainingInstanceResults"></div>
          <div id = "decisionStatement"></div>
        </div> -->

      </div>

    </main>

    <footer>
      <?php include '../includes/footer.php'; ?>

      <div class="legalText" id = "copyright">
        <br/>
        WirkingTitle &copy; 2018
      </div>
    </footer>

  </div> <!-- end container -->

  <script src = "../Javascript/Functionality/footer.js"></script>
  <script src = "../Javascript/Functionality/inputCreation.js"></script>
  <script src = "../Javascript/Classes/Node.js"></script>
  <script src = "../Javascript/Classes/NodeLayer.js"></script>
  <script src = "../Javascript/Classes/WeightLayer.js"></script>
  <script src = "../Javascript/Classes/NueralNetwork.js"></script>
  <script src = "../Javascript/Functionality/networkHandler.js"></script>
  <script src = "../Javascript/Functionality/outputDisplay.js"></script>

</body>

</html>
