<template>
  <div class="icon-wrap" :style="`--icolor: ${color}`">
    <font-awesome-icon :icon="icon" :class="`size-${size}`" />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.icon-wrap {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: var(--icolor);
  .size {
    &-small {
      width: 8px;
      height: 8px;
    }
    &-medium {
      width: 16px;
      height: 16px;
    }
    &-large {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
