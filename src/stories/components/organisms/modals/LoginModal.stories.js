import LoginModal from "@/components/organisms/modals/LoginModal.vue";

export default {
  title: "organisms/modals/LoginModal",
  component: LoginModal,
};

const Template = (args) => ({
  components: { LoginModal },
  setup() {
    return { args };
  },
  template: '<login-modal  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
