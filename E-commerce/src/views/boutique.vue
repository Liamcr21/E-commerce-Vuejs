

<template>
    <div>
      <navbar :active="active" @update:active="active = $event" />
      <router-view />
    </div>

    <div>
      <boutique/>
    </div>
  
    <div>
      <footere/>
    </div>
  
  
  </template>
  
  <script>
  import Navbar from '@/components/nav.vue';
  import boutique from '@/components/boutique.vue';
  import footere from '@/components/footer.vue';
  
  export default {
      name: 'boutiques',
    components: {
      Navbar,
      boutique,
      footere, 
    },
    data() {
      return {
        active: 'accueil',
      };
    },
  };
  </script>
  