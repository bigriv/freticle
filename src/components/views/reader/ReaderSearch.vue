<template>
  <div class="reader-search">
    <div class="title">検索</div>
    <div class="search-area">
      <SearchInput v-model="state.searchForm.title" />
      <div class="search-form-sort">
        <BasicSelect
          v-model="state.searchForm.sort"
          :options="sortOptions"
          placeholder="並び替え"
        />
      </div>
      <div class="search-form-desc">
        <BasicSwitch
          id="search-form-desc"
          v-model="state.searchForm.desc"
          type="secondary"
          :label="['↑', '↓']"
        />
      </div>
    </div>
    <div class="article-list">
      <div v-for="article in articleList" :key="article" class="article">
        <div class="article-title">
          {{ article.title }}
        </div>
        <div class="article-author">
          {{ article.author }}
        </div>
        <div class="article-outline">
          {{ article.outline }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import SearchInput from "@/components/molecules/SearchInput.vue";
import BasicSelect from "@/components/atoms/BasicSelect.vue";
import BasicSwitch from "@/components/atoms/BasicSwitch.vue";

export default defineComponent({
  components: { SearchInput, BasicSelect, BasicSwitch },
  setup() {
    const state = reactive({
      searchForm: {
        title: undefined,
        sort: undefined,
        desc: false,
      },
    });
    const sortOptions = [
      { value: "title", label: "五十音" },
      { value: "create_date", label: "作成日時" },
    ];
    const articleList = [
      {
        title: "記事1",
        author: "ユーザ1",
        outline:
          "概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要",
      },
      {
        title: "記事2",
        author: "ユーザ2",
        outline:
          "概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要",
      },
    ];
    return {
      state,
      sortOptions,
      articleList,
    };
  },
});
</script>

<style scoped lang="scss">
.reader-search {
  .title {
    font-size: 32rem;
    color: $COLOR_WHITE;
  }
  .search-area {
    margin-top: 20rem;
    display: flex;
    justify-content: space-between;
    .search-form-sort {
      width: 200rem;
      margin-left: 10rem;
    }
    .search-form-desc {
      width: 40rem;
      margin-left: 10rem;
    }
  }
  .article {
    margin-top: 20rem;
    background-color: $COLOR_WHITE;
    border: 4rem solid $COLOR_GRAY;
    border-radius: 10rem;
    padding: 10rem;
    + .article {
      margin-top: 10rem;
    }
    &-title {
      font-size: 16rem;
    }
    &-author {
      font-size: 12rem;
      margin-top: 4rem;
    }
    &-outline {
      font-size: 12rem;
      margin-top: 4rem;
    }
  }
}
</style>
