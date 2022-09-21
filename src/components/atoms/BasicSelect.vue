<template>
  <div class="select-wrap" @click="state.isShowOptions = !state.isShowOptions">
    <button class="select-box">{{ state.label }}</button>
    <transition>
      <div v-show="state.isShowOptions" class="select-options">
        <button
          v-for="option in options"
          :key="option"
          class="select-options-item"
          @click="onChageValue(option)"
        >
          {{ option.label }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      isShowOptions: false,
      label: props.placeholder,
    });
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue),
    });
    const onChageValue = (selected) => {
      value.value = selected.value;
      state.label = selected.label;
    };
    return {
      state,
      value,
      onChageValue,
    };
  },
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-8rem);
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);

}
.select-wrap {
  position: relative;
  width: 100%;
  height: 36rem;
  overflow: visible;
  .select-box {
    width: 100%;
    height: 100%;
    text-align: left;
    cursor: pointer;
    background-color: $COLOR_LIGHT_GRAY;
    border: 4rem solid $COLOR_GRAY;
    &::after {
      content: "";
      border-top: 15rem solid $COLOR_GRAY;
      border-right: 8rem solid transparent;
      border-left: 8rem solid transparent;
      position: absolute;
      top: 50%;
      right: 8rem;
      transform: translateY(-50%);
      width: 0;
      height: 0;
    }
  }
  .select-options {
    border: 4rem solid $COLOR_GRAY;
    margin-top: 8rem;
    .select-options-item {
      padding: 4rem 4rem;
      width: 100%;
      border: none;
      display: block;
      text-align: left;
      background-color: $COLOR_LIGHT_GRAY;
      &:hover {
        background-color: $COLOR_DARK_GRAY;
        cursor: pointer;
      }
    }
  }
}
</style>
