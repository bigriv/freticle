import WriterSearch from "@/components/views/writer/WriterSearch.vue";

export default {
  title: "views/WriterSearch",
  component: WriterSearch,
};

const Template = (args) => ({
  components: { WriterSearch },
  setup() {
    return { args };
  },
  template: '<writer-search  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
