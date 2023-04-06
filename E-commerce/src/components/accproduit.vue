<template>
  <div class="container">

  <div class=" my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Hawaï Clothes</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Des vêtements d'été fabriqués en France, pour un style à la française</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <router-link to="/boutique">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3 text-dark">Nos produits</button>
</router-link> 
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img src="../assets/ttt.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>


  <h1 class="display-5 fw-bold text-center">Nos meilleurs ventes</h1>
    <div class="row" style="margin-top: 2%;">
      <div class="col-sm" v-for="product in popularClothes" :key=product.id>
        <div class="card card-modif" style="width: 18rem;">
          <img class="card-img-top" :src= "product.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }}€</p>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.rate }}<i class="fa-solid fa-star" style="color: #ffea00;"></i></p>
            <div class="btn btn-primary text-dark" @click="getData(product.id)">Voir produit</div>
            <a href=""><img class="btn btn-primary" src="../assets/ajout.png" width="55" style="margin-left: 5%;" alt=""></a>
          </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/qui-sommes-nous">
    <img src="../assets/qsm.jpg" class="imgsqm" alt="">
  </router-link> 

</template>

<style>
.card-img-top {
  height: 300px;
}

.card-modif{
  margin-top: 10%;
  height: 650px;
}

.imgsqm {
  margin-top: 3%;
  margin-bottom: 3%;
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>

<script>
import clothes from '@/assets/json_files/clothes.json';
import { useProductStore } from '@/stores/product';

export default {
  data() {
    return {
      clothes
    }
  },
  setup(){
    const productStore = useProductStore()
    return {
      productStore
    }
  },
  methods : {
    async getData(productId) {
      // console.log(productId)
      this.productStore.setSelectedProduct(productId)
    }
  },
  computed: {
    popularClothes() {
      const sortedClothes = this.clothes.products.sort((a, b) => b.rate - a.rate);
      return sortedClothes.slice(0, 4);
    }
  }
}
</script>
