<template>
  <teleport to="body">
    <transition appear>
      <div v-show="isModalOpen" class="modal-outer-wrap">
        <div class="modal-background" />
        <div class="modal-inner-wrap">
          <div class="basic-modal" :class="`size-${size}`">
            <div class="close-button" @click="onClose">
              <BasicIcon icon="xmark" size="small" />
            </div>
            <slot />
          </div>
        </div>
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
      isModalOpen.value = false;
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
  transition: opacity 0.3s ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.modal-outer-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .modal-background {
    background-color: $COLOR_BLACK;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
  .modal-inner-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .basic-modal {
      position: relative;
      padding: 36rem 60rem;
      border: 4rem solid $COLOR_BROWN;
      background-color: $COLOR_DARK_GREEN;
      color: $COLOR_WHITE;
      width: 100%;
      height: 100%;
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
  }
}
</style>
