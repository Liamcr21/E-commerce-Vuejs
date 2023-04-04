<template>

    <div>
        <navbar :active="active" @update:active="active = $event" />
        <router-view />
      </div>
    
    
        <div>
        <mentions/>
        </div>
    
        <div>
          <footere/>
        </div>
      
      
    </template>
    
    
    <script>
    import Navbar from '@/components/nav.vue';
      import mentions from '@/components/mentions.vue';
      import footere from '@/components/footer.vue';
      
      export default {
          name: 'mentionsl',
        components: {
          Navbar,
          mentions,
          footere, 
        },
        data() {
          return {
            active: 'accueil',
          };
        },
      };
    </script>