<script setup lang="ts">
import { onMounted } from "vue";
import { ModuleManager } from "@/modules";
import * as dat from "dat.gui";

onMounted(async () => {
  await regGlobal();
  // 加载场景中的按钮
  uino.manager.module.keys.sceneBtns.init();
});
async function regGlobal() {
  /** 管理器群组 */
  uino.manager = {
    module: new ModuleManager(),
  };
  /** 初始化所有功能模块 */
  uino.manager.module.init();
  // 加载园区
  await uino.manager.module.keys.detaultApp.create();
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
