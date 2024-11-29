<template>
    <div class="recipe-grid">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </template>
  
  <script>
  import RecipeCard from './RecipeCard.vue';
  
  export default {
    name: 'RecipeGrid',
    components: {
      RecipeCard,
    },
    props: {
      recipes: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  </style>
  