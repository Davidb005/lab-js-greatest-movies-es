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
console.log(
  "Número de peliculas dirigidas por Steven Spielberg: ",
  SpielbergRepetition
);

// 3. Promedio de puntuaciones

function scoresAverage(movies) {
  const sum = movies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  const average = sum / movies.length;
  return Math.round(average.toFixed(2));
}

console.log(scoresAverage(movies));

// 4. Drama movies

function dramaMoviesScore(movies) {
  return movies.filter((drama) => {
    return drama.genre.includes("Drama");
  });
}

console.log(dramaMoviesScore(movies));

console.log(scoresAverage(dramaMoviesScore(movies)));

// 5. Order by year

function orderByYear(movies) {
  const years = movies.map((movie) => movie.year);
  return years.sort((a, b) => a - b);
}
console.log(orderByYear(movies));

// 6. Orden alfábetico

function orderAlphabetically(movies) {
  const titles = movies.map((movie) => movie.title);
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}
console.log(orderAlphabetically(movies).splice(0, 20));

// 7. Bonus: Formato de tiempo - Cambiar horas a minutos

function convertHoursToMinutes(duration) {
  const parts = duration.split(" ");
  if (parts.length === 2) {
    const hours = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    return hours * 60 + minutes;
  } else if (parts.length === 1 && parts[0].includes('h')) {
    const hours = parseFloat(parts[0]);
    return hours * 60;
  } else if (parts.length === 1 && parts[0].includes('min')) {
    const minutes = parseFloat(parts[0]);
    return minutes;
  } 
}

const updatedMovies = movies.map(movie => ({
  ...movie,
  duration: convertHoursToMinutes(movie.duration)
}));

console.log(updatedMovies)