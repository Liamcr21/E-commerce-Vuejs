<template>

<div>
    <navbar :active="active" @update:active="active = $event" />
    <router-view />
  </div>


    <div>
    <qsm/>
    </div>

    <div>
      <footere/>
    </div>
  
  
</template>


<script>
import Navbar from '@/components/nav.vue';
  import qsm from '@/components/qsm.vue';
  import footere from '@/components/footer.vue';
  
  export default {
      name: 'qui-sommes-nous',
    components: {
      Navbar,
      qsm,
      footere, 
    },
    data() {
      return {
        active: 'accueil',
      };
    },
  };
</script>