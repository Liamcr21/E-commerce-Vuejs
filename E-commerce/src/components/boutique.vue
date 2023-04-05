<template>
  <div class="container" style="margin-top: 2%;">
    <h1 class="text-center">Nos produits populaires</h1>
    <div class="row" style="margin-top: 2%;">
      <div class="col-sm" v-for="product in clothes.products" :key=product.id>
        <div class="card card-modif" style="width: 18rem;">
          <img class="card-img-top" :src= "product.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }}€</p>
            <p class="card-text">{{ product.description }}</p>
            <a href="#" class="btn btn-primary text-dark">Ajouter au panier</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<style>
.card-img-top {
  height: 300px;
}

.card-modif{
  margin-top: 10%;
  height: 650px;
}
</style>


  <script>
  import axios from 'axios';
  import clothes from '@/assets/json_files/clothes.json';
  
  export default {
    data() {
      return {
        clothes
      }
    }
    // mounted() {
    //   this.fetchData();
    // },
    // methods: {
    //   async fetchData() {
  
    //     await fetch("../assets/json_files/clothes.json")
    //       .then(response =>response.json())
    //       .then(data => { this.products = data.products})
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }
    // }
  }
  </script>
  