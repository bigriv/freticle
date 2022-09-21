<template>
  <div class="input-wrap">
    <input
      v-model="value"
      type="text"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
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
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue),
    });
    const onFocus = () => {
      emit("focus");
    };
    const onBlur = () => {
      emit("blur");
    };
    return {
      value,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style scoped lang="scss">
.input-wrap {
  width: 100%;
  height: 36rem;
  input {
    width: 100%;
    height: 100%;
    padding: 8rem 12rem;
    background-color: $COLOR_LIGHT_GRAY;
    border: 4rem solid $COLOR_GRAY;
    &:focus {
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
