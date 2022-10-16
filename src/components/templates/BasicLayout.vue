<template>
  <GlobalHeader />
  <main>
    <div class="content-wrap">
      <div class="main-content">
        <router-view />
      </div>
      <div class="side-menu">
        <div class="advertisement"></div>
      </div>
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
  min-height: calc(100% - 30rem);
  background-color: $COLOR_DARK_GREEN;
  .content-wrap {
    display: flex;
    justify-content: center;
    min-width: 100%;
    padding-top: 84rem;
    padding-bottom: 40rem;
    margin: auto;
    .main-content {
      min-width: 800rem;
      max-width: 800rem;
    }
    .side-menu {
      min-width: 300rem;
      max-width: 300rem;
      margin-left: 60rem;
      .advertisement {
        margin: auto;
        width: 200rem;
        height: 160rem;
        background-color: $COLOR_GRAY;
      }
    }
  }
}
</style>
