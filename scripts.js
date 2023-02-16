// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeoffbutton = document.getElementById("takeoff");
    const flightStatusP = document.getElementById("flightStatus")
    const shuttleFlightScreen = document.getElementById("shuttleBackground")
    const shuttleHeightP = document.getElementById("spaceShuttleHeight")
    const landingButton = document.getElementById("landing")
    const abortMissionButton = document.getElementById("missionAbort")
    const rightButton = document.getElementById("right")
    const leftButton = document.getElementById("left")
    const upButton = document.getElementById("up")
    const downbutton = document.getElementById("down")
    const rocketImg = document.getElementById("rocket")
    
    //this is how i put my rocket on the bottom of the screen. They are almost like coordinates on a map 
    rocketImg.style.left = '5px'
    rocketImg.style.right = '35px'
    rocketImg.style.bottom= '35px'
    rocketImg.style.top = '250px'

    
    
    
   
    takeoffbutton.addEventListener("click", function(event) {
        if (window.confirm("Are you ready for takeoff")) {
          flightStatusP.innerHTML = "Shuttle in flight"
          shuttleFlightScreen.style.backgroundColor = "blue"
          shuttleHeightP.innerHTML = "10000 "
          //this is how i moved my rocket up 10px after i push the takeoff button 
          rocketImg.style.top = (parseInt(rocketImg.style.top) - 10)+ 'px';
        }
      });

      landingButton.addEventListener("click", function(event) {
        if (window.confirm("The shuttle is landing. Landing gear engaged.")) {
          flightStatusP.innerHTML = "Shuttle has landed"
          shuttleFlightScreen.style.backgroundColor = "green"
          shuttleHeightP.innerHTML = "0 "
          //i put this here so after i moved the rocket away from its base position it would return to its base position at the bottom of the screen 
          rocketImg.style.left = '5px'
           rocketImg.style.right = '35px'
           rocketImg.style.bottom= '35px'
           rocketImg.style.top = '250px'
        }
      });

      abortMissionButton.addEventListener("click", function(event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
          flightStatusP.innerHTML = "Mission aborted"
          shuttleFlightScreen.style.backgroundColor = "green"
          shuttleHeightP.innerHTML = "0 "

         //i put this here so after i moved the rocket away from its base position it would return to its base position at the bottom of the screen 
          rocketImg.style.left = '5px'
          rocketImg.style.right = '35px'
           rocketImg.style.bottom= '35px'
           rocketImg.style.top = '250px'
        }
      });

      upButton.addEventListener('click', function(event) {
        shuttleHeightP.innerHTML = parseInt(shuttleHeightP.innerHTML) + 10000; 
        //this is how i moved my rocket up the screen 
        rocketImg.style.top = (parseInt(rocketImg.style.top) - 10)+ 'px';
      });

      downbutton.addEventListener('click', function(event) {
        shuttleHeightP.innerHTML = parseInt(shuttleHeightP.innerHTML) - 10000; 
        //this is how i moved my rocket down the screen 
        rocketImg.style.top = (parseInt(rocketImg.style.top) + 10)+ 'px';
    
      });
      leftButton.addEventListener('click', function(event) {
        //this is how i moved my rocket to the left 
        rocketImg.style.left = (parseInt(rocketImg.style.left) - 10)+ 'px';
    });


    rightButton.addEventListener('click', function(event) {
        //this is how i moved my rocket to the right 
        rocketImg.style.left = (parseInt(rocketImg.style.left) + 10)+ 'px';
    });
}

window.addEventListener("load", init);