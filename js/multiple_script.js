// Define a constructor function template for hotels
function Hotel(name, rooms, booked, gym) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.gym;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var frozenHotel = new Hotel('Frozen Wilds', 46, 8, true);
var horizonHotel = new Hotel('Horizon', 32, 28, false);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = frozenHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += frozenHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = horizonHotel.name + ' rooms: ';
    details2 += horizonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;
