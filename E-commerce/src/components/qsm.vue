<script>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class=" my-5 text-center">
    <img class="d-block mx-auto mb-4" src="../assets/Hawayrr.png" alt="" width="10%">
    <h1 class="display-5 fw-bold">Qui sommes-nous ?</h1>
    <div class="col-lg-8 mx-auto">
      <p class="lead mb-4">   Hawai Clothes est une entreprise de vente en ligne de vêtements français. Notre marque est 100% française et nous sommes fiers de produire tous nos produits en France. Depuis notre création il y a 5 ans, nous avons travaillé dur pour offrir des vêtements de qualité supérieure à nos clients. Nous proposons une large gamme de vêtements pour hommes et femmes, allant des vêtements décontractés aux tenues habillées pour les grandes occasions. Chez Hawai Clothes, nous sommes passionnés par la mode et nous mettons tout en œuvre pour que nos clients soient satisfaits de leurs achats. Nous sommes heureux de pouvoir offrir à nos clients des produits de qualité supérieure fabriqués en France et nous espérons continuer à le faire pour les années à venir.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <router-link to="/boutique">
  <button type="button" class="btn btn-primary btn-lg px-4 gap-3 text-dark">Nos produits</button>
</router-link>
<router-link to="/contact">
  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Nous contactez</button>
</router-link>
      </div>
    </div>
  </div>
</template>