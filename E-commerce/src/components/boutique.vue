<template>

  <div class="container" style="margin-top: 2%;">
    <h1 class="display-5 fw-bold text-center">Nos produits</h1>
    <div class="row" style="margin-top: 2%;">
      <div class="col-sm" v-for="product in displayedProducts" :key=product.id>
        <div class="card card-modif" style="width: 18rem;">
          <img class="card-img-top" :src= "product.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}€</p>
            <a href="#" class="btn btn-primary text-dark">Voir le produit</a>
            <a href=""><img class="btn btn-primary" src="../assets/ajout.png" width="55" style="margin-left: 5%;" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
 

    <nav aria-label="Page navigation example" style="margin-top: 2%;" >
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <a class="page-link text-dark" @click.prevent="currentPage--">Page arrière</a>
    </li>
    <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
      <a class="page-link text-dark" href="#" @click.prevent="currentPage = pageNumber">{{ pageNumber }}</a>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link text-dark" href="#" @click.prevent="currentPage++">Page suivante</a>
      </li>
  </ul>
</nav>
</template>

<style>
.card-img-top {
  height: 300px;
}

.card-modif{
  margin-top: 10%;
  height: 650px;
}

.page-item.active .page-link{
  background-color: #FFDE59;
  border: #FFDE59;
}
</style>

<script>
import clothes from '@/assets/json_files/clothes.json';

export default {
  data() {
    return {
      clothes,
      currentPage: 1,
      itemsPerPage: 8
    }
  },
  computed: {
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.clothes.products.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.clothes.products.length / this.itemsPerPage);
    }
  }
}
</script>
