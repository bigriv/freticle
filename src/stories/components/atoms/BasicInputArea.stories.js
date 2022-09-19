import BasicInputArea from "@/components/atoms/BasicInputArea.vue";

export default {
  title: "BasicInputArea",
  component: BasicInputArea,
};

const Template = (args) => ({
  components: { BasicInputArea },
  setup() {
    return { args };
  },
  template: '<basic-input-area  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { value: "テキスト", placeholder: "プレースホルダー" };

export const Disabled = Template.bind({});
Disabled.args = {
  value: "テキスト",
  placeholder: "プレースホルダー",
  disabled: true,
};
