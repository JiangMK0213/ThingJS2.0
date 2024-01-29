<script setup lang="ts">
import { onMounted } from "vue";
import { ModuleManager } from "@/modules";
import * as dat from "dat.gui";
onMounted(async () => {
  regGlobal();
});
function regGlobal() {
  /** 管理器群组 */
  uino.manager = {
    module: new ModuleManager(),
  };
}
function globalBtn() {
  const gui = new dat.GUI({}); //创建GUI实例
}
</script>

<template>
  <div id="div3d"></div>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
