import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarDays,
  faCircleUser,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "v-calendar/dist/style.css";
import { SetupCalendar, DatePicker } from "v-calendar";

import vClickOutside from "click-outside-vue3";

import router from "@/router";
import store from './store'

library.add(faCalendarDays);
library.add(faCircleUser);
library.add(faMagnifyingGlass);
library.add(faXmark);

createApp(App).use(store)
  .use(SetupCalendar, {})
  .use(vClickOutside)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("DatePicker", DatePicker)
  .mount("#app");
