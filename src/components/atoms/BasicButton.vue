<template>
  <button type="button" :class="type" @click="onClick">
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "ボタン",
    },
    type: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = (event) => {
      emit("click", event);
    };
    return {
      onClick,
    };
  },
});
</script>

<style scoped lang="scss">
button {
  width: 100%;
  cursor: pointer;
  padding: 4px 20px;
  border: 0;
  &.primary {
    color: #fff;
    background: $COLOR_ORANGE;
    border: $COLOR_ORANGE 1px solid;
  }
  &.secondary {
    color: $COLOR_ORANGE;
    background: $COLOR_WHITE;
    border: $COLOR_ORANGE 1px solid;
  }
  &:hover {
    opacity: 0.6;
    box-shadow: 1px 1px 2px $COLOR_BLACK;
    transition: all 0.2s;
  }
  &:active {
    opacity: 1;
    box-shadow: none;
  }
}
</style>
