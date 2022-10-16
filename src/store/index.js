import { createStore } from "vuex";
import { ACCOUNT_TYPE } from "@/composables/utils/const";

export default createStore({
  state: {
    accountType: ACCOUNT_TYPE.GUEST,
  },
  getters: {
    getAccountType(state) {
      return state.accountType;
    },
  },
  mutations: {
    setAccountType(state, value) {
      state.accountType = value;
    },
  },
  actions: {
    setAccountType(context, value) {
      context.commit("setAccountType", value);
    },
    logout(context) {
      context.commit("setAccountType", ACCOUNT_TYPE.GUEST);
    },
  },
  modules: {},
});
