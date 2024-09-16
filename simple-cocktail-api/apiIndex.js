const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// Sample data for the cocktails
const cocktails = [
    {
        name: 'Margarita',
        alcoholicIngredients: ['Tequila', 'Triple Sec'],
        nonAlcoholicIngredients: ['Lime Juice', 'Salt'],
        instructions: 'Shake the tequila, triple sec, and lime juice with ice. Strain into a salt-rimmed glass.',
        image: '/images/margarita.jpg'
    },
    {
        name: 'Martini',
        alcoholicIngredients: ['Gin', 'Dry Vermouth'],
        nonAlcoholicIngredients: ['Olive or Lemon Twist'],
        instructions: 'Stir gin and vermouth with ice, strain into a chilled glass, garnish with an olive or lemon twist.',
        image: '/images/martini.jpg'
    },
    {
        name: 'Mojito',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Mint Leaves', 'Sugar', 'Soda Water'],
        instructions: 'Muddle mint leaves with sugar and lime juice. Add rum, fill the glass with ice, and top with soda water. Garnish with mint.',
        image: '/images/mojito.jpg'
    },
    {
        name: 'Old Fashioned',
        alcoholicIngredients: ['Bourbon'],
        nonAlcoholicIngredients: ['Sugar', 'Water', 'Angostura Bitters'],
        instructions: 'Muddle sugar and bitters in a glass. Add bourbon and ice, stir gently. Garnish with an orange twist.',
        image: '/images/old fashioned.jpg'
    },
    {
        name: 'Manhattan',
        alcoholicIngredients: ['Rye Whiskey', 'Sweet Vermouth'],
        nonAlcoholicIngredients: ['Angostura Bitters'],
        instructions: 'Stir whiskey and vermouth with ice. Strain into a chilled glass. Garnish with a cherry.',
        image: '/images/manhattan.jpg'
    },
    {
        name: 'Daiquiri',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup'],
        instructions: 'Shake the rum, lime juice, and simple syrup with ice. Strain into a chilled glass.',
        image: '/images/daiquiri.jpg'
    },
    {
        name: 'Moscow Mule',
        alcoholicIngredients: ['Vodka', 'Ginger Beer'],
        nonAlcoholicIngredients: ['Lime Juice'],
        instructions: 'Combine vodka and lime juice in a glass. Fill with ice and top with ginger beer. Garnish with a lime wedge.',
        image: '/images/moscow mule.jpg'
    },
    {
        name: 'Negroni',
        alcoholicIngredients: ['Gin', 'Campari', 'Sweet Vermouth'],
        nonAlcoholicIngredients: [],
        instructions: 'Stir gin, Campari, and vermouth with ice. Strain into a glass over ice. Garnish with an orange twist.'
    },
    {
        name: 'Whiskey Sour',
        alcoholicIngredients: ['Whiskey'],
        nonAlcoholicIngredients: ['Lemon Sour'],
        instructions: 'Shake whiskey, and lemon sour, with ice. Strain into a glass filled with ice. Garnish with a cherry.'
    },
    {
        name: 'Piña Colada',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Pineapple Juice', 'Coconut Cream'],
        instructions: 'Blend rum, pineapple juice, and coconut cream with ice until smooth. Serve in a glass with a pineapple slice.'
    },
    {
        name: 'Cosmopolitan',
        alcoholicIngredients: ['Vodka', 'Triple Sec'],
        nonAlcoholicIngredients: ['Cranberry Juice', 'Lime Juice'],
        instructions: 'Shake vodka, triple sec, cranberry juice, and lime juice with ice. Strain into a chilled glass. Garnish with a lime wheel.'
    },
    {
        name: 'Mai Tai',
        alcoholicIngredients: ['Light Rum', 'Dark Rum', 'Orange Curacao'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup'],
        instructions: 'Shake light rum, lime juice, and orgeat syrup with ice. Strain into a glass filled with ice. Float dark rum on top. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'Bloody Mary',
        alcoholicIngredients: ['Vodka'],
        nonAlcoholicIngredients: ['Tomato Juice', 'Lemon Juice', 'Worcestershire Sauce', 'Tabasco Sauce', 'Celery Salt', 'Pepper'],
        instructions: 'Mix vodka, tomato juice, lemon juice, Worcestershire sauce, Tabasco sauce, celery salt, and pepper in a glass filled with ice. Garnish with a celery stalk and lemon wedge.'
    },
    {
        name: 'Gin and Tonic',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Tonic Water'],
        instructions: 'Pour gin into a glass filled with ice. Top with tonic water. Garnish with a lime wedge.',
        image: '/images/gin and tonic.jpg'
    },
    {
        name: 'Tom Collins',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Soda Water'],
        instructions: 'Shake gin, lemon juice, and simple syrup with ice. Strain into a glass filled with ice. Top with soda water. Garnish with a cherry and a lemon slice.',
        image: '/images/tom collins.jpg'
    },
    {
        name: 'Long Island Iced Tea',
        alcoholicIngredients: ['Vodka', 'Gin', 'Tequila', 'Rum', 'Triple Sec'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Coca-Cola'],
        instructions: 'Shake vodka, gin, tequila, rum, triple sec, lemon juice, and simple syrup with ice. Strain into a glass filled with ice. Top with Coca-Cola. Garnish with a lemon slice.'
    },
    {
        name: 'Caipirinha',
        alcoholicIngredients: ['Cachaca'],
        nonAlcoholicIngredients: ['Lime', 'Sugar'],
        instructions: 'Muddle lime and sugar in a glass. Fill with ice and add cachaça. Stir well.'
    },
    {
        name: 'Sidecar',
        alcoholicIngredients: ['Cognac', 'Triple Sec'],
        nonAlcoholicIngredients: ['Lemon Juice'],
        instructions: 'Shake cognac, triple sec, and lemon juice with ice. Strain into a glass. Garnish with a lemon twist or sugar rim.'
    },
    {
        name: 'Mint Julep',
        alcoholicIngredients: ['Bourbon'],
        nonAlcoholicIngredients: ['Mint Leaves', 'Sugar', 'Water'],
        instructions: 'Muddle mint leaves and sugar in a glass. Fill with crushed ice and add bourbon. Stir well and garnish with more mint.'
    },
    {
        name: 'Gimlet',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup'],
        instructions: 'Shake gin, lime juice, and simple syrup with ice. Strain into a chilled glass. Garnish with a lime wheel.',
        image: '/images/gimlet.jpg'
    },
    {
        name: 'Tequila Sunrise',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Orange Juice', 'Grenadine'],
        instructions: 'Pour tequila and orange juice into a glass filled with ice. Slowly pour grenadine on top. Garnish with an orange slice.'
    },
    {
        name: 'Rum Punch',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Pineapple Juice', 'Orange Juice', 'Grenadine'],
        instructions: 'Mix rum, pineapple juice, orange juice, and grenadine in a glass filled with ice. Garnish with a pineapple slice and cherry.'
    },
    {
        name: 'Screwdriver',
        alcoholicIngredients: ['Vodka'],
        nonAlcoholicIngredients: ['Orange Juice'],
        instructions: 'Mix vodka and orange juice in a glass filled with ice. Garnish with an orange slice.'
    },
    {
        name: 'Amaretto Sour',
        alcoholicIngredients: ['Amaretto'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup'],
        instructions: 'Shake amaretto, lemon juice, and simple syrup with ice. Strain into a glass filled with ice. Garnish with a cherry.'
    },
    {
        name: 'Black Russian',
        alcoholicIngredients: ['Vodka', 'Kahlua'],
        nonAlcoholicIngredients: [],
        instructions: 'Mix vodka and Kahlúa in a glass filled with ice. Stir gently.'
    },
    {
        name: 'White Russian',
        alcoholicIngredients: ['Vodka', 'Kahlua'],
        nonAlcoholicIngredients: ['Heavy Cream'],
        instructions: 'Mix vodka and Kahlúa in a glass filled with ice. Top with heavy cream. Stir gently.'
    },
    {
        name: 'Sex on the Beach',
        alcoholicIngredients: ['Vodka', 'Peach Schnapps'],
        nonAlcoholicIngredients: ['Cranberry Juice', 'Orange Juice'],
        instructions: 'Shake vodka, peach schnapps, cranberry juice, and orange juice with ice. Strain into a glass filled with ice. Garnish with an orange slice.'
    },
    {
        name: 'Blue Lagoon',
        alcoholicIngredients: ['Vodka', 'Blue Curacao'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Sprite'],
        instructions: 'Shake vodka, blue curacao, and lemon juice with ice. Strain into a glass filled with ice. Top with Sprite. Garnish with a lemon slice.'
    },
    {
        name: 'Bellini',
        alcoholicIngredients: ['Prosecco'],
        nonAlcoholicIngredients: ['Peach Puree'],
        instructions: 'Pour peach puree into a glass. Top with Prosecco. Stir gently.'
    },
    {
        name: 'Aperol Spritz',
        alcoholicIngredients: ['Aperol', 'Prosecco'],
        nonAlcoholicIngredients: ['Soda Water'],
        instructions: 'Pour Aperol and Prosecco into a glass filled with ice. Top with soda water. Garnish with an orange slice.'
    },
    {
        name: 'Negroni Sbagliato',
        alcoholicIngredients: ['Campari', 'Sweet Vermouth', 'Prosecco'],
        nonAlcoholicIngredients: [],
        instructions: 'Mix Campari and sweet vermouth in a glass filled with ice. Top with Prosecco. Garnish with an orange twist.'
    },
    {
        name: 'Cuba Libre',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Coca-Cola'],
        instructions: 'Mix rum and lime juice in a glass filled with ice. Top with Coca-Cola. Garnish with a lime wedge.'
    },
    {
        name: 'Sangria',
        alcoholicIngredients: ['Red Wine', 'Brandy'],
        nonAlcoholicIngredients: ['Orange Juice', 'Fruit'],
        instructions: 'Mix red wine, brandy, and orange juice in a pitcher. Add fruit slices and chill before serving.'
    },
    {
        name: 'Hurricane',
        alcoholicIngredients: ['Light Rum', 'Dark Rum'],
        nonAlcoholicIngredients: ['Passion Fruit Juice', 'Lime Juice', 'Orange Juice'],
        instructions: 'Shake light rum, dark rum, passion fruit juice, lime juice, and orange juice with ice. Strain into a glass filled with ice. Garnish with an orange slice and cherry.'
    },
    {
        name: 'Planter\'s Punch',
        alcoholicIngredients: ['Dark Rum'],
        nonAlcoholicIngredients: ['Orange Juice', 'Pineapple Juice', 'Grenadine'],
        instructions: 'Mix dark rum, orange juice, pineapple juice, and grenadine in a glass filled with ice. Garnish with an orange slice and cherry.'
    },
    {
        name: 'Mai Tai (Frozen)',
        alcoholicIngredients: ['Light Rum', 'Dark Rum', 'Orange Curacao'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup', 'Pineapple Juice'],
        instructions: 'Blend light rum, dark rum, lime juice, orgeat syrup, and pineapple juice with ice. Serve in a glass. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'French 75',
        alcoholicIngredients: ['Gin', 'Champagne'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup'],
        instructions: 'Shake gin, lemon juice, and simple syrup with ice. Strain into a glass and top with Champagne. Garnish with a lemon twist.'
    },
    {
        name: 'Rob Roy',
        alcoholicIngredients: ['Scotch Whisky', 'Sweet Vermouth'],
        nonAlcoholicIngredients: ['Angostura Bitters'],
        instructions: 'Stir Scotch whisky, sweet vermouth, and bitters with ice. Strain into a chilled glass. Garnish with a cherry.'
    },
    {
        name: 'Paloma',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Grapefruit Soda', 'Lime Juice'],
        instructions: 'Mix tequila and lime juice in a glass filled with ice. Top with grapefruit soda. Garnish with a lime wedge.'
    },
    {
        name: 'Tom and Jerry',
        alcoholicIngredients: ['Rum', 'Brandy'],
        nonAlcoholicIngredients: ['Egg Nog Mix', 'Sugar'],
        instructions: 'Mix rum, brandy, and egg nog mix in a glass. Add sugar to taste. Serve warm.'
    },
    {
        name: 'Vesper Martini',
        alcoholicIngredients: ['Gin', 'Vodka', 'Lillet Blanc'],
        nonAlcoholicIngredients: [],
        instructions: 'Shake gin, vodka, and Lillet Blanc with ice. Strain into a chilled glass. Garnish with a lemon twist.'
    },
    {
        name: 'Irish Coffee',
        alcoholicIngredients: ['Irish Whiskey'],
        nonAlcoholicIngredients: ['Coffee', 'Heavy Cream', 'Sugar'],
        instructions: 'Combine coffee, Irish whiskey, and sugar in a glass. Float heavy cream on top.'
    },
    {
        name: 'Zombie',
        alcoholicIngredients: ['Light Rum', 'Dark Rum', 'Apricot Brandy'],
        nonAlcoholicIngredients: ['Pineapple Juice', 'Lime Juice', 'Grenadine'],
        instructions: 'Shake light rum, dark rum, apricot brandy, pineapple juice, lime juice, and grenadine with ice. Strain into a glass filled with ice. Garnish with a cherry and pineapple slice.'
    },
    {
        name: 'Shandy',
        alcoholicIngredients: ['Beer'],
        nonAlcoholicIngredients: ['Lemonade'],
        instructions: 'Mix beer and lemonade in a glass. Serve chilled.'
    },
    {
        name: 'Sazerac',
        alcoholicIngredients: ['Rye Whiskey', 'Absinthe'],
        nonAlcoholicIngredients: ['Sugar Cube', 'Peychaud Bitters'],
        instructions: 'Muddle sugar and bitters in a glass. Add rye whiskey and ice. Stir well and rinse the glass with absinthe. Garnish with a lemon twist.'
    },
    {
        name: 'Ramos Gin Fizz',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Lime Juice', 'Simple Syrup', 'Egg White', 'Heavy Cream', 'Soda Water'],
        instructions: 'Shake gin, lemon juice, lime juice, simple syrup, egg white, and heavy cream with ice. Strain into a glass and top with soda water. Garnish with a lemon slice.',
        image: '/images/ramos gin fizz.jpg'
    },
    {
        name: 'Boulevardier',
        alcoholicIngredients: ['Bourbon', 'Campari', 'Sweet Vermouth'],
        nonAlcoholicIngredients: [],
        instructions: 'Stir bourbon, Campari, and sweet vermouth with ice. Strain into a chilled glass. Garnish with an orange twist.'
    },
    {
        name: 'Bramble',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Creme de Mure'],
        instructions: 'Shake gin, lemon juice, and simple syrup with ice. Strain into a glass over crushed ice. Drizzle crème de mûre on top. Garnish with a lemon slice and blackberry.',
        image: '/images/bramble.jpg'
    },
    {
        name: 'Salty Dog',
        alcoholicIngredients: ['Vodka'],
        nonAlcoholicIngredients: ['Grapefruit Juice', 'Salt'],
        instructions: 'Rub the rim of a glass with a lime and dip in salt. Fill the glass with ice and add vodka and grapefruit juice. Stir gently.'
    },
    {
        name: 'Blood and Sand',
        alcoholicIngredients: ['Scotch Whisky', 'Sweet Vermouth'],
        nonAlcoholicIngredients: ['Orange Juice', 'Grenadine'],
        instructions: 'Shake Scotch whisky, sweet vermouth, orange juice, and grenadine with ice. Strain into a glass. Garnish with an orange twist.'
    },
    {
        name: 'Aviation',
        alcoholicIngredients: ['Gin', 'Maraschino Liqueur', 'Creme de Violette'],
        nonAlcoholicIngredients: ['Lemon Juice'],
        instructions: 'Shake gin, maraschino liqueur, lemon juice, and crème de violette with ice. Strain into a chilled glass. Garnish with a cherry.'
    },
    {
        name: 'Negroni (Frozen)',
        alcoholicIngredients: ['Gin', 'Campari', 'Sweet Vermouth'],
        nonAlcoholicIngredients: [],
        instructions: 'Blend gin, Campari, and sweet vermouth with ice until smooth. Serve in a glass. Garnish with an orange twist.'
    },
    {
        name: 'Paloma (Frozen)',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Grapefruit Juice', 'Lime Juice'],
        instructions: 'Blend tequila, grapefruit juice, and lime juice with ice until smooth. Serve in a glass. Garnish with a lime wedge.'
    },
    {
        name: 'Golden Cadillac',
        alcoholicIngredients: ['Galliano', 'Brandy', 'Cacao Liqueur'],
        nonAlcoholicIngredients: ['Heavy Cream'],
        instructions: 'Shake Galliano, brandy, heavy cream, and cacao liqueur with ice. Strain into a chilled glass.'
    },
    {
        name: 'Singapore Sling',
        alcoholicIngredients: ['Gin', 'Cherry Brandy'],
        nonAlcoholicIngredients: ['Pineapple Juice', 'Lime Juice', 'Grenadine', 'Angostura Bitters'],
        instructions: 'Shake gin, cherry brandy, pineapple juice, lime juice, grenadine, and bitters with ice. Strain into a glass filled with ice. Garnish with a cherry and pineapple slice.'
    },
    {
        name: 'Corpse Reviver #2',
        alcoholicIngredients: ['Gin', 'Cointreau', 'Lillet Blanc'],
        nonAlcoholicIngredients: ['Lemon Juice'],
        instructions: 'Shake gin, Cointreau, Lillet Blanc, and lemon juice with ice. Strain into a chilled glass. Garnish with a lemon twist.'
    },
    {
        name: 'Mint Julep (Frozen)',
        alcoholicIngredients: ['Bourbon'],
        nonAlcoholicIngredients: ['Mint Leaves', 'Simple Syrup', 'Ice'],
        instructions: 'Blend bourbon, mint leaves, simple syrup, and ice until smooth. Serve in a glass. Garnish with mint leaves.'
    },
    {
        name: 'Rattlesnake',
        alcoholicIngredients: ['Rye Whiskey', 'Triple Sec'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Egg White'],
        instructions: 'Shake rye whiskey, triple sec, lemon juice, simple syrup, and egg white with ice. Strain into a chilled glass. Garnish with a lemon twist.'
    },
    {
        name: 'Hibiscus Daiquiri',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Hibiscus Syrup', 'Lime Juice'],
        instructions: 'Shake rum, hibiscus syrup, and lime juice with ice. Strain into a chilled glass. Garnish with a lime wheel.'
    },
    {
        name: 'Gin Fizz',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Egg White', 'Soda Water'],
        instructions: 'Shake gin, lemon juice, simple syrup, and egg white with ice. Strain into a glass and top with soda water. Garnish with a lemon slice.',
        image: '/images/gin fizz.jpg'
    },
    {
        name: 'Cherry Bounce',
        alcoholicIngredients: ['Bourbon'],
        nonAlcoholicIngredients: ['Cherry Juice', 'Simple Syrup'],
        instructions: 'Shake bourbon, cherry juice, and simple syrup with ice. Strain into a glass filled with ice. Garnish with cherries.'
    },
    {
        name: 'Mimosa',
        alcoholicIngredients: ['Champagne'],
        nonAlcoholicIngredients: ['Orange Juice'],
        instructions: 'Pour orange juice into a glass and top with Champagne. Stir gently.'
    },
    {
        name: 'Blackberry Bramble',
        alcoholicIngredients: ['Gin', 'Blackberry Liqueur'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup'],
        instructions: 'Shake gin, lemon juice, and simple syrup with ice. Strain into a glass over crushed ice. Drizzle blackberry liqueur on top. Garnish with blackberries.'
    },
    {
        name: 'Aviation (Frozen)',
        alcoholicIngredients: ['Gin', 'Maraschino Liqueur', 'Creme de Violette'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Ice'],
        instructions: 'Blend gin, maraschino liqueur, lemon juice, and crème de violette with ice until smooth. Serve in a glass.'
    },
    {
        name: 'Mai Tai (Frozen)',
        alcoholicIngredients: ['Light Rum', 'Dark Rum', 'Orange Curacao'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup', 'Pineapple Juice'],
        instructions: 'Blend light rum, dark rum, lime juice, orgeat syrup, and pineapple juice with ice until smooth. Serve in a glass. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'The Last Word',
        alcoholicIngredients: ['Gin', 'Maraschino Liqueur', 'Green Chartreuse'],
        nonAlcoholicIngredients: [],
        instructions: 'Shake gin, lime juice, maraschino liqueur, and green Chartreuse with ice. Strain into a chilled glass. Garnish with a lime twist.'
    },
    {
        name: 'Bloody Caesar',
        alcoholicIngredients: ['Vodka'],
        nonAlcoholicIngredients: ['Clamato Juice', 'Lemon Juice', 'Worcestershire Sauce', 'Hot Sauce', 'Celery Salt', 'Pepper'],
        instructions: 'Mix vodka, Clamato juice, lemon juice, Worcestershire sauce, hot sauce, celery salt, and pepper in a glass filled with ice. Garnish with a celery stalk and lime wedge.'
    },
    {
        name: 'Pisco Sour',
        alcoholicIngredients: ['Pisco'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup', 'Egg White', 'Angostura Bitters'],
        instructions: 'Shake pisco, lemon juice, simple syrup, and egg white with ice. Strain into a glass. Garnish with Angostura bitters.'
    },
    {
        name: 'Rum Sour',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Simple Syrup'],
        instructions: 'Shake rum, lemon juice, and simple syrup with ice. Strain into a glass. Garnish with a cherry.'
    },
    {
        name: 'Tuxedo',
        alcoholicIngredients: ['Gin', 'Dry Vermouth', 'Maraschino Liqueur', 'Absinthe'],
        nonAlcoholicIngredients: ['Orange Bitters'],
        instructions: 'Stir gin, dry vermouth, maraschino liqueur, and orange bitters with ice. Strain into a chilled glass. Garnish with a lemon twist.'
    },
    {
        name: 'Dante’s Negroni',
        alcoholicIngredients: ['Gin', 'Campari', 'Sweet Vermouth'],
        nonAlcoholicIngredients: ['Lemon Juice'],
        instructions: 'Shake gin, Campari, sweet vermouth, and lemon juice with ice. Strain into a glass. Garnish with a lemon twist.'
    },
    {
        name: 'Ginger Smash',
        alcoholicIngredients: ['Bourbon'],
        nonAlcoholicIngredients: ['Ginger Syrup', 'Lemon Juice', 'Mint'],
        instructions: 'Shake bourbon, ginger syrup, lemon juice, and mint with ice. Strain into a glass filled with ice. Garnish with a mint sprig.'
    },
    {
        name: 'Paloma (Frozen)',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Grapefruit Juice', 'Lime Juice', 'Ice'],
        instructions: 'Blend tequila, grapefruit juice, and lime juice with ice until smooth. Serve in a glass. Garnish with a lime wedge.'
    },
    {
        name: 'Clover Club',
        alcoholicIngredients: ['Gin'],
        nonAlcoholicIngredients: ['Lemon Juice', 'Raspberry Syrup', 'Egg White'],
        instructions: 'Shake gin, lemon juice, raspberry syrup, and egg white with ice. Strain into a glass. Garnish with raspberries.',
        image: '/images/clover club.jpg'
    },
    {
        name: 'Boulevardier (Frozen)',
        alcoholicIngredients: ['Bourbon', 'Campari', 'Sweet Vermouth'],
        nonAlcoholicIngredients: ['Ice'],
        instructions: 'Blend bourbon, Campari, and sweet vermouth with ice until smooth. Serve in a glass. Garnish with an orange twist.'
    },
    {
        name: 'Blackberry Margarita',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Blackberry Puree', 'Lime Juice', 'Simple Syrup'],
        instructions: 'Shake tequila, blackberry puree, lime juice, and simple syrup with ice. Strain into a glass filled with ice. Garnish with lime wheel.'
    },
    {
        name: 'Ginger Beer Shandy',
        alcoholicIngredients: ['Beer', 'Ginger Beer'],
        nonAlcoholicIngredients: ['Lemon Juice'],
        instructions: 'Mix beer and ginger beer with lemon juice in a glass. Serve chilled.'
    },
    {
        name: 'Mai Tai (Frozen)',
        alcoholicIngredients: ['Light Rum', 'Dark Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup', 'Pineapple Juice', 'Ice'],
        instructions: 'Blend light rum, dark rum, lime juice, orgeat syrup, and pineapple juice with ice until smooth. Serve in a glass. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'Pina Colada (Frozen)',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Pineapple Juice', 'Coconut Cream', 'Ice'],
        instructions: 'Blend rum, pineapple juice, and coconut cream with ice until smooth. Serve in a glass. Garnish with a pineapple slice.'
    },
    {
        name: 'Frozen Margarita',
        alcoholicIngredients: ['Tequila'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend tequila, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    },
    {
        name: 'Mai Tai',
        alcoholicIngredients: ['Light Rum', 'Dark Rum', 'Orange Curacao'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup'],
        instructions: 'Shake light rum, dark rum, lime juice, orgeat syrup, and orange curacao with ice. Strain into a glass filled with ice. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'Rum Punch',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Orange Juice', 'Pineapple Juice', 'Grenadine'],
        instructions: 'Mix rum, orange juice, pineapple juice, and grenadine in a glass filled with ice. Garnish with an orange slice and cherry.'
    },
    {
        name: 'Sazerac (Frozen)',
        alcoholicIngredients: ['Rye Whiskey', 'Absinthe'],
        nonAlcoholicIngredients: ['Sugar Cube', 'Peychaud Bitters', 'Ice'],
        instructions: 'Blend rye whiskey, sugar, and bitters with ice. Rinse the glass with absinthe. Serve in the glass. Garnish with a lemon twist.'
    },
    {
        name: 'Mai Tai (Frozen)',
        alcoholicIngredients: ['Light Rum', 'Dark Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Orgeat Syrup', 'Pineapple Juice', 'Ice'],
        instructions: 'Blend light rum, dark rum, lime juice, orgeat syrup, and pineapple juice with ice until smooth. Serve in a glass. Garnish with a lime wheel and mint sprig.'
    },
    {
        name: 'Daiquiri (Frozen)',
        alcoholicIngredients: ['Rum'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend rum, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    },
    {
        name: 'GIN RUM TEST',
        alcoholicIngredients: ['Rum', 'Gin'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend rum, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    },
    {
        name: 'VODKA GIN TEST',
        alcoholicIngredients: ['Vodka', 'Gin'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend rum, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    },
    {
        name: 'VODKA RUM TEST',
        alcoholicIngredients: ['Rum', 'Vodka'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend rum, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    },
    {
        name: 'VODKA RUM GIN TEST',
        alcoholicIngredients: ['Rum', 'Vodka', 'Gin'],
        nonAlcoholicIngredients: ['Lime Juice', 'Simple Syrup', 'Ice'],
        instructions: 'Blend rum, lime juice, and simple syrup with ice until smooth. Serve in a glass. Garnish with a lime wheel.'
    }
]


// Endpoint to get all cocktails
app.get('/cocktails', (req, res) => {
    res.json(cocktails);
});

// Endpoint to get a specific cocktail by name
app.get('/cocktails/:name', (req, res) => {
    const name = req.params.name;
    const cocktail = cocktails.find(c => c.name.toLowerCase() === name.toLowerCase());

    if (cocktail) {
        res.json(cocktail);
    } else {
        res.status(404).json({ error: 'Cocktail not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
