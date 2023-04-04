

<template>
    <div>
      <navbar :active="active" @update:active="active = $event" />
      <router-view />
    </div>

  
    <div>
      <footere/>
    </div>
  
  
  </template>
  
  <script>
  import Navbar from '@/components/nav.vue';
  import footere from '@/components/footer.vue';
  
  export default {
      name: 'contact',
    components: {
      Navbar,
      footere, 
    },
    data() {
      return {
        active: 'accueil',
      };
    },
  };
  </script>
  