<template>
  <nav class="menuNav">
    <div class="brand-logo">
      <img src="../assets/Hawayrr.png" alt="Your brand logo" />
    </div>
    <ul class="nav-links">
      <li :class="{ active: isActive('accueil') }">
        <a :href="pageUrl('accueil')" @click="setActive('accueil')">Accueil</a>
      </li>
      <li :class="{ active: isActive('boutique') }">
        <a :href="pageUrl('boutique')" @click="setActive('boutique')">Boutique</a>
      </li>
      <li :class="{ active: isActive('qui-sommes-nous') }">
        <a :href="pageUrl('qui-sommes-nous')" @click="setActive('qui-sommes-nous')">Qui sommes-nous ?</a>
      </li>
      <li :class="{ active: isActive('contact') }">
        <a :href="pageUrl('contact')" @click="setActive('contact')">Contact</a>
      </li>
      <li>
        <router-link to="/panier">
 <i class="fa-solid fa-bag-shopping"></i>
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
  /* color: rgb(0, 0, 0); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.brand-logo > img {
  height : 150px;
  width: 150px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {

  margin: 0 1em;
}

a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #aaa;
}

</style>