<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pa-sm project-col">
    <q-card flat bordered class="project-card">
      <q-carousel autoplay animated v-model="slide" navigation infinite class="project-img" control-color="grey-6">
        <q-carousel-slide v-for="(image, i) in project.images" :key="i" class="q-pa-none overflow-none" :name="i">
          <q-img class="full-width q-pa-none" :src="image.url" />
        </q-carousel-slide>
      </q-carousel>
      <q-card-section>
        <div v-if="project.url" class="text-h5">
          <a :href="project.url" target="_blank" class="project-title text-weight-light text-blue-grey-9">{{
            project.title }}</a>
        </div>
        <div v-else class="text-h5 text-weight-light text-blue-grey-9">
          {{ project.title }}
        </div>
        <span class="text-weight-light text-blue-grey-9">{{
          project.description
          }}</span>
      </q-card-section>
      <q-card-section class="project-badges">
        <q-badge v-for="(technology, t) in project.technologies" :key="t" :color="technology.color"
          class="q-mr-sm text-weight-medium" :style="'background:' +
            technology.color +
            ';' +
            'color:' +
            technology.textColor
            ">{{ technology.name }}</q-badge>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["project", "index"],
  data() {
    return {
      slide: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
.project-img {
  width: 100%;
  height: 230px;
  /* fixed safe crop height */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: auto;
  overflow: hidden;
  position: relative;
}

.q-carousel {
  margin: 0
}

.project-img .q-carousel__slides,
.project-img .q-carousel-slide,
.project-img .q-img {
  height: 100% !important;
}

.project-img .q-img__content,
.project-img .q-img__image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

.project-title {
  text-decoration: none;
}

.project-title:hover {
  text-decoration: underline;
}

.overflow-none {
  overflow: hidden;
}

/* Make each project column/card the same height */
.project-col {
  display: flex;
}

.project-card {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  min-height: 420px;
  position: relative;
  padding-bottom: 56px;
  /* reduced space so badges sit closer to the bottom edge */
}

/* push badges section to the bottom so card bodies align */
.project-card>.q-card-section {
  /* by default sections don't flex; we'll make the main section grow */
  flex: 0 0 auto;
}

/* let the primary content section expand to push the badges down */
.project-card>.q-card-section:first-of-type {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}


.project-badges {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* small spacing for badges */
.project-card .q-badge {
  margin-right: 0.5rem;
}
</style>
