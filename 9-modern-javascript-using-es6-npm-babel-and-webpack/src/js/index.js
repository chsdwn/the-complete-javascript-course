import axios from 'axios';
// d4f9ceaa577e45288b641d3b0c08c0bd

async function getResults(query) {
  const key = 'd4f9ceaa577e45288b641d3b0c08c0bd';
  try {
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch(error) {
    console.log(error);
  }
}
getResults('pasta');