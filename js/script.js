var hotel = {
    // Object properties
    name: 'Frozen Wilds',
    rooms: 110,
    booked: 32,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked + this.gym;
    }
};


var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms', 'gym');
elRooms.textContent = hotel.checkAvailablity();


