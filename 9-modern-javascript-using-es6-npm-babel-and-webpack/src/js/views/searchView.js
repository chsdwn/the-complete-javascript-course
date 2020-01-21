import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResList.innerHTML = '';
}

const renderRecipe = recipe => {
  `
  publisher: "101 Cookbooks"
  title: "Best Pizza Dough Ever"
  source_url: "http://www.101cookbooks.com/archives/001199.html"
  recipe_id: "47746"
  image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
  social_rank: 100
  publisher_url: "http://www.101cookbooks.com"
  `

  const markup = `
    <li>
      <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
          <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${recipe.title}</h4>
          <p class="results__author">${recipe.publisher}</p>
        </div>
      </a>
    </li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
  if (recipes) {
    recipes.forEach(renderRecipe);
  }
};