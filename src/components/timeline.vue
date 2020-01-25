<template>
  <div>
    <h4 class="text-center text-weight-bold text-blue-grey-8 q-mb-sm">
      {{ heading }}
    </h4>
    <div class="row">
      <q-separator color="blue-grey-2" class="col-12 q-mb-lg" />
    </div>
    <q-list>
      <q-item v-for="(event, index) in timeline" :key="index">
        <q-item-section class="gt-xs" thumbnail top>
          <a class="q-pt-sm" :href="event.url" target="_blank">
            <img :src="event.logo" />
          </a>
        </q-item-section>
        <q-item-section>
          <img class="lt-sm timeline-logo" :src="event.logo" />
          <div v-for="(role, r) in event.roles" :key="r">
            <div class="text-h6 text-blue-grey-8">
              {{ role.title }}
            </div>
            <div class="text-subtitle1 text-blue-grey-8">
              {{ role.date }}
            </div>
            <p
              class="text-weight-light text-blue-grey-9"
              v-html="role.description"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["timeline", "heading"]
};
</script>

<style>
.q-item__section--thumbnail img {
  width: 100px;
  height: unset;
}

.timeline-logo {
  width: 100px;
}
</style>
