const data = {
    locations: [],
    get location(){
        return this._location
    },
    set location(value){
       value =  value.trim()
     
       this._location = value
       this.locations.push(this._location)
    }
   
}

//code that use the date object

data.location =  "        Deutschland    "  
data.location = "New York"
console.log(data.locations)