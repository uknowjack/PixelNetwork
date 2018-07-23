<nav>
  <div id= "bottomNavBox">
    <div id="AboutButton" name="AboutButton" class="navButton">
      <i class="material-icons" style="font-size: 32px;">subject</i>
      &nbsp; About
    </div>
    <div id="FAQButton" name="FAQButton" class="navButton">
      <i class="material-icons" style="font-size: 32px;">help</i>
      &nbsp; FAQ
    </div>
    <div id="SettingsButton" name="SettingsButton" class="navButton">
      <i class="material-icons" style="font-size: 32px;">settings</i>
      &nbsp; Settings
    </div>
    <div id="ContactButton" class="navButton">
      <i class="material-icons" style="font-size: 32px;">email</i>
      &nbsp; Contact Us
    </div>
    <br/>
  </div>

  <div id="informationDiv">

    <div id="aboutDiv">

      <h2><p>About Us</p></h2>

      <p>WirkingTitle is a platform that shows the inner workings of concepts like nueral networks and genetic algorithms to help programmers get a better grasp of these concepts.</p>
    </div>

    <div id="FAQDiv">

      <h2><p>Frequently Asked Questions</p></h2>

      <!--                        see javascript-->

    </div>

    <div id="settingsDiv">

      <h2><p>Settings</p></h2>

      <table id="settingsTable" min-width="200px" cellpadding="5px">
        <!--                            See javascript-->
      </table>

    </div>

    <div id="contactUsDiv">

      <h2><p>Contact Us</p></h2>

      <form name="emailForm" id="emailForm" method="post" action="contact-proc.php">

        <table>

          <tr>
            <td>
              <input type="text" name="psuedoname" id="psuedoname" placeholder="Name">
            </td>
          </tr>

          <tr>
            <td>
              <input type="CUemail" name="CUemail" id="CUemail" placeholder="Email">
            </td>
          </tr>

          <tr>
            <td>
              <textarea name="message" id="message" cols="40" rows="8" placeholder="Enter your message here"></textarea>
            </td>
          </tr>

          <tr>
            <td>
              <input class="goButton" type="submit" name="submit" id="submit" value="Send Message">
            </td>
          </tr>

        </table>

      </form>

    </div>
    <br/>

  </div>
</nav>
