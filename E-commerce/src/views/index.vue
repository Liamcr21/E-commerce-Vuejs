

<template>
  <div>
    <navbar :active="active" @update:active="active = $event" />
    <router-view />
  </div>

  <div>
    <AccProduit/>
  </div>

  <div>
    <footere/>
  </div>


</template>

<script>
import Navbar from '@/components/nav.vue';
import AccProduit from '@/components/accproduit.vue';
import footere from '@/components/footer.vue';

export default {
    name: 'home',
    name: 'accueil',
  name:'maNavbar',
  components: {
    Navbar,
    AccProduit,
    footere, 
  },
  data() {
    return {
      active: 'accueil',
    };
  },
};
</script>
