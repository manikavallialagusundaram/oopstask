class Movie {
    constructor(title,studio,rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movie){
        return movie.filter(movie => movie.rating === "PG");
}
}
const casinoRoyale = new Movie("casinoRoyale","Eon Productions","PG13");
//console.log(casinoRoyale);
const movies = [
    new Movie("varanamAyiram","sunPictures","PG"),
    new Movie("3","z-productions","R"),
    new Movie("thamirabharani","sunPictures","PG13"),
    new Movie("sundaraPandiyan","z-productions","PG"),
    new Movie("sandaKozhi","sunPictures","R"),
    new Movie("Villu","z-productions","PG"),
];
const pgmovies = Movie.getPG(movies);
console.log(pgmovies);
