import DateInput from "@/components/molecules/DateInput.vue";

export default {
  title: "DateInput",
  component: DateInput,
};

const Template = (args) => ({
  components: { DateInput },
  setup() {
    return { args };
  },
  template: '<date-input  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { format: "YYYY/MM/DD", mode: "date" };

export const DateTime = Template.bind({});
DateTime.args = { format: "YYYY/MM/DD HH:mm", mode: "dateTime" };
