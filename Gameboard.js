import { Ship } from "./Ship";

export function Gameboard() {
  let shipsHere = [];
  return {
    placeShip(shipModel, ...coordies) {
      let ship = Ship(shipModel);
      let coordinates = coordies;
      // <-- register [{destroyer: 'A7'}, {anotherShip: 'coordinates'}, {etc...}];
      let obj = {};
      obj[ship.getName()] = coordinates;
      shipsHere.push(obj); // <-- store each {ship:coord} inside [shipsHere];
      // if (shipsHere.length < 1) shipsHere.push({});
      return { ship, coordinates, shipsHere };
    },
    shipsPls() {
      return shipsHere;
    },
    // receiveAttack(...coordinates) {
    //   if(shipsHere.some(e => e))
    // },
  };
}
