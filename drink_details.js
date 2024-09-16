// Function to parse URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the drink details from the URL
const drinkDetailsJson = getUrlParameter("details");
const drinkDetails = JSON.parse(decodeURIComponent(drinkDetailsJson));

// Function to display drink details including ingredients
function displayDrinkDetails(details) {
    const drinkDetailsContainer = document.getElementById("drink-details");
    const ingredientsListContainer = document.getElementById("ingredients-list"); // Get the ingredients list div

    if (!details.drinks || details.drinks.length === 0) {
        drinkDetailsContainer.innerHTML = "<p>Drink details not found.</p>";
        return;
    }

    details.drinks.forEach(function(cocktail) {
        const cocktailPicture = cocktail.picture;
        const cocktailName = cocktail.name;
        const cocktailInstructions = cocktail.instructions;

        // Generate HTML for the alcoholic and non-alcoholic ingredient lists
        const alcoholicIngredientsHtml = cocktail.alcoholicIngredients.map(item => `<p>${item}</p>`).join("");
        const nonAlcoholicIngredientsHtml = cocktail.nonAlcoholicIngredients.map(item => `<p>${item}</p>`).join("");

        // Example: Display the cocktail name, ingredient list, and instructions
        const cocktailElement = document.createElement("div");
        cocktailElement.innerHTML = `
            <h2>${cocktailName}</h2>
            <h3>Alcoholic Ingredients:</h3>
            ${alcoholicIngredientsHtml}
            <h3>Non-Alcoholic Ingredients:</h3>
            ${nonAlcoholicIngredientsHtml}
            <h3>Instructions:</h3>
            <p>${cocktailInstructions}</p>
        `;

        drinkDetailsContainer.appendChild(cocktailElement);
    });
}

// Display the drink details including ingredients
displayDrinkDetails(drinkDetails);
