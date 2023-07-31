class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Appartment {
  persons = [];

  addPersonInApp(newPerson) {
    this.persons.push(new Person(newPerson.name, newPerson.gender));
  }
}

class House {

  appartments = [];

  constructor(maxAppQuontity) {
    this.maxNumberOfAppartments = maxAppQuontity;
  }

  addAppartments(app) {
    if (this.appartments.length < this.maxNumberOfAppartments) {
      this.appartments.push(app);
    } else {
      console.log("перевищенно ліміт макс кількості квартир")
    }
    return this;
  }
}

personFisrt = new Person('Anna', 'female');
personSecond = new Person('Tanya', 'female');
personThird = new Person('Oleg', 'male');
personFourth = new Person('Semen', 'male');

appFirst = new Appartment();
appSecond = new Appartment();
appThird = new Appartment();

appFirst.addPersonInApp(personFisrt);
appFirst.addPersonInApp(personSecond);
appSecond.addPersonInApp(personThird);
appThird.addPersonInApp(personFourth);

house = new House(10);
house.addAppartments(appThird).addAppartments(appSecond).addAppartments(
    appFirst);
console.log(house);

houseSecond = new House(2);
houseSecond.addAppartments(appThird).addAppartments(appSecond).addAppartments(
    appFirst);
console.log(houseSecond);