$(document).ready(function() {
    // Function to fetch drink details by name from the API
    async function fetchDrinkByName(name) {
        const apiUrl = `http://localhost:3000/cocktails/${encodeURIComponent(name)}`;
        try {
            const response = await $.get(apiUrl);
            console.log('API Response:', response); // Log the API response for debugging
            return response; // Return the fetched drink details
        } catch (error) {
            console.error('Error fetching drink details:', error);
            return null;
        }
    }

    // Function to redirect to the drink details page with results
    function redirectToDrinkDetailsPage(drink) {
        if (drink && drink.name) {
            const drinkDetails = JSON.stringify({ drink });
            console.log('Redirecting with details:', drinkDetails); // Log the details being passed
            window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
        } else {
            alert('No drink found with that name.');
        }
    }

    // Search button click event for searching by drink name
    $(".searchButton").click(async function() {
        const drinkName = $(".searchInput").val().trim();
        if (drinkName) {
            const drink = await fetchDrinkByName(drinkName);
            redirectToDrinkDetailsPage(drink);
        } else {
            alert('Please enter a drink name.');
        }
    });

    // Listen for Enter key press on the search input field for drink name
    $(".searchInput").keypress(async function(event) {
        if (event.keyCode === 13) { // 13 is the key code for Enter key
            const drinkName = $(this).val().trim();
            if (drinkName) {
                const drink = await fetchDrinkByName(drinkName);
                redirectToDrinkDetailsPage(drink);
            } else {
                alert('Please enter a drink name.');
            }
        }
    });
});











/*

const { filter } = require('selenium-webdriver/lib/promise');

$(document).ready(function() {
    // Function to search for a cocktail by name
    function searchCocktailByName(cocktailName) {
        const apiUrl = `http://localhost:3000/cocktails/${cocktailName}`;

        // Make the API request
        $.get(apiUrl, function(data) {
            if (data && Array.isArray(data) && data.length > 0) {
                // Handle the API response by redirecting to the drink details page
                redirectToDrinkDetails(data);
            } else {
                alert('No drinks found with that name.');
            }
        }).fail(function() {
            alert('Error fetching data.');
        });
    }

    // Function to redirect to the drink details page
    function redirectToDrinkDetails(data) {
        // Encode the drink details as a JSON string and pass it as a URL parameter
        const drinkDetails = JSON.stringify({ drinks: data });
        window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
    }

    // Search button click event
    $(".searchButton").click(function() {
        const cocktailName = $(".searchInput").val();
        if (cocktailName) {
            searchCocktailByName(cocktailName);
        } else {
            alert('Please enter a cocktail name.');
        }
    });

    // Listen for Enter key press on the input field
    $(".searchInput").keypress(function(event) {
        if (event.keyCode === 13) { // 13 is the key code for Enter key
            const cocktailName = $(this).val();
            if (cocktailName) {
                searchCocktailByName(cocktailName);
            } else {
                alert('Please enter a cocktail name.');
            }
        }
    });

    // Search button click event for searching by ingredients
    $("#searchButton2").click(function() {
        const ingredients = $("#searchInput2").val();
        if (ingredients) {
            filterDrinksByIngredients(ingredients);
        } else {
            alert('Please enter ingredients.');
        }
    });

    // Listen for Enter key press on the second input field
    $("#searchInput2").keypress(function(event) {
        if (event.keyCode === 13) {
            const ingredients = $(this).val();
            if (ingredients) {
                filterDrinksByIngredients(ingredients);
            } else {
                alert('Please enter ingredients.');
            }
        }
    });
});

*/
