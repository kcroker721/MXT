$(document).ready(function() {
    // Function to get query parameters from the URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        const details = params.get('details');
        if (details) {
            try {
                return JSON.parse(decodeURIComponent(details));
            } catch (e) {
                console.error('Error parsing query parameters:', e);
                return {};
            }
        }
        return {};
    }

    // Function to render drink details on the page
    function renderDrinkDetails(drink) {
        const detailsContainer = $('#drinkDetailsContainer');
        detailsContainer.empty();

        if (!drink || !drink.name) {
            detailsContainer.append('<p>No drink details found.</p>');
            return;
        }

        const drinkElement = `
            <div class="drink-detail">
                <h2>${drink.name}</h2>
                <p><strong>Alcoholic Ingredients:</strong> ${drink.alcoholicIngredients ? drink.alcoholicIngredients.join(', ') : 'None'}</p>
                <p><strong>Instructions:</strong> ${drink.instructions || 'No instructions available'}</p>
            </div>
        `;
        detailsContainer.append(drinkElement);
    }

    // Get drink details from URL parameters
    const { drink } = getQueryParams();
    console.log('Parsed Query Params:', drink); // Log parsed query parameters

    // Render drink details
    renderDrinkDetails(drink);
});






/*

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
            <h3>Instructions:</h3>
            <p>${cocktailInstructions}</p>
        `;

        drinkDetailsContainer.appendChild(cocktailElement);
    });
}

// Display the drink details including ingredients
displayDrinkDetails(drinkDetails);

*/