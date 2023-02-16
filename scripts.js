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
    rocketImg.style.left = '35px'
    
   
    takeoffbutton.addEventListener("click", function(event) {
        if (window.confirm("Are you ready for takeoff")) {
          flightStatusP.innerHTML = "Shuttle in flight"
          shuttleFlightScreen.style.backgroundColor = "blue"
          shuttleHeightP.innerHTML = "10000 "
        }
      });

      landingButton.addEventListener("click", function(event) {
        if (window.confirm("The shuttle is landing. Landing gear engaged.")) {
          flightStatusP.innerHTML = "Shuttle has landed"
          shuttleFlightScreen.style.backgroundColor = "green"
          shuttleHeightP.innerHTML = "0 "
        }
      });

      abortMissionButton.addEventListener("click", function(event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
          flightStatusP.innerHTML = "Mission aborted"
          shuttleFlightScreen.style.backgroundColor = "green"
          shuttleHeightP.innerHTML = "0 "
        }
      });

      upButton.addEventListener('click', function(event) {
        shuttleHeightP.innerHTML = parseInt(shuttleHeightP.innerHTML) + 10000; 
      });

      downbutton.addEventListener('click', function(event) {
        shuttleHeightP.innerHTML = parseInt(shuttleHeightP.innerHTML) - 10000; 
        rocketImg.style.left = (parseInt(rocketImg.style.left) + 10)+ 'px';
    
      });
}

window.addEventListener("load", init);