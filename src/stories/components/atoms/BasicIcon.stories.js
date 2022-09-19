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

export const Red = Template.bind({});
Red.args = { icon: "circle-user", color: "red" };

export const Small = Template.bind({});
Small.args = { icon: "circle-user", color: "black", size: "small" };

export const Large = Template.bind({});
Large.args = { icon: "circle-user", color: "black", size: "large" };
