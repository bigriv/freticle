<template>
  <BasicModal v-model:isOpen="isModalOpen" size="medium">
    <div class="modal-wrap">
      <div class="modal-head">会員登録</div>
      <div class="mgt-30">
        <BasicInput v-model="state.form.id" placeholder="ID" />
      </div>
      <div class="mgt-10">
        <BasicInput v-model="state.form.name" placeholder="ユーザ名" />
      </div>
      <div class="mgt-10">
        <BasicInput v-model="state.form.password" placeholder="パスワード" />
      </div>
      <div class="mgt-10">
        <BasicInput
          v-model="state.form.password_confirm"
          placeholder="パスワード確認"
        />
      </div>
      <div class="button-list mgt-40">
        <div class="small-content">
          <BasicButton
            type="secondary"
            label="キャンセル"
            @click="isModalOpen = false"
          />
        </div>
        <div class="small-content">
          <BasicButton type="primary" label="会員登録" @click="onSignup" />
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

export default defineComponent({
  components: {
    BasicModal,
    BasicInput,
    BasicButton,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:isOpen", "signup"],
  setup(props, { emit }) {
    const state = reactive({
      form: {
        id: undefined,
        name: undefined,
        password: undefined,
        password_confirm: undefined,
      },
    });
    const isModalOpen = computed({
      get: () => props.isOpen,
      set: (newValue) => emit("update:isOpen", newValue),
    });
    const onSignup = () => {
      // TODO: 会員登録API呼び出し
      emit("signup");
    };
    return {
      state,
      isModalOpen,
      onSignup,
    };
  },
});
</script>

<style scoped lang="scss">
.button-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}
</style>
