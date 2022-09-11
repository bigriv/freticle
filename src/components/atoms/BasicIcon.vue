<template>
  <font-awesome-icon :icon="icon" />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) => {
        return ["circle-user"].includes(value);
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
