  <template>
    <div class="filter-bar">
      <input v-model="searchQuery" type="text" placeholder="Search for a dish..." />
      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option value="seafood">Seafood</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="meat">Meat</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipes: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: '',
        selectedCategory: '',
      };
    },
    computed: {
      filteredRecipes() {
        return this.recipes.filter((recipe) => {
          return (
            (this.selectedCategory === '' || recipe.category === this.selectedCategory) &&
            recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        });
      },
    },
    watch: {
      filteredRecipes(newFilteredRecipes) {
        this.$emit('filter', newFilteredRecipes); // Emit the filtered recipes back to parent
      },
    },
  };
  </script>
  
  <style scoped>
  .filter-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .filter-bar input {
    width: 70%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .filter-bar select {
    width: 25%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  