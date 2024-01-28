<script setup lang="ts">
setTimeout(async () => {
  await THING.Utils.login("http://10.100.31.150:8899/processRequest2");
  setTimeout(() => {
    const app = new THING.App({
      url: "/self",
      onComplete: function (ev: any) {
        console.log(ev); // 加载完成后回调
        THING.App.current.levelManager.change(
          THING.App.current.query(".Campus")[0]
        );
      },
    });
  }, 1000);
}, 500);
</script>

<template>
  <div id="div3d"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
