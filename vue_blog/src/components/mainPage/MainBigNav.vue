<template>
  <div class="mbn">
    <div class="left">
      <div class="myHead"><img :src="message.imgSrc" class="myHeadImg" /></div>
      <div class="myName">{{ message.name }}</div>
    </div>
    <div class="right">
      <div>
        <el-icon><HomeFilled /></el-icon>Home
      </div>
      <div>
        <el-icon><CameraFilled /></el-icon>Album
      </div>
      <div>
        <el-icon><ChatLineRound /></el-icon>About
      </div>
      <div>
        <el-icon v-if="isSun"><Sunrise /></el-icon>
        <el-icon v-else><MoonNight /></el-icon>
        <el-switch
          @click="mainChangesun"
          v-model="isSun"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </div>
      <div><input /></div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "MainBigNav",
  setup() {
    const store = useStore();
    let message = reactive({
      name: "次林梦叶",
      imgSrc: "../../assets/img/myHead.jpg",
    });
    function mainChangesun() {
      store.commit("CHANGEISSUN", !store.state.isSun);
    }
    return {
      message,
      isSun: computed(() => store.state.isSun),
      mainChangesun,
    };
  },
};
</script>

<style scoped>
</style>