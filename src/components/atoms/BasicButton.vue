<template>
  <div class="button-wrap">
    <button type="button" :class="type" @click="onClick">
      <span>
        {{ label }}
      </span>
    </button>
  </div>
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
.button-wrap {
  width: 100%;
  height: 36rem;
  button {
    width: 100%;
    height: 100%;
    user-select: none;
    cursor: pointer;
    padding: 4rem 12rem;
    border: 0;
    &.primary {
      color: #fff;
      background-color: $COLOR_ORANGE;
      border: $COLOR_ORANGE 1rem solid;
    }
    &.secondary {
      color: $COLOR_ORANGE;
      background-color: $COLOR_WHITE;
      border: $COLOR_ORANGE 1rem solid;
    }
    &:hover {
      box-shadow: 1rem 1rem 2rem $COLOR_BLACK;
      transition: all 0.2s;
    }
    &:active {
      box-shadow: none;
      transform: translate(1rem, 1rem);
    }
  }
}
</style>
