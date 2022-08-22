<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-11 col-sm-12 col-lg-9">
        <div class="row">
          <div class="col-8 q-pr-lg q-pb-lg">
            <q-img src="https://via.placeholder.com/700x400" fit="cover">
              <div class="row fit">
                <div class="col-12">
                  <h1 class="q-ma-none text-uppercase text-weight-bold text-h4 q-pt-xl">titulo</h1>
                  <div class="text-capitalize">
                    <small class="q-mr-md text-weight-bold">categoria</small> <small class="text-secondary">fecha</small>
                  </div>
                </div>
                <div class="col-8">
                  <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam aspernatur eius eum explicabo hic, modi qui quisquam recusandae sequi!.</p>
                  <q-btn size="lg" no-caps outline ripple color="secondary">
                    <span class="text-white">ver mas</span>
                  </q-btn>
                </div>
              </div>
            </q-img>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-12">
                <div class="text-center relative-position q-mb-sm">
                  <strong class="text-uppercase separator">
                    destacados
                  </strong>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="note-container">
                  <p class="q-ma-none ellipsis-2-lines"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum excepturi fugiat maiores nam nobis qui. </p>
                  <div class="q-py-sm"> <small class="q-mr-md text-weight-bold">categoria</small> <small class="text-secondary">fecha</small></div>
                  <q-separator />
                </div>
              </div>
              <div class="col-12">
                <div class="note-container">
                  <p class="q-ma-none ellipsis-2-lines"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum excepturi fugiat maiores nam nobis qui. </p>
                  <div class="q-py-sm"> <small class="q-mr-md text-weight-bold">categoria</small> <small class="text-secondary">fecha</small></div>
                  <q-separator />
                </div>
              </div>
              <div class="col-12">
                <div class="note-container">
                  <p class="q-ma-none ellipsis-2-lines"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum excepturi fugiat maiores nam nobis qui. </p>
                  <div class="q-py-sm"> <small class="q-mr-md text-weight-bold">categoria</small> <small class="text-secondary">fecha</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="q-py-md">
          <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
              <img src="https://cdn.quasar.dev/img/parallax1.jpg">
            </template>

            <h1 class="text-white">Docks</h1>
          </q-parallax>
        </div>
      </div>
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="col-11 col-sm-12 col-lg-9 bg-dark flex justify-between">
        <q-btn  color="dark" text-color="secondary" size="lg" ripple no-caps >
          JavaScript <q-icon name="mdi-language-javascript" color="yellow" class="q-pl-sm" size="sm" />
        </q-btn>
        <q-btn  color="dark" text-color="secondary" size="lg" ripple no-caps >
          PHP <q-icon name="mdi-language-php" color="indigo-3" class="q-pl-sm" size="sm" />
        </q-btn>
        <q-btn  color="dark" text-color="secondary"  size="lg" ripple no-caps >
          Vue <q-icon name="mdi-vuejs" color="secondary" class="q-pl-sm" size="sm" />
        </q-btn>
        <q-btn  color="dark" text-color="secondary" size="lg" ripple no-caps >
          NuxtJs <q-icon name="mdi-nuxt" class="q-pl-sm" color="secondary" size="sm" />
        </q-btn>
        <q-btn  color="dark" text-color="secondary" size="lg" ripple no-caps >
          Laravel <q-icon name="mdi-laravel" color="red-9" class="q-pl-sm" size="sm" />
        </q-btn>
        <q-btn  color="dark" text-color="secondary" size="lg" ripple no-caps >
          Nestjs <q-icon name="img:/icons/nestjs_icon.svg" color="red-9" class="q-pl-sm" size="sm" > </q-icon>
        </q-btn>

      </div>
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="q-pa-sm col-12 col-sm-12 col-lg-3">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="text-left relative-position">
            <div class="container fit flex justify-center content-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, similique?</p>
            </div>
          </q-img>

          <div class="absolute-bottom text-subtitle2 text-center">
            Title
          </div>
        </q-card>
      </div>
      <div class="q-pa-sm col-12 col-sm-12 col-lg-3">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="text-left relative-position">
            <div class="container fit flex justify-center content-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, similique?</p>
            </div>
          </q-img>

          <div class="absolute-bottom text-subtitle2 text-center">
            Title
          </div>
        </q-card>
      </div>
      <div class="q-pa-sm col-12 col-sm-12 col-lg-3">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="text-left relative-position">
            <div class="container fit flex justify-center content-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, similique?</p>
            </div>
          </q-img>

          <div class="absolute-bottom text-subtitle2 text-center">
            Title
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import GridPostsComponent from 'components/posts/GridComponent.vue';
const stars = ref(4)
</script>
<style>
.separator{
  position: relative;
}
.separator::before,
.separator::after{
  content: '';
  position: absolute;
  width: calc(100% - 1rem);
  background-color: #40c28a;
  height: 4px;
  top: 50%;
  transform: translateY(-50%);

}
.separator::before{
  left: 100%;
  margin-left: 1rem;
}
.separator::after{
  right: 100%;
  margin-right: 1rem;
}
.note-container{
  padding: 1rem 0;
}
</style>
