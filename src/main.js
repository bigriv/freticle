import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarDays,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "v-calendar/dist/style.css";
import { SetupCalendar, DatePicker } from "v-calendar";

import vClickOutside from 'click-outside-vue3'

library.add(faCalendarDays);
library.add(faCircleUser);
library.add(faMagnifyingGlass);

createApp(App)
  .use(SetupCalendar, {})
  .use(vClickOutside)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('DatePicker', DatePicker)
  .mount("#app");
