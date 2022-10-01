import GlobalHeader from "@/components/organisms/GlobalHeader.vue";

export default {
  title: "organisms/GlobalHeader",
  component: GlobalHeader,
};

const Template = (args) => ({
  components: { GlobalHeader },
  setup() {
    return { args };
  },
  template: '<global-header  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
