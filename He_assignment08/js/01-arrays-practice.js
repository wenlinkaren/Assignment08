//STEP 1
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5"];
console.log(movies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = "Iron Man";
movies[1] = "Iron Man2";
movies[2] = "Iron Man3";
movies[3] = "Iron Man4";
movies[4] = "Iron Man5";
console.log(movies[0]);
//STEP 3
let movies = new Array(5);
movies[0] = "Iron Man";
movies[1] = "Iron Man2";
movies[2] = "Iron Man3";
movies[3] = "Iron Man4";
movies[4] = "Iron Man5";
movies.splice(2, 0, "Spider Man");
console.log(movies.length);
//STEP 4
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5"];
delete movies[0];
console.log(movies);
//STEP 5
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
for (let movie in movies) {
    console.log(movies[movie]);
}
//STEP 6
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
for (let movie of movies) {
    console.log(movie);
}
//STEP 7
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
for (let movie of movies) {
   console.log(movies.sort());
}
//STEP 8
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
let leastFavMovies = ["Spider Man", "Spider Man2","Spider Man3"];
console.log("Movies I like:\n\n" + movies.join("\n") + "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n"));
//STEP 9
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
let leastFavMovies = ["Spider Man", "Spider Man2", "Spider Man3"];
movies = movies.concat(leastFavMovies);
console.log(movies.reverse());
//STEP 10
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
let leastFavMovies = ["Spider Man", "Spider Man2", "Spider Man3"];
movies = movies.concat(leastFavMovies);
console.log(movies[movies.length - 1]);
//STEP 11
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
let leastFavMovies = ["Spider Man", "Spider Man2", "Spider Man3"];
movies = movies.concat(leastFavMovies);
console.log(movies[0]);
//STEP 12
let movies = ["Iron Man", "Iron Man2", "Iron Man3", "Iron Man4", "Iron Man5", "Iron Man6", "Iron Man7"];
let leastFavMovies = ["Spider Man", "Spider Man2", "Spider Man3"];
leastFavMovies.splice(0, 3, movies);
console.log(leastFavMovies);
//STEP 13
let movies = [["Iron Man", 1], ["Iron Man2", 2], ["Iron Man3", 3], ["Iron Man4", 4], ["Iron Man5", 5]];
movies.forEach((item) => {
    let moviesName = item.filter((name) => {
        return typeof name === "string";   
    });
    console.log(moviesName);
});
//STEP 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function(list) {
    let i = 1;
    list.forEach(employee => {
        console.log(`${employee}`);
        i++;
    }); 
};
console.log("Employees:");
showEmployee(employees);
//STEP 15
function filterValues(arr) {
    function isEligible(value) {
        if (value !== false || value !== null || value !== 0 || value !== "") {
            return value;
        }
    };
    arr = arr.filter(isEligible);
    return arr;
};
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
function randomItem(items) {
    //return items[Math.floor(Math.random()*items.length)];
};
console.log(randomItem([123, 23, 56, 78]));
//STEP 17
function largestNum(arr) {
    return Math.max.apply(null, arr); 
};
console.log(largestNum([23, 66, 98, 54]));