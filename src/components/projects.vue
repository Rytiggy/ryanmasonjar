<template>
  <div>
    <h4 class="text-center text-weight-bold text-blue-grey-8 q-mb-sm">
      Projects
    </h4>
    <div class="row projects">
      <q-separator color="blue-grey-2" class="col-12 q-mb-lg" />
      <project
        v-for="(proj, index) in visibleProjects"
        :key="index"
        :project="proj"
        :index="index"
      />
      <q-slide-transition>
        <div class="row" v-show="showMoreProjects">
          <project
            v-for="(proj, index) in hiddenProjects"
            :key="index"
            :project="proj"
            :index="index"
          />
        </div>
      </q-slide-transition>
      <div class="col-12 text-center">
        <q-btn
          v-on:click="viewMoreProjects()"
          :label="viewMoreProjectsLabel"
          color="blue-grey-8"
          flat
          size="md"
          class="q-mt-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import project from "./project.vue";

export default {
  props: ["projects"],
  components: {
    project
  },
  data() {
    return {
      showMoreProjects: false,
      viewMoreProjectsLabel: "View More"
    };
  },
  computed: {
    visibleProjects: function() {
      return this.projects.filter((project, index) => index <= 5);
    },
    hiddenProjects: function() {
      return this.projects.filter((project, index) => index > 5);
    }
  },
  methods: {
    viewMoreProjects() {
      if (this.showMoreProjects) {
        this.viewMoreProjectsLabel = "View More";
      } else {
        this.viewMoreProjectsLabel = "View Less";
      }
      this.showMoreProjects = !this.showMoreProjects;
    }
  }
};
</script>

<style></style>
