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
Default.args = { placeholder: "プレースホルダー" };

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "プレースホルダー",
  disabled: true,
};
