const getCoffeeList1 = (newCoffee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newCoffee);
    });
  });
};
const getCoffeeList2 = (prevCoffeeList, newCoffee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prevCoffeeList + ", " + newCoffee);
    }, 500);
  });
};

async function main() {
  let coffeeList = await getCoffeeList1("Americano");
  coffeeList = await getCoffeeList2(coffeeList, "Latte");
  coffeeList = await getCoffeeList2(coffeeList, "Mocha");

  console.log(coffeeList);

  return coffeeList;
}

main();
