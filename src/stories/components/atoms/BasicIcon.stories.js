import BasicIcon from "@/components/atoms/BasicIcon.vue";

export default {
  title: "BasicIcon",
  component: BasicIcon,
};

const Template = (args) => ({
  components: { BasicIcon },
  setup() {
    return { args };
  },
  template: '<basic-icon  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { icon: "circle-user" };
