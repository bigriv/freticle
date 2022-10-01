import SearchInput from "@/components/molecules/SearchInput.vue";

export default {
  title: "molecules/SearchInput",
  component: SearchInput,
};

const Template = (args) => ({
  components: { SearchInput },
  setup() {
    return { args };
  },
  template: '<search-input  v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { value: "テキスト", placeholder: "プレースホルダー" };

export const Disabled = Template.bind({});
Disabled.args = {
  value: "テキスト",
  placeholder: "プレースホルダー",
  disabled: true,
};
