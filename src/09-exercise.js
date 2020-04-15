/**
 * Use the built in `map()` method of arrays to:
 *
 * 1. Create a new array with the value of each of the elements in the array to:
 *
 * if the city name length is less than 8 characters:
 * `short name`
 *
 * if the city name length is greater than 8 characters
 * `long name`
 *
 * 2. Store the new array that the `map()` method returns in the `nameLengths` array
 * 3. The original `cities` array should not be modified
 */
function exercise09() {
    const cities = ['Barcelona', 'Sevilla', 'Tarragona', 'Berlin', 'Paris'];
    let nameLengths = [];

    // Write your solution bellow this line
    nameLengths = cities.map(function (name) {
        if (name.length < 8) {
            return 'short name';
        } else if (name.length > 8) {
            return 'long name';
        }
    });

    // Don’t change the code bellow this line
    return {
        cities: cities,
        nameLengths: nameLengths,
    };
}

module.exports = exercise09;
