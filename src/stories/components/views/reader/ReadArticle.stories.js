import ReadArticle from "@/components/views/reader/ReadArticle.vue";

export default {
  title: "views/ReadArticle",
  component: ReadArticle,
};

const Template = (args) => ({
  components: { ReadArticle },
  setup() {
    return { args };
  },
  template: '<read-article  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
