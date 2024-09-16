const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to fetch drink details from the custom API
async function fetchDrinkDetails() {
    const apiUrl = 'http://localhost:3000/cocktails'; // URL to fetch cocktails from your local API
    try {
        const response = await axios.get(apiUrl);
        return response.data; // Assuming `response.data` is an array of drinks
    } catch (error) {
        console.error('Error fetching drink details:', error);
        return [];
    }
}

// Helper function to generate all possible subsets of an array
function generateSubsets(arr) {
    const subsets = [];
    for (let i = 0; i < (1 << arr.length); i++) {
        const subset = [];
        for (let j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                subset.push(arr[j]);
            }
        }
        if (subset.length > 0) {
            subsets.push(subset);
        }
    }
    return subsets;
}

// Function to filter drinks based on all combinations of the provided ingredients
async function filterDrinksByIngredients(ingredients) {
    const drinks = await fetchDrinkDetails();
    const lowerCaseIngredients = ingredients.map(ingredient => ingredient.trim().toLowerCase());

    function containsOnlySpecifiedIngredients(drinkIngredients, queryIngredients) {
        const lowerCaseDrinkIngredients = new Set(drinkIngredients.map(i => i.toLowerCase()));
        return queryIngredients.every(ingredient => lowerCaseDrinkIngredients.has(ingredient)) &&
               lowerCaseDrinkIngredients.size === queryIngredients.length;
    }

    const allCombinations = generateSubsets(lowerCaseIngredients);
    const results = [];

    for (const subset of allCombinations) {
        const matchedDrinks = drinks.filter(drink => {
            const drinkIngredients = drink.alcoholicIngredients || [];
            return containsOnlySpecifiedIngredients(drinkIngredients, subset);
        });
        results.push(...matchedDrinks);
    }

    return results;
}

// Function to handle user input and output results
async function handleInput(input) {
    const ingredients = input.split(',').map(ingredient => ingredient.trim()).filter(Boolean);
    if (ingredients.length === 0) {
        console.log('No ingredients provided.');
        return;
    }

    const results = await filterDrinksByIngredients(ingredients);
    if (results.length > 0) {
        console.log('Filtered Drinks:');
        results.forEach(drink => {
            console.log(`- ${drink.name}: ${drink.alcoholicIngredients.join(', ')}`);
        });
    } else {
        console.log('No drinks found with the specified combinations of ingredients.');
    }
}

// Prompt the user for ingredients
rl.question('Enter ingredients separated by commas: ', (input) => {
    handleInput(input);
    rl.close();
});
