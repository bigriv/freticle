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
      <label :for="`${name}_${option.value}`">
        <span>
          {{ option.label }}
        </span>
      </label>
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
  .raido-wrap {
    height: 36rem;
    label {
      user-select: none;
      cursor: pointer;
      height: 100%;
      padding: 4rem 16rem;
      border: 1rem solid $COLOR_ORANGE;
      border-radius: 4rem;
      align-items: center;
      background-color: $COLOR_WHITE;
      color: $COLOR_ORANGE;
      transition: all 0.3s ease-out;
    }
    input[type="radio"] {
      display: none;
      &:checked {
        + label {
          background-color: $COLOR_ORANGE;
          color: $COLOR_WHITE;
        }
      }
    }
  }
  &.horizontal {
    flex-direction: row;
    .raido-wrap + .raido-wrap {
      margin-left: 8rem;
    }
    label {
      display: flex;
    }
  }
  &.vertical {
    flex-direction: column;
    .raido-wrap + .raido-wrap {
      margin-top: 8rem;
    }
    label {
      display: flex;
    }
  }
}
</style>
