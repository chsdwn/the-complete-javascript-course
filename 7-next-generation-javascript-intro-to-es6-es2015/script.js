class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Street extends TownElement {
  constructor(name, buildYear, size = 0, classification = 'normal') {
    super(name, buildYear);
    this.size = size;
  }

  calculateClassification() {
    if (this.size !== 0) {
      if (this.size <= 1) {
        this.classification = 'tiny';
      } else if (this.size > 1 && this.size <= 2) {
        this.classification = 'small';
      } else if (this.size > 2 && this.size <= 3) {
        this.classification = 'big';
      } else if (this.size > 3 && this.size <= 4) {
        this.classification = 'huge';
      }
    } else {
      this.classification = 'normal';
    }

    return this.classification;
  }
}

class Park extends TownElement {
  constructor(name, buildYear, numberOfTrees, area) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }

  calculateTreeDensity() {
    return this.numberOfTrees/this.area;
  }

  calculateAge() {
    return new Date().getFullYear() - this.buildYear;
  }
}

const ocean = new Street('Ocean Avenue', 1999, 2.4);
const evergreen = new Street('Evergreen Street', 2008, 1.2);
const fourth = new Street('4th Street', 2015);
const sunset = new Street('Sunset Boulevard', 1982, 3.7);

const green = new Park('Green Park', 1918, 950, 2);
const national = new Park('National Park', 1982, 1200, 3);
const oak = new Park('Oak Park', 1957, 725, 1);

const streets = [ocean, evergreen, fourth, sunset];
const parks = [green, national, oak];

calculateTotalAndAverageLengthOfStreets = (...streets) => {
  let total = 0;

  for (const street of streets) {
    total += street.size;
  }

  const average = total / streets.length;

  return [total, average];
}

calculateParksAverageAge = (...parks) => {
  let total = 0;

  for (const park of parks) {
    total += park.calculateAge();
  }

  return total / parks.length;
}

findParksMoreThanAThousandTrees = (...parks) => {
  let result = [];

  for (const park of parks) {
    if (park.numberOfTrees > 1000) {
      result.push(park.name);
    }
  }

  return result;
}

console.log('---Parks Report---');
console.log(`Our ${parks.length} parks have an average age 
  of ${calculateParksAverageAge(...parks)} years`);

for (const park of parks) {
  console.log(`${park.name} has a tree density of 
    ${park.calculateTreeDensity()} trees per square km.`);
}

console.log(`${findParksMoreThanAThousandTrees(...parks)} has more than 1000 trees.`);

const averageTotalLength = calculateTotalAndAverageLengthOfStreets(...streets);
console.log('---Streets Report---');
console.log(`Our ${streets.length} streets have a total length of ${averageTotalLength[0]}
  km with an average of ${averageTotalLength[1]} km.`);

for (const street of streets) {
  console.log(`${street.name}, built in ${street.buildYear}, is a ${street.calculateClassification()} street.`)
}