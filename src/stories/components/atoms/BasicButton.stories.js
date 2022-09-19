import BasicButton from "@/components/atoms/BasicButton.vue";

export default {
  title: "BasicButton",
  component: BasicButton,
};

const Template = (args) => ({
  components: { BasicButton },
  setup() {
    return { args };
  },
  template: '<basic-button  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { label: "ボタン", type: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "ボタン", type: "secondary" };
