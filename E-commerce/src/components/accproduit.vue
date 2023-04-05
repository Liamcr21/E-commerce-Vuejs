<template>
  <div class="container" style="margin-top: 2%;">
    <h1 class="text-center">Nos produits populaires</h1>
    <div class="row" style="margin-top: 2%;">
      <div class="col-sm" v-for="product in popularClothes" :key=product.id>
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
import clothes from '@/assets/json_files/clothes.json';

export default {
  data() {
    return {
      clothes
    }
  },
  computed: {
    popularClothes() {
      // Sort the products array by ranking property
      const sortedClothes = this.clothes.products.sort((a, b) => b.rating - a.rating);
      // Get the first 4 products from the sorted array
      return sortedClothes.slice(0, 4);
    }
  }
}
</script>
