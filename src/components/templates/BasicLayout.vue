<template>
  <GlobalHeader />
  <main>
    <div class="main-content">
      <router-view />
    </div>
    <div class="side-menu">
      <div class="advertisement"></div>
    </div>
  </main>
  <GlobalFooter />
</template>

<script>
import { defineComponent } from "vue";
import GlobalHeader from "@/components/organisms/GlobalHeader.vue";
import GlobalFooter from "@/components/organisms/GlobalFooter.vue";

export default defineComponent({
  components: { GlobalFooter, GlobalHeader },
  setup() {},
});
</script>

<style scoped lang="scss">
main {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  background-color: $COLOR_DARK_GREEN;
  padding: 80rem 0;
  margin: auto;
  .main-content {
    min-width: 600rem;
    width: 80%;
  }
  .side-menu {
    min-width: 300rem;
    width: 20%;
    margin-left: 60rem;
    .advertisement {
      margin: auto;
      width: 200rem;
      height: 160rem;
      background-color: $COLOR_GRAY;
    }
  }
}
</style>
