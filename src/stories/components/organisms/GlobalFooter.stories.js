import GlobalFooter from "@/components/organisms/GlobalFooter.vue";

export default {
  title: "GlobalFooter",
  component: GlobalFooter,
};

const Template = (args) => ({
  components: { GlobalFooter },
  setup() {
    return { args };
  },
  template: '<global-footer  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
