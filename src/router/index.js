import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJob from "@/views/AddJob.vue";
import JobDetail from "@/views/JobDetail.vue";
import NotFound from "@/views/NotFound.vue";
import EditJob from "@/views/EditJob.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/add-job",
      name: "add-job",
      component: AddJob,
    },
    {
      path: "/jobs/:id",
      name: "job details",
      component: JobDetail,
    },
    {
      path: "/job/:id/edit",
      name: "Edit Job",
      component: EditJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not-Found",
      component: NotFound,
    },
  ],
});

export default router;
