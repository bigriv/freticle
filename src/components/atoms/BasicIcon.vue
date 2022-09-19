<template>
  <div>
    <font-awesome-icon :icon="icon" />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
