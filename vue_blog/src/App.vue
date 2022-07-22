<template>
  <div :class="{'app':true,'dark':isSun,'light':isSun}">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed} from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup(){
    const store = new useStore();
    return{
      isSun:computed(()=>store.state.isSun),
    }
  }
};
</script>

<style scoped>
.dark {
  transition: all 0.5s ease;
  background-color: #000;
  color: #fff;
}
.light {
  transition: all 0.5s ease;
  background-color: #fff;
  color: #000;
}
</style>
