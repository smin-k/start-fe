function Car(model, year) {
  this.SEAT_COUNT = 5;

  this.model = model;
  this.year = year;

  this.bbang= function(){
      console.log("빵빵")
  }
}

var car = new Car('k5', 2012);

car.bbang()