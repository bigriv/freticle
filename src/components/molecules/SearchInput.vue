<template>
  <div class="search-input-wrap">
    <BasicInput
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @keydown.enter="onSearch"
    />
    <BasicIcon icon="magnifying-glass" class="search-icon" />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import BasicInput from "@/components/atoms/BasicInput.vue";
import BasicIcon from "@/components/atoms/BasicIcon.vue";

export default defineComponent({
  components: { BasicIcon, BasicInput },
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
  emits: ["update:modelValue", "search"],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue),
    });
    const onSearch = () => {
      emit("search");
    };
    return {
      value,
      onSearch,
    };
  },
});
</script>

<style scoped lang="scss">
.search-input-wrap {
  width: 100%;
  position: relative;
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
  }
}
</style>
