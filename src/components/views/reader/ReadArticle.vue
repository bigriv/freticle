<template>
  <div class="read-article">
    <div class="article-title">
      {{ state.article.title }}
    </div>
    <div class="article-body">
      {{ state.article.body }}
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  components: {},
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const state = reactive({
      article: {
        title: undefined,
        body: undefined,
      },
    });
    const callGetApi = () => {
      console.log(props.id);
      const mockData = {
        title: "件名1",
        status: "01",
        outline:
          "概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要",
        body: "本文本文本文本文本文本文本文本文本文\n本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文\n本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文\nn本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
      };
      for (const key of Object.keys(state.article)) {
        state.article[key] = mockData[key];
      }
    };
    onMounted(() => {
      callGetApi();
    });

    return {
      state,
    };
  },
});
</script>

<style scoped lang="scss">
.read-article {
  .article {
    &-title {
      font-size: 32rem;
      color: $COLOR_WHITE;
    }
    &-body {
      margin-top: 20rem;
      font-size: 14rem;
      font-weight: 400;
      color: $COLOR_WHITE;
      white-space: break-spaces;
    }
  }
  .button-list-wrap {
    margin-top: 40rem;
    display: flex;
    justify-content: space-between;
    .button-list {
      display: flex;
      justify-content: space-between;
      width: 360rem;
    }
  }
}
</style>
