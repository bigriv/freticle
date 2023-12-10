<template>
  <div class="checkbox-wrap" :class="type">
    <input :id="id" v-model="value" type="checkbox" />
    <label :for="id">
      <span>
        {{ label }}
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
        return ["primary"].includes(value);
      },
    },
    label: {
      tpye: String,
      default: "",
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
.checkbox-wrap {
  height: 36rem;
  input[type="checkbox"] {
    display: none;
  }
  label {
    cursor: pointer;
  }
  &.primary {
    position: relative;
    label {
      padding-left: 20rem;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 16rem;
        height: 16rem;
        background-color: $COLOR_WHITE;
        border: 1rem solid $COLOR_DARK_GRAY;
        box-sizing: border-box;
      }
    }
    input[type="checkbox"] + label {
      &::after {
        content: "";
        transition: all 0.3s ease-in-out;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0rem;
        width: 12rem;
        height: 8rem;
        transform: rotate(-30deg);
        border-bottom: 3rem solid $COLOR_BLACK;
        border-left: 3rem solid $COLOR_BLACK;
      }
    }
    input[type="checkbox"]:checked + label {
      &::after {
        opacity: 1;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
