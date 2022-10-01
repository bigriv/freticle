import { app } from "@storybook/vue3";
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

library.add(faCalendarDays);
library.add(faCircleUser);
library.add(faMagnifyingGlass);
library.add(faXmark);

app.use(SetupCalendar, {});
app.use(vClickOutside);

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("DatePicker", DatePicker);
