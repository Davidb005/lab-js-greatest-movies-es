

// const movies = require("./data.js");


if (typeof module !== "undefined") {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

// 1. Todos los directores

function getAllDirectors() {
  return movies.map((movie) => {
    return movie.director;
  });
}

console.log(getAllDirectors());

// 1.1 Limpiar los directores

// function unicDirectors(array){
// const unicArray=[];
// array.forEach(director => {
//   if(unicArray.indexOf(director) === -1){unicArray.push(director);}
// });
// return unicArray
// }

// const nonDuplicateDirectors = unicDirectors(movies);
// console.log(nonDuplicateDirectors)

// * Buscar info de método set para el bonus

// 2. Spielberg

function howManyMovies(movies) {
  const count = {};
  for (let film of movies) {
    const spielberg = film.director.toLowerCase();
    if (spielberg === "steven spielberg") {
      if (count[spielberg]) {
        count[spielberg]++;
      } else {
        count[spielberg] = 1;
      }
    }
  }
  return count;
}

const SpielbergRepetition = howManyMovies(movies);
console.log("Número de peliculas dirigidas por Steven Spielberg: ", SpielbergRepetition)

// 3. Promedio de puntuaciones

function scoresAverage(movies){
 const sum = movies.reduce((acc, movie) => {
return acc + movie.score;
  }, 0)
  const average = sum / movies.length;
  return average
}

// Preguntar martes /sabado AVERAGE
// function numberRound (average){
// return Math.round(average);
// }
// const roundedNumber = numberRound

console.log(scoresAverage(movies));

// 4. Drama movies

function dramaMoviesScore(movies){
  return movies.filter((drama)=>{
    return drama.genre.includes("Drama");
  })
}

console.log(dramaMoviesScore(movies))

console.log(scoresAverage(dramaMoviesScore(movies)))

// Preguntar martes /sabado AVERAGE
// function numberRound (average){
// return Math.round(average);
// }
// const roundedNumber = numberRound

// 5. Ordenar por año

function orderByYear(movies){
  return movies.map((order)=>{
    return order.sort.year((a,b)=>{
      return a-b;
    })
  })
}

console.log(orderByYear(movies))