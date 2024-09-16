$(document).ready(function() {
    // Function to search for a cocktail by name
    function searchCocktailByName(cocktailName) {
        const apiUrl = `http://localhost:3000/cocktails/${cocktailName}`;
        
        // Make the API request
        $.get(apiUrl, function(data) {
            // Handle the API response by redirecting to the drink details page
            redirectToDrinkDetails(data);
        });
    }

    // Function to redirect to the drink details page
    function redirectToDrinkDetails(data) {
        // Encode the drink details as a JSON string and pass it as a URL parameter
        const drinkDetails = JSON.stringify(data);
        window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
    }

    // Function to search for cocktails by ingredients
    function searchCocktailsByIngredients(ingredients) {
        // Split the ingredients by commas and trim whitespace
        const ingredientArray = ingredients.split(',').map(ing => ing.trim());

        // Make an API request to your local API
        $.get('http://localhost:3000/cocktails', function(data) {
            // Filter cocktails based on the provided ingredients
            const filteredCocktails = data.filter(cocktail => {
                // Check if all alcoholic ingredients match
                return ingredientArray.every(ingredient => {
                    // Check if ingredient is in the list of alcoholic ingredients
                    return cocktail.alcoholicIngredients.includes(ingredient);
                });
            });

            // Redirect to drink details page with filtered cocktails
            const drinkDetails = JSON.stringify({ drinks: filteredCocktails });
            window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
        });
    }

    // Search button click event
    $(".searchButton").click(function() {
        const cocktailName = $(".searchInput").val();
        searchCocktailByName(cocktailName);
    });

    // Listen for Enter key press on the input field
    $(".searchInput").keypress(function(event) {
        if (event.keyCode === 13) { // 13 is the key code for Enter key
            const cocktailName = $(this).val();
            searchCocktailByName(cocktailName);
        }
    });

    // Search button click event for searching by ingredients
    $("#searchButton2").click(function() {
        const ingredients = $("#searchInput2").val();
        searchCocktailsByIngredients(ingredients);
    });

    // Listen for Enter key press on the second input field
    $("#searchInput2").keypress(function(event) {
        if (event.keyCode === 13) {
            const ingredients = $(this).val();
            searchCocktailsByIngredients(ingredients);
        }
    });
});
