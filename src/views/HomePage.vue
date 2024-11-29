<template>
    <div class="home">
      <header>
        <h1>Sabor Perucho</h1>
      </header>
  
      <!-- Filter Bar -->
      <FilterBar @filter="filterRecipes" />
  
      <!-- Recipe Grid -->
      <RecipeGrid :recipes="filteredRecipes" />
    </div>
  </template>
  
  <script>
  import FilterBar from '../components/FilterBar.vue';
  import RecipeGrid from '../components/RecipeGrid.vue';
  
  export default {
    name: 'HomePage',
    components: {
      FilterBar,
      RecipeGrid,
    },
    data() {
      return {
        recipes: [
          { id: 1, name: 'Ceviche', image: '/assets/images/ceviche.jpg' },
          { id: 2, name: 'Lomo Saltado', image: '/assets/images/lomo-saltado.jpg' },
          { id: 3, name: 'Aji de Gallina', image: '/assets/images/aji-de-gallina.jpg' },
        ],
        filteredRecipes: [],
      };
    },
    created() {
      this.filteredRecipes = this.recipes; // Initialize with all recipes
    },
    methods: {
      filterRecipes(query) {
        this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        );
      },
    },
  };
  </script>
  