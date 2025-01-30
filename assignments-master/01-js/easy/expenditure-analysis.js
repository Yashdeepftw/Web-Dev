/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to hold the total price per category
  const categoryTotals = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category already exists in the object, add the price to the total
      if (categoryTotals[category]) {
          categoryTotals[category] += price;
      } else {
          // If the category doesn't exist, initialize the total with the current price
          categoryTotals[category] = price;
      }
  });

  // Convert the categoryTotals object into an array of objects
  return Object.keys(categoryTotals).map(category => ({
      category: category,
      totalSpent: categoryTotals[category]
  }));
}

// Example usage:

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656163200000, price: 15, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656249600000, price: 20, category: 'Entertainment', itemName: 'Movie Ticket' },
  { id: 4, timestamp: 1656336000000, price: 30, category: 'Food', itemName: 'Pasta' },
  { id: 5, timestamp: 1656422400000, price: 50, category: 'Entertainment', itemName: 'Concert Ticket' },
  { id: 6, timestamp: 1656508800000, price: 100, category: 'Travel', itemName: 'Flight Ticket' }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
