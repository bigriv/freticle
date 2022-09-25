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
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
