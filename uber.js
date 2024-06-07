//write a class to calculate the Uber price. 
class uberPriceCalculator{
    constructor(baseFair,costPerMile,costPerMinute,bookingFee){
       this.baseFair = baseFair;
       this.costPerMile = costPerMile;
       this.costPerMinute = costPerMinute;
       this.bookingFee = bookingFee;
    }
    calculatePrice(distanceMiles,duration){
        const distanceCost = this.costPerMile * distanceMiles;
        const timeCost = this.costPerMinute * duration;
        const totalPrice = this.baseFair + distanceCost + timeCost +this.bookingFee;
        return totalPrice;
}
}
const uber = new uberPriceCalculator(2.25,1.30,0.05,2.87);
const distanceMiles = 12;
const duration = 20;
const price = uber.calculatePrice(distanceMiles,duration);
console.log(`The Total Price For Uber Ride is: $${price.toFixed(2)}`);  