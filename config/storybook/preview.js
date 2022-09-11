import { app } from '@storybook/vue3';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUser);

app.component('font-awesome-icon', FontAwesomeIcon)