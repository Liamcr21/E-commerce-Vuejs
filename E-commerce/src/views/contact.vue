

<template>
    <div>
      <navbar :active="active" @update:active="active = $event" />
      <router-view />
    </div>
  
    <div>
      <contactform/>
    </div>
  
    <div>
      <footere/>
    </div>
  
  
  </template>
  
  <script>
  import Navbar from '@/components/nav.vue';
  import contactform from '@/components/contact.vue';
  import footere from '@/components/footer.vue';
  
  export default {
      name: 'contact',
    components: {
      Navbar,
      contactform,
      footere, 
    },
    data() {
      return {
        active: 'accueil',
      };
    },
  };
  </script>
  