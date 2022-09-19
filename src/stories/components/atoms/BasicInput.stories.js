import BasicInput from "@/components/atoms/BasicInput.vue";

export default {
  title: "BasicInput",
  component: BasicInput,
};

const Template = (args) => ({
  components: { BasicInput },
  setup() {
    return { args };
  },
  template: '<basic-input  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { value: "テキスト", placeholder: "プレースホルダー" };

export const Disabled = Template.bind({});
Disabled.args = {
  value: "テキスト",
  placeholder: "プレースホルダー",
  disabled: true,
};
