<template>
  <VueSlickCarousel v-bind="settings">
    <div>
      <div class="owl-item">1</div>
    </div>
    <div>
      <div class="owl-item">1</div>
    </div>
    <div>
      <div class="owl-item">1</div>
    </div>
    <div>
      <div class="owl-item">1</div>
    </div>
    <div>
      <div class="owl-item">1</div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "carousel-box",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    };
  },
  computed: {
    listAllProduct() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.owl-item {
  background-color: #ccc;
  margin: 8px;
}
</style>
