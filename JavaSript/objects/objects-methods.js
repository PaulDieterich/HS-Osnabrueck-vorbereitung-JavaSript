let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    gestCount: 0,
    chackAvailabitity: function(partySize){
      let seatsLeft = this.guestCapacity - this.gestCount; 
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.gestCount = this.gestCount + partySize; 
    },
    removeParty: function(partySize){
        this.gestCount =  this.gestCount - partySize
    }
}

// seatParty 
//removeParty

restaurant.seatParty(72)
console.log(restaurant.chackAvailabitity(5));
restaurant.removeParty(5);
console.log(restaurant.chackAvailabitity(5));