<template>
  <nav class="menuNav">
    <router-link to="/accueil">
    <div class="brand-logo">
      <img src="../assets/Hawayrr.png" alt="Your brand logo" />
    </div>
  </router-link>

    <ul class="nav-links ">
      <li :class="{ active: isActive('accueil')}">
        <a :href="pageUrl('accueil')" @click="setActive('accueil')" class="fs-5 font-weight-bold limodif liennav">Accueil</a>
      </li>
      <li :class="{ active: isActive('boutique') }">
        <a :href="pageUrl('boutique')" @click="setActive('boutique')" class=" fs-5 font-weight-bold limodif  liennav">Boutique</a>
      </li>
      <li :class="{ active: isActive('qui-sommes-nous') }">
        <a :href="pageUrl('qui-sommes-nous')" @click="setActive('qui-sommes-nous')" class=" fs-5 font-weight-bold limodif liennav">Qui sommes-nous ?</a>
      </li>
      <li :class="{ active: isActive('contact') }">
        <a :href="pageUrl('contact')" @click="setActive('contact')" class=" fs-5 font-weight-bold limodif liennav">Contact</a>
      </li>
      <li>
        <router-link to="/panier">
          <img   class=" fs-5 font-weight-bold limodif liennav" src="../assets/checkout.png" width="25" alt="">
        </router-link>
      </li>
     
    </ul>
  </nav>
</template>   

<script>
export default {
  methods: {
    isActive(page) {
      return this.$route.name === page;
    },
    pageUrl(page) {
      return `/${page}`;
    },
    setActive(page) {
      this.$emit('update:active', page);
    },
  },
};
</script>

<style>
.menuNav {
  background-color: #FFDE59;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.liennav:hover {
  color: #000;
  border-bottom: 3px solid #000;
}

.brand-logo > img {
  height : 200px;
  width: 200px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.limodif {
  margin: 0 1em;
}

a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.3s ease;
}



</style>