<template>

    <div>
        <navbar :active="active" @update:active="active = $event" />
        <router-view />
      </div>
    
    
        <div>
        <produit/>
        </div>
    
        <div>
          <footere/>
        </div>
      
      
    </template>
    
    
    <script>
    import Navbar from '@/components/nav.vue';
      import produit from '@/components/produit.vue';
      import footere from '@/components/footer.vue';
      
      export default {
          name: 'produits',
        components: {
          Navbar,
          produit,
          footere, 
        },
        data() {
          return {
            active: 'accueil',
          };
        },
      };
    </script>