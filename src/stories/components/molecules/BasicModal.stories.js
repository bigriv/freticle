import BasicModal from "@/components/molecules/BasicModal.vue";

export default {
  title: "molecules/BasicModal",
  component: BasicModal,
};

const Template = (args) => ({
  components: { BasicModal },
  setup() {
    return { args };
  },
  template: `<basic-modal  v-bind="args">
    <h1>タイトル</h1>
    <div>
        コンテンツ
    </div>
    <div>
        コンテンツ
    </div>
    <div>
        コンテンツ
    </div>
  </basic-modal>
  `,
});

export const Default = Template.bind({});
Default.args = { isOpen: false };

export const Small = Template.bind({});
Small.args = { isOpen: false, size: "small" };

export const Large = Template.bind({});
Large.args = { isOpen: false, size: "large" };
