import BasicSwitch from "@/components/atoms/BasicSwitch.vue";

export default {
  title: "BasicSwitch",
  component: BasicSwitch,
};

const Template = (args) => ({
  components: { BasicSwitch },
  setup() {
    return { args };
  },
  template: '<basic-switch  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { id: "switch", type: "primary", label: ["↑", "↓"] };

export const Secondary = Template.bind({});
Secondary.args = { id: "switch", type: "secondary", label: ["↑", "↓"] };
