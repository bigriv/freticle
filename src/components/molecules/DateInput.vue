<template>
  <div
    ref="date_input"
    class="date-input-wrap"
    @click="state.isShowCalender = true"
    v-click-outside="() => (state.isShowCalender = false)"
  >
    <div class="input-text-box">
      <BasicInput v-model="state.date" :readonly="true" :placeholder="placeholder" type="text" />
      <BasicIcon icon="calendar-days" class="calender-icon" />
    </div>
    <transition>
      <DatePicker
        v-show="state.isShowCalender"
        v-model="value"
        :mode="mode"
        class="calender"
        is24hr
      />
    </transition>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import BasicInput from "@/components/atoms/BasicInput.vue";
import BasicIcon from "@/components/atoms/BasicIcon.vue";
import {
  DATE_FORMAT,
  convertDateToString,
} from "@/composables/utils/dateUtils";

export default defineComponent({
  components: { BasicIcon, BasicInput },
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    format: {
      type: String,
      default: DATE_FORMAT.YEAR_TO_DAY,
    },
    mode: {
      type: String,
      default: "date",
      validator: (value) => {
        return ["date", "dateTime"].includes(value);
      },
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      isShowCalender: false,
      date: props.modelValue,
    });
    const value = computed({
      get: () => props.modelValue,
      set: (newValue) => {
        const date = convertDateToString(newValue, props.format);
        state.date = date;
        return emit("update:modelValue", date);
      },
    });

    return {
      state,
      value,
    };
  },
});
</script>

<style scoped lang="scss">
.date-input-wrap {
  width: 100%;
  position: relative;
  .input-text-box {
    width: 100%;
    position: relative;
    ::v-deep(input[type="text"]) {
      cursor: pointer;
    }

    .calender-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 8rem;
      color: $COLOR_GRAY;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease-out;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-8rem);
  }
  .v-enter-to,
  .v-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .calender {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0rem;
    transform: translate(100%, -50%);
  }
}
</style>
