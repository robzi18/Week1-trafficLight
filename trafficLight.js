"use strict";

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
    while (cycle < 2) {
        const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
        console.log("The traffic light is on", currentState);
        if(currentState == "green"){
            trafficLight.stateIndex++
            continue;
        }
        else if(currentState == "orange"){
            trafficLight.stateIndex++
            continue;``
        }
        else if(currentState == "red"){
            console.log("stateindex => ",trafficLight.stateIndex," cycle => ",cycle)
            trafficLight.stateIndex = 0 
            
        }
        // TODO
        // if the color is green, turn it orange
        // if the color is orange, turn it red
        // if the color is red, add 1 to cycles and turn it green
        cycle++
    }
 