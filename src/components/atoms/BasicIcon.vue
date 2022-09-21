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
  color: var(--icolor);
  .size {
    &-small {
      width: 8rem;
      height: 8rem;
    }
    &-medium {
      width: 16rem;
      height: 16rem;
    }
    &-large {
      width: 32rem;
      height: 32rem;
    }
  }
}
</style>
