<template>
  <BasicModal v-model:isOpen="isModalOpen" size="small">
    <div class="modal-wrap">
      <div class="modal-head">ログイン</div>
      <div class="mgt-20">
        <BasicInput v-model="state.form.id" placeholder="ID" />
      </div>
      <div class="mgt-10">
        <BasicInput v-model="state.form.password" placeholder="パスワード" />
      </div>
      <div class="mgt-10">
        <span class="modal-link">パスワードをお忘れの方はこちら</span>
      </div>
      <div class="mgt-5">
        <span class="modal-link" @click="onSignup">新規会員登録はこちら</span>
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
          <BasicButton type="primary" label="ログイン" @click="onLogin" />
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
import { useStore } from "vuex";

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
  emits: ["update:isOpen", "login"],
  setup(props, { emit }) {
    const store = useStore()
    const state = reactive({
      form: {
        id: undefined,
        password: undefined,
      },
    });
    const isModalOpen = computed({
      get: () => props.isOpen,
      set: (newValue) => emit("update:isOpen", newValue),
    });
    const onLogin = () => {
      //TODO ログインAPI呼び出し
      loginApi()
      emit("login");
    };
    const loginApi = () => {
      store.dispatch('setAccountType', 'STANDARD_MEMBER')
    }
    return {
      state,
      isModalOpen,
      onLogin,
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
