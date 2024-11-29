  <template>
    <div class="home">
      <header>
        <h1>Sabor Perucho</h1>
      </header>
  
      <!-- Filter Bar -->
      <FilterBar :recipes="recipes" @filter="updateFilteredRecipes" />
      
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
          { id: 1, name: 'Ceviche', image: require('@/assets/images/ceviche.jpg'), category: 'seafood' },
          { id: 2, name: 'Lomo Saltado', image: require('@/assets/images/lomo-saltado.jpg'), category: 'meat' },
          { id: 3, name: 'Aji de Gallina', image: require('@/assets/images/aji-de-gallina.jpg'), category: 'meat' },
          { id: 4, name: 'Causa de Atun', image: require('@/assets/images/causa-atun.jpeg'), category: 'seafood'},
        ],
        filteredRecipes: [],
      };
    },
    created() {
      this.filteredRecipes = this.recipes; // Initialize with all recipes
    },
    methods: {
      updateFilteredRecipes(filtered) {
        this.filteredRecipes = filtered; // Update filtered recipes from the FilterBar
      },
    },
  };
  </script>
  