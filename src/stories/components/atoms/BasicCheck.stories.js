import BasicCheck from "@/components/atoms/BasicCheck.vue";

export default {
  title: "atoms/BasicCheck",
  component: BasicCheck,
};

const Template = (args) => ({
  components: { BasicCheck },
  setup() {
    return { args };
  },
  template: '<basic-check  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { id: "check-box", type: "primary", label: "チェック" };

