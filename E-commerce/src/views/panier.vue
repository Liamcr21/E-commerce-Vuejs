<template>

    <div>
        <navbar :active="active" @update:active="active = $event" />
        <router-view />
      </div>
    
    
        <div>
        <panier/>
        </div>
    
        <div>
          <footere/>
        </div>
      
      
    </template>
    
    
    <script>
    import Navbar from '@/components/nav.vue';
      import panier from '@/components/panier.vue';
      import footere from '@/components/footer.vue';
      
      export default {
          name: 'paniers',
        components: {
          Navbar,
          panier,
          footere, 
        },
        data() {
          return {
            active: 'accueil',
          };
        },
      };
    </script>