<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-11 col-sm-12 col-lg-9">
        <div class="row">
          <div class="col-7">
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
          <div class="col-5">
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <strong class="text-uppercase">destacados</strong>
                  <q-separator size="3px" inset color="secondary"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="q-pa-xl">
                  <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid autem cumque earum exercitationem recusandae similique temporibus voluptatem. Deleniti dolore dolores eveniet incidunt laudantium neque odit similique voluptatum? Dignissimos?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        <q-card class="transparent q-pa-none">-->
<!--          <q-card-section-->
<!--            :horizontal="$q.screen.gt.sm">-->
<!--            <q-img src="https://via.placeholder.com/700x300" width="700px" height="300px"></q-img>-->
<!--            <q-card-section>-->
<!--              <p>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quis?-->
<!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque explicabo nostrum quaerat.-->
<!--              </p>-->
<!--            </q-card-section>-->
<!--          </q-card-section>-->
<!--        </q-card>-->
      </div>
    </div>
<!--    <GridPostsComponent />-->
  </q-page>
</template>

<script setup lang="ts">
import GridPostsComponent from 'components/posts/GridComponent.vue';
</script>
