<template>
  <teleport to="body">
    <transition>
      <div v-show="isModalOpen" class="basic-modal" :class="`size-${size}`">
        <div class="close-button" @click="onClose">
          <BasicIcon icon="xmark" size="small" />
        </div>
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent, computed } from "vue";
import BasicIcon from "@/components/atoms/BasicIcon.vue";

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  emits: ["update:isOpen", "close"],
  setup(props, { emit }) {
    const isModalOpen = computed({
      get: () => props.isOpen,
      set: (newValue) => emit("update:isOpen", newValue),
    });
    const onClose = () => {
      emit("close");
    };
    return {
      isModalOpen,
      onClose,
    };
  },
  components: { BasicIcon },
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.basic-modal {
  position: relative;
  padding: 36rem;
  border: 4rem solid $COLOR_BROWN;
  background-color: $COLOR_DARK_GREEN;
  color: $COLOR_WHITE;
  &.size {
    &-small {
      width: 600rem;
      height: 300rem;
    }
    &-medium {
      width: 800rem;
      height: 400rem;
    }
    &-large {
      width: 1000rem;
      height: 500rem;
    }
  }
  .close-button {
    position: absolute;
    top: 20rem;
    right: 20rem;
    min-width: 16rem;
    min-height: 16rem;
    cursor: pointer;
    border-radius: 100%;
    background-color: $COLOR_ORANGE;
    display: flex;
    justify-content: center;
    &::v-deep(.icon-wrap) {
      svg {
        vertical-align: middle;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
