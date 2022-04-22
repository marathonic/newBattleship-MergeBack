export function Ship(shipType) {
  let hits = 0;
  let length;
  let type = shipType;
  let previouslyHit = [];
  let shipName;
  // let previouslyHit = {
  //   [shipType]: [],
  // };
  switch (shipType) {
    case "destroyer":
      length = 1;
      shipName = "destroyer";
      break;

    case "submarine":
      length = 2;
      shipName = "submarine";
      break;

    case "cruiser":
      length = 3;
      shipName = "cruiser";
      break;

    case "battleship":
      length = 4;
      shipName = "battleship";
      break;

    case "carrier":
      length = 5;
      shipName = "carrier";
      break;

    default:
      break;
  }
  return {
    getLength() {
      return length;
    },
    hit(position) {
      if (previouslyHit.includes(position)) return false;
      //<-- why would we need to know where it's been attacked before?
      // We should handle the 'cannot attack spot twice' functionality from the board
      hits++;
      length--;
      previouslyHit.push(position); //<- where has this ship been hit before?
      return true;
      // return `${position} added to previouslyHit array`;
    },
    isSunk() {
      hits >= length ? true : false;
    },
    getName() {
      return shipName;
    },
  };
}
