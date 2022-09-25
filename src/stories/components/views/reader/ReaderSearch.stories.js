import ReaderSearch from "@/components/views/reader/ReaderSearch.vue";

export default {
  title: "ReaderSearch",
  component: ReaderSearch,
};

const Template = (args) => ({
  components: { ReaderSearch },
  setup() {
    return { args };
  },
  template: '<reader-search  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
