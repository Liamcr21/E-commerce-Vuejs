<template>
  <div class="container" style="margin-top: 2%;">
    <h1 class="text-center">Nos produits populaires</h1>
    <div class="row" style="margin-top: 2%;">
      <div class="col-sm" v-for="product in products" :key=product.id>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src= "product.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {

      await axios
        .get("https://fakestoreapi.com/products/")
        .then(response => this.products =response.data)
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
