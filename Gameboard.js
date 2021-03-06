import { Ship } from "./Ship";

export function Gameboard() {
  let shipsHere = [];
  let ship;
  return {
    placeShip(shipModel, ...coordies) {
      ship = Ship(shipModel);
      let coordinates = coordies;
      // <-- register [{destroyer: 'A7'}, {anotherShip: 'coordinates'}, {etc...}];
      let obj = {};
      obj.ship = ship.getName();
      obj.positions = coordinates;
      shipsHere.push(obj); // <-- store each {ship:coord} inside [shipsHere];
      // if (shipsHere.length < 1) shipsHere.push({});
      return { ship, coordinates, shipsHere };
    },
    shipsPls() {
      return shipsHere;
    },
    receiveAttack(coordinates) {
      try {
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          if (ship.hit(coordinates)) return ship.getLength();
        } else {
          return false;
        }
      } catch (err) {
        return err;
      }
    },
  };
}
