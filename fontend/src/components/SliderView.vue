<template>
  <div>
    <Carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true"
      :paginationPosition="p"
    >
      <Slide class="slide-item" v-for="(item, index) in sliders" :key="index">
        <img
          :src="require(`@/assets/img/banners/${item.nameImage}.png`)"
          alt=""
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Silder-view",
  props: ["sliders"],
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      p: "bottom-overlay",
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-item {
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
