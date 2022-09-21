<template>
  <div class="basic-radio" :class="layout">
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
.basic-radio {
  display: flex;
  padding: 8rem 4rem;
  .raido-wrap {
    input[type="radio"],
    label {
      margin: 0;
      cursor: pointer;
    }
    label {
      padding: 4rem 8rem;
      border: 1rem solid $COLOR_ORANGE;
      border-radius: 4rem;
    }
    input[type="radio"] {
      appearance: none;
      &:checked {
        + label {
          background-color: $COLOR_ORANGE;
          color: $COLOR_WHITE;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
}
.horizontal {
  flex-direction: row;
  .raido-wrap + .raido-wrap {
    margin-left: 8rem;
  }
}
.vertical {
  flex-direction: column;
  .raido-wrap + .raido-wrap {
    margin-top: 16rem;
  }
}
</style>
