<template>
  <div
    ref="date_input"
    class="date-input-wrap"
    @click="state.isShowCalender = true"
    v-click-outside="() => (state.isShowCalender = false)"
  >
    <div class="input-text-box">
      <BasicInput v-model="state.date" :readonly="true" type="text" />
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
    input {
      width: 100%;
      padding: 8px 12px;
      background-color: $COLOR_LIGHT_GRAY;
      border: none;
      &:focus {
        outline: none;
      }
      &:disabled {
        background-color: $COLOR_GRAY;
        color: $COLOR_DARK_GRAY;
        cursor: not-allowed;
      }
    }
    .calender-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease-out;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
  .v-enter-to,
  .v-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .calender {
    position: absolute;
    top: 50px;
    left: 0;
  }
}
</style>
