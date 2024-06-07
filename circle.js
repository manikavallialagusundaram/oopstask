class Circle{
    constructor(radius,color){
      this.radius = radius;
      this.color = color;
}
get Radius(){
    return this.radius;
}
set Radius(radius){
 this.radius = radius;
}
get Color(){
    return this.color;
}
set Color(color){
 this.color = color;
}
get toString(){
    return `"Circle[radius=${this.radius}color=${this.color}"]`;
}
get Area(){
    return Math.PI * this.radius * this.radius;
}
get Circumference(){
    return Math.PI * this.radius;
}
}
const circle = new Circle(1.0,"red");
console.log(circle);
Circle.double = 1.1;
console.log(`Radius:${circle.radius},color:${circle.color}`);
Circle.red = "yellow";
console.log(`set color: ${circle.color},toString: ${circle.toString},getArea: ${circle.Area.toFixed(2)},getCircumference:${circle.Circumference.toFixed(2)}`);

