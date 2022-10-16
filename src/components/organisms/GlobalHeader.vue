<template>
  <header>
    <div class="header-wrap">
      <div class="header-logo">freticle</div>
      <div class="header-option">
        <div class="header-option-icon" @click="onMoveReaderSearch">
          <BasicIcon icon="magnifying-glass" size="large" color="white" />
        </div>
        <div
          v-if="state.accountType !== ACCOUNT_TYPE.GUEST"
          class="header-option-icon mgl-20"
          @click="onMoveMypage"
        >
          <BasicIcon icon="circle-user" size="large" color="white" />
        </div>
        <div class="minimum-content mgl-20">
          <BasicButton
            v-if="state.accountType == ACCOUNT_TYPE.GUEST"
            type="primary"
            label="ログイン"
            @click="state.isLoginModalOpen = true"
          />
          <BasicButton
            v-else
            type="primary"
            label="ログアウト"
            @click="onLogout"
          />
        </div>
      </div>
    </div>
  </header>
  <LoginModal v-model:isOpen="state.isLoginModalOpen" @login="onLogin" />
  <SignupModal v-model:isOpen="state.isSignupModalOpen" @signup="onSignup" />
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import BasicIcon from "@/components/atoms/BasicIcon.vue";
import BasicButton from "@/components/atoms/BasicButton.vue";
import LoginModal from "@/components/organisms/modals/LoginModal.vue";
import SignupModal from "@/components/organisms/modals/SignupModal.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ACCOUNT_TYPE } from "@/composables/utils/const";

export default defineComponent({
  components: { BasicIcon, BasicButton, LoginModal, SignupModal },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      accountType: computed(() => store.getters["getAccountType"]),
      isLoginModalOpen: false,
      isSignupModalOpen: false,
    });
    const onMoveReaderSearch = () => {
      router.push({ name: "ReaderSearch" });
    };
    const onMoveMypage = () => {
      router.push({ name: "WriterSearch" });
    };
    const onSignup = () => {
      state.isLoginModalOpen = false;
      state.isSignupModalOpen = true;
    };
    const onLogin = () => {
      state.isLoginModalOpen = false;
    };
    const onLogout = () => {
      store.dispatch("logout");
    };
    return {
      state,
      onMoveReaderSearch,
      onMoveMypage,
      onSignup,
      onLogin,
      onLogout,
      ACCOUNT_TYPE,
    };
  },
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 44rem;
  background-color: $COLOR_BROWN;
  padding: 4rem;
  .header-wrap {
    display: flex;
    justify-content: space-between;
    .header-logo {
      font-size: 28rem;
      cursor: pointer;
      color: $COLOR_WHITE;
    }
    .header-option {
      display: flex;
      .header-option-icon {
        cursor: pointer;
        + .header-option-icon {
          margin-left: 16rem;
        }
      }
    }
  }
}
</style>
