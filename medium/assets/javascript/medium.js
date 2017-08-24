/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    let teamoneShootButton = $("#teamone-shoot");
    let teamoneNumShots = $("#teamone-numshots");
    let teamoneNumHits = $("#teamone-numhits");

    let resetButton = $("#reset");
    let numResets = $("#num-resets");

    let teamtwoShootButton = $("#teamtwo-shoot");
    let teamtwoNumShots = $("#teamtwo-numshots");
    let teamtwoNumHits = $("#teamtwo-numhits");
    $('body').css({ 'color': 'white'});
    $('body').css('background-color', 'gray');


    //Team One Shoot-------------------
    teamoneShootButton.click(function() {
      console.log("teamoneShootButton clicked");

      let score = parseInt(teamoneNumShots.html()) + 1
      teamoneNumShots.html(score)

      let randomNumber1 = Math.random();
      console.log(randomNumber1);
      if(randomNumber1 > .90) {
        let potato = parseInt(teamoneNumHits.html()) + 1
        teamoneNumHits.html(potato)
        $('body').css('background-color', 'red');
      }
    })

    //Team Two Shoot-------------------

      teamtwoShootButton.click(function() {
        console.log("teamtwoShootButton clicked");

        let score = parseInt(teamtwoNumShots.html()) + 1
        teamtwoNumShots.html(score);

          let randomNumber2 = Math.random();
            console.log(randomNumber2);
            if(randomNumber2 > .90){
              let potato = parseInt(teamtwoNumHits.html()) + 1
              teamtwoNumHits.html(potato)
              $('body').css('background-color', 'black');
            }
          }
        )

    //Reset Button-------------------

      resetButton.click(function() {
        console.log("resetButton clicked");
        let newnumResets = parseInt(numResets.html())+1;
        numResets.html(newnumResets);
        var clearValues = 0;
        teamoneNumShots.html(clearValues);
        teamtwoNumShots.html(clearValues);
        teamoneNumHits.html(clearValues);
        teamtwoNumHits.html(clearValues);
        $('body').css('background-color', 'gray');
      })


    // var count = parseInt(numReset.html())+1
    // numReset.html(count);
    // $("body").css({
    //   backgroundColor: "white";
    // })



  })

})();
