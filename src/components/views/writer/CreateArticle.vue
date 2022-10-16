<template>
  <div class="create-article">
    <div class="form-title">
      <BasicInput v-model="state.form.title" placeholder="タイトル" />
    </div>
    <div class="form-outline">
      <BasicInput v-model="state.form.outline" placeholder="概要" />
    </div>
    <div class="form-body">
      <BasicInputArea v-model="state.form.body" :rows="15" placeholder="本文" />
    </div>
    <div class="button-list-wrap">
      <div class="small-content">
        <BasicButton type="secondary" label="戻る" @click="onBack" />
      </div>
      <div class="button-list">
        <div class="small-content">
          <BasicButton type="secondary" label="プレビュー" />
        </div>
        <div class="small-content">
          <BasicButton
            type="primary"
            label="保存"
            @click="state.isModelOpen = true"
          />
        </div>
      </div>
    </div>
  </div>
  <ConfirmArticleSaveModal v-model:isOpen="state.isModelOpen" @save="onSave" />
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import BasicInput from "@/components/atoms/BasicInput.vue";
import BasicInputArea from "@/components/atoms/BasicInputArea.vue";
import BasicButton from "@/components/atoms/BasicButton.vue";
import ConfirmArticleSaveModal from "@/components/organisms/modals/ConfirmArticleSaveModal.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    BasicInput,
    BasicInputArea,
    BasicButton,
    ConfirmArticleSaveModal,
  },
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const router = useRouter();
    const state = reactive({
      isModelOpen: false,
      form: {
        title: undefined,
        status: undefined,
        outline: undefined,
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
        body: "本文本文本文本文本文本文本文本文本文\n本文本文本文本文本文本文本文本文本文\n本文本文本文本文本文本文本文本文本文\n",
      };
      for (const key of Object.keys(state.form)) {
        state.form[key] = mockData[key];
      }
    };
    onMounted(() => {
      if (props.id) {
        callGetApi();
      }
    });
    const onBack = () => {
      router.go(-1);
    };
    const onSave = () => {
      // TODO:記事登録or更新API呼び出し
      state.isModelOpen = false;
    };
    return {
      state,
      onBack,
      onSave,
    };
  },
});
</script>

<style scoped lang="scss">
.create-article {
  .form {
    &-title {
      font-size: 32rem;
      color: $COLOR_WHITE;
    }
    &-outline {
      margin-top: 20rem;
    }
    &-body {
      margin-top: 20rem;
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
