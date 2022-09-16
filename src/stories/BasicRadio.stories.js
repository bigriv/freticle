import BasicRadio from "@/components/atoms/BasicRadio.vue";

export default {
  title: "BasicRadio",
  component: BasicRadio,
};

const Template = (args) => ({
  components: { BasicRadio },
  setup() {
    return { args };
  },
  template: '<basic-radio  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "radio",
  options: [
    { value: "1", label: "あ" },
    { value: "2", label: "い" },
    { value: "3", label: "う" },
  ],
  layout: "horizontal"
};

export const Vertical = Template.bind({});
Vertical.args = {
  name: "radio",
  options: [
    { value: "1", label: "あ" },
    { value: "2", label: "い" },
    { value: "3", label: "う" },
  ],
  layout: "vertical"
};
