<template>
  <div class="input-wrap">
    <textarea
      v-model="value"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
    />
  </div>
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
    rows: {
      type: Number,
      default: 5
    }
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
.input-wrap {
  width: 100%;
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 8rem 12rem;
    background-color: $COLOR_LIGHT_GRAY;
    border: 4rem solid $COLOR_GRAY;
    &:focus-visible {
      outline: none;
    }
    &:disabled {
      background-color: $COLOR_GRAY;
      color: $COLOR_DARK_GRAY;
      cursor: not-allowed;
    }
  }
}
</style>
