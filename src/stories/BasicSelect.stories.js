import BasicSelect from "@/components/atoms/BasicSelect.vue";

export default {
  title: "BasicSelect",
  component: BasicSelect,
};

const Template = (args) => ({
  components: { BasicSelect },
  setup() {
    return { args };
  },
  template: '<basic-select  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  value: "1",
  options: [
    { value: "1", label: "いち" },
    { value: "2", label: "に" },
    { value: "3", label: "さん" },
  ],
};
