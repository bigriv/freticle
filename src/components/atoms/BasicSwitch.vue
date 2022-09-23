<template>
  <div class="switch-wrap" :class="type">
    <input :id="id" v-model="value" type="checkbox" />
    <label :for="id">
      <span v-if="value">
        {{ label[0] }}
      </span>
      <span v-else>
        {{ label[1] }}
      </span>
    </label>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: (value) => {
        return ["primary", "secondary"].includes(value);
      },
    },
    label: {
      tpye: Array,
      default: () => [],
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
.switch-wrap {
  height: 36rem;
  position: relative;
  input[type="checkbox"] {
    display: none;
  }
  label {
    user-select: none;
    cursor: pointer;
    height: 100%;
    padding: 4rem 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.primary {
    label {
      border: 1rem solid $COLOR_ORANGE;
      border-radius: 4rem;
      color: $COLOR_ORANGE;
      transition: all 0.3s ease-out;
    }
    input[type="checkbox"] {
      &:checked {
        + label {
          background-color: $COLOR_ORANGE;
          color: $COLOR_WHITE;
        }
      }
    }
  }
  &.secondary {
    label {
      background-color: $COLOR_LIGHT_GRAY;
      border: 4rem solid $COLOR_GRAY;
      color: $COLOR_BLACK;
      transition: all 0.3s ease-out;
    }
  }
}
</style>
