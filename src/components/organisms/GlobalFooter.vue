<template>
  <footer>
    <div class="footer-wrap">
      <div class="footer-links">
        <div v-for="link in links" :key="link" class="link">
          {{ link.label }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const links = [
      {
        label: "利用規約",
        name: "terms",
      },
      {
        label: "個人情報保護方針",
        name: "privacy",
      },
      {
        label: "FAQ",
        name: "faq",
      },
      {
        label: "お問合せ",
        name: "contact",
      },
    ];
    return {
      links,
    };
  },
});
</script>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 30px;
  background-color: $COLOR_BROWN;
  padding: 8px;
  .footer-wrap {
    display: flex;
    justify-content: flex-end;
    .footer-links {
      display: flex;
      .link {
        color: $COLOR_WHITE;
        font-size: 10px;
        font-weight: 300;
        + .link {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
