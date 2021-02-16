const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const houseChosen = houses[Math.floor(Math.random() * houses.length)];
  return houseChosen;
};

export default sortingHat;
