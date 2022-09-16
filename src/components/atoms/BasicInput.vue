<template>
  <input
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
input {
  width: 100%;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #ccc;
    color: #333;
    cursor: not-allowed;
  }
}
</style>
