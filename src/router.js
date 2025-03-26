import { createMemoryHistory, createRouter } from "vue-router";
import Dashboard from "./components/pages/Dashboard.vue";
import CoordinatorAssignment from "./components/pages/CoordinatorAssignment.vue";
import MentorAssignment from "./components/pages/MentorAssignment.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/coordinator/:id", component: CoordinatorAssignment },
  { path: "/mentor/:id", component: MentorAssignment },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
