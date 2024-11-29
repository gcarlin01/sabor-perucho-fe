<template>
    <div class="recipe-card">
      <img :src="recipe.image" :alt="recipe.name" />
      <h3>{{ recipe.name }}</h3>
      <p>{{ recipe.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .recipe-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .recipe-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .recipe-card h3 {
    margin: 10px 0;
  }
  .recipe-card p {
    font-size: 14px;
    color: #666;
  }
  </style>
  