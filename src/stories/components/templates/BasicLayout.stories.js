import BasicLayout from "@/components/templates/BasicLayout.vue";

export default {
  title: "templates/BasicLayout",
  component: BasicLayout,
};

const Template = (args) => ({
  components: { BasicLayout },
  setup() {
    return { args };
  },
  template: '<basic-layout  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
