import BasicInput from "@/components/atoms/BasicInput.vue";

export default {
  title: "atoms/BasicInput",
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
Default.args = { placeholder: "プレースホルダー" };

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "プレースホルダー",
  disabled: true,
};
