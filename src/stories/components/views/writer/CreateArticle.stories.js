import CreateArticle from "@/components/views/writer/CreateArticle.vue";

export default {
  title: "views/CreateArticle",
  component: CreateArticle,
};

const Template = (args) => ({
  components: { CreateArticle },
  setup() {
    return { args };
  },
  template: '<create-article  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
