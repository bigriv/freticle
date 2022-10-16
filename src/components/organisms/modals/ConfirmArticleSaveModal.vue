<template>
  <BasicModal v-model:isOpen="isModalOpen" size="small">
    <div class="modal-wrap">
      <div class="modal-head">公開状態を選択してください</div>
      <div class="caution-lead mgt-5">
        公開後は記事を更新できなくなります。一時保存する場合は非公開を選択してください。
      </div>
      <div class="mgt-20 flex-between">
        <div class="medium-content">
          <BasicSelect
            v-model="state.form.status"
            :options="publicStatusOptions"
            placeholder="選択してください"
          />
        </div>
        <div v-if="state.form.status == '02'" class="medium-content">
          <BasicInput v-model="state.form.password" placeholder="パスワード" />
        </div>
      </div>
      <div class="mgt-10 medium-content">
        <DateInput
          v-model="state.form.open_date"
          :format="DATE_FORMAT.YEAR_TO_MINUTES"
          mode="dateTime"
          placeholder="公開予定日時"
        />
      </div>
      <div class="button-list">
        <div class="small-content">
          <BasicButton
            type="secondary"
            label="キャンセル"
            @click="isModalOpen = false"
          />
        </div>
        <div class="small-content">
          <BasicButton type="primary" label="保存" @click="onSave" />
        </div>
      </div>
    </div>
  </BasicModal>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import BasicModal from "@/components/molecules/BasicModal.vue";
import BasicInput from "@/components/atoms/BasicInput.vue";
import BasicButton from "@/components/atoms/BasicButton.vue";
import BasicSelect from "@/components/atoms/BasicSelect.vue";
import DateInput from "@/components/molecules/DateInput.vue";
import { DATE_FORMAT } from "@/composables/utils/dateUtils";

export default defineComponent({
  components: {
    BasicModal,
    BasicInput,
    BasicButton,
    BasicSelect,
    DateInput,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["udpate:isOpen", "save"],
  setup(props, { emit }) {
    const state = reactive({
      form: {
        status: undefined,
        password: undefined,
      },
    });
    const isModalOpen = computed({
      get: () => props.isOpen,
      set: (newValue) => emit("update:isOpen", newValue),
    });
    const publicStatusOptions = [
      { value: "01", label: "非公開" },
      { value: "02", label: "鍵付き公開" },
      { value: "03", label: "会員限定公開" },
      { value: "04", label: "リンク限定公開" },
      { value: "09", label: "公開" },
    ];
    const onSave = () => {
      emit("save")
    };
    return {
      state,
      isModalOpen,
      publicStatusOptions,
      onSave,
      DATE_FORMAT,
    };
  },
});
</script>

<style scoped lang="scss">
.caution-lead {
  font-size: 11rem;
  color: $COLOR_CAUTION_RED;
}
.button-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}
</style>
