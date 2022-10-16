<template>
  <div class="writer-search">
    <div class="title">
      <span> あなたの記事 </span>
      <div class="middle-button">
        <BasicButton
          label="記事を書く"
          type="primary"
          @click="onMoveCreateArticle"
        />
      </div>
    </div>
    <div class="search-area">
      <SearchInput v-model="state.searchForm.title" />
      <div class="search-form-sort">
        <BasicSelect
          v-model="state.searchForm.status"
          :options="statusOptions"
          placeholder="公開状態"
        />
      </div>
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
        <div class="article-status">
          {{ article.status }}
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
import BasicButton from "@/components/atoms/BasicButton.vue";
import SearchInput from "@/components/molecules/SearchInput.vue";
import BasicSelect from "@/components/atoms/BasicSelect.vue";
import BasicSwitch from "@/components/atoms/BasicSwitch.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { BasicButton, SearchInput, BasicSelect, BasicSwitch },
  setup() {
    const router = useRouter();
    const state = reactive({
      searchForm: {
        title: undefined,
        status: undefined,
        sort: undefined,
        desc: false,
      },
    });
    const statusOptions = [
      { value: "01", label: "公開" },
      { value: "02", label: "非公開" },
    ];
    const sortOptions = [
      { value: "title", label: "五十音" },
      { value: "create_date", label: "作成日時" },
    ];
    const articleList = [
      {
        title: "記事1",
        status: "公開",
        outline:
          "概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要",
      },
      {
        title: "記事2",
        status: "非公開",
        outline:
          "概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要",
      },
    ];
    const onMoveCreateArticle = () => {
      router.push({ name: "CreateArticle" });
    };
    return {
      state,
      statusOptions,
      sortOptions,
      articleList,
      onMoveCreateArticle,
    };
  },
});
</script>

<style scoped lang="scss">
.writer-search {
  .title {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 32rem;
      color: $COLOR_WHITE;
    }
    .middle-button {
      width: 150rem;
    }
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
    &-status {
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
