<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
    <q-card flat bordered>
      <q-carousel animated v-model="slide" arrows navigation infinite class="project-img">
        <q-carousel-slide
          v-for="(image, i) in project.images"
          :key="i"
          :name="i"
          :img-src="image.url"
        />
      </q-carousel>
      <q-card-section>
        <div v-if="project.url" class="text-h5">
          <a
            :href="project.url"
            target="_blank"
            class="project-title text-weight-light text-blue-grey-9"
          >{{project.title}}</a>
        </div>
        <div v-else class="text-h5 text-weight-light text-blue-grey-9">{{project.title}}</div>
        <span class="text-weight-light text-blue-grey-9">{{ project.description }}</span>
      </q-card-section>
      <q-card-section>
        <q-badge
          v-for="(technology, t) in project.technologys"
          :key="t"
          :color="technology.color"
          class="q-mr-sm text-weight-medium"
          :style="'background:' + technology.color + ';' + 'color:' + technology.textColor"
        >{{ technology.name }}</q-badge>
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
  height: 230px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: auto;
}
.project-title {
  text-decoration: none;
}
.project-title:hover {
  text-decoration: underline;
}
</style>
