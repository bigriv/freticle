import SignupModal from "@/components/organisms/modals/SignupModal.vue";

export default {
  title: "organisms/modals/SignupModal",
  component: SignupModal,
};

const Template = (args) => ({
  components: { SignupModal },
  setup() {
    return { args };
  },
  template: '<signup-modal  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
