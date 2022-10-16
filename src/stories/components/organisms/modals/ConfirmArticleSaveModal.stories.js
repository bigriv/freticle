import ConfirmArticleSaveModal from "@/components/organisms/modals/ConfirmArticleSaveModal.vue";

export default {
  title: "organisms/modals/ConfirmArticleSaveModal",
  component: ConfirmArticleSaveModal,
};

const Template = (args) => ({
  components: { ConfirmArticleSaveModal },
  setup() {
    return { args };
  },
  template: '<confirm-article-save-modal  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
