import { createRouter, createWebHashHistory } from "vue-router";
import BasicLayout from "@/components/templates/BasicLayout.vue";

const routes = [
  {
    path: "",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "ReaderSearch",
        component: () => import("@/components/views/reader/ReaderSearch.vue"),
      },
      {
        path: "article",
        name: "ReadArticle",
        component: () => import("@/components/views/reader/ReadArticle.vue"),
      },
    ],
  },
  {
    path: "/mypage",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "WriterSearch",
        component: () => import("@/components/views/writer/WriterSearch.vue"),
      },
      {
        path: "write",
        name: "CreateArticle",
        component: () => import("@/components/views/writer/CreateArticle.vue"),
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
