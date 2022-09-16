<template>
  <textarea
    v-model="value"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue),
    });
    return {
      value,
    };
  },
});
</script>
<style scoped lang="scss">
textarea {
  resize: none;
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  background-color: $COLOR_LIGHT_GRAY;
  border: none;
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    background-color: $COLOR_GRAY;
    color: $COLOR_DARK_GRAY;
    cursor: not-allowed;
  }
}
</style>
