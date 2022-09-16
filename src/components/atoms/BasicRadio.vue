<template>
  <div :class="layout">
    <div v-for="option in options" :key="option" class="raido-wrap">
      <input
        :id="`${name}_${option.value}`"
        v-model="value"
        type="radio"
        :name="name"
        :value="option.value"
      />
      <label :for="`${name}_${option.value}`">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    layout: {
      type: String,
      default: "horizontal",
      validator: (value) => {
        return ["horizontal", "vertical"].includes(value);
      },
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
.horizontal {
  display: flex;
  .raido-wrap + .raido-wrap {
    margin-left: 8px;
  }
}
.vertical {
  .raido-wrap + .raido-wrap {
    margin-top: 16px;
  }
}
input[type="radio"],
label {
  margin: 0;
  cursor: pointer;
}
input[type="radio"] {
  appearance: none;
  + label {
    padding: 4px 8px;
    border: 1px solid #ff7a00;
    border-radius: 4px;
  }
  &:checked {
    + label {
      background-color: #ff7a00;
      color: #fff;
      transition: all 0.3s ease-out;
    }
  }
}
</style>
