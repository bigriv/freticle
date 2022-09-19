<template>
  <header>
    <div class="header-wrap">
      <div class="header-logo">freticle</div>
      <div class="header-option">
        <div class="header-option-icon">
          <BasicIcon icon="magnifying-glass" size="large" color="white" />
        </div>
        <div class="header-option-icon">
          <BasicIcon icon="circle-user" size="large" color="white" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import BasicIcon from "@/components/atoms/BasicIcon.vue";

export default defineComponent({
  setup() {},
  components: { BasicIcon },
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 40px;
  background-color: $COLOR_BROWN;
  padding: 4px;
  .header-wrap {
    display: flex;
    justify-content: space-between;
    .header-logo {
      font-size: 28px;
      cursor: pointer;
      color: $COLOR_WHITE;
    }
    .header-option {
      display: flex;
      .header-option-icon {
        cursor: pointer;
        + .header-option-icon {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
