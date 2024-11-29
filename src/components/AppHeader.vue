<template>
    <header class="app-header">
      <nav>
        <h1>Sabor Perucho</h1>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8c471;
    color: #fff;
  }
  
  h1 {
    margin: 0;
    font-size: 24px;
   
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  
