<template>
  <div class="news-page">
    <div class="container">
      <h3 class="title">Khám phá</h3>
      <div class="news-wrap">
        <News
          v-for="(item, index) in listNews"
          :key="index"
          :news="item"
        ></News>
      </div>
      <div class="news-pagination">
        <PaginationView
          :allItem="listAllNews"
          :perPage="perPage"
          :currentPage="currentPage"
          @pageChanged="onPageChange"
        >
        </PaginationView>
      </div>
      <div class="owl-carousel">
        <h3>có thể bạn quan tâm</h3>
        <VueSlickCarousel v-bind="settings">
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-1.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Ghế Công Thái Học Epione ErgoChair Pro 2.0
                    </h4>
                    <p class="news-description">
                      Cơ chế ATLAS | Lưới Krall & Roth nhập khẩu Đức | Piston
                      Class 4 Samhongsa | Bộ máy Multi-Function | Chân kim loại
                      chắc chắn | Cơ chế ngả lưng True Tilt | Tỳ tay 4D | Bảo
                      hành 5 năm
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-2.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Keychron V2 - Bàn phím cơ Custom QMK
                    </h4>
                    <p class="news-description">
                      Hỗ trợ QMK/VIA | Hot-Swap | Keycap OSA PBT Double-Shot |
                      South Facing RGB | Hỗ trợ MacOS & Windows
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-3.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Bàn nâng hạ Epione SmartDesk Lite
                    </h4>
                    <p class="news-description">
                      Epione SmartDesk Lite là chiếc bàn nâng hạ giúp bạn tiếp
                      cận tới các biện pháp bảo vệ sức khỏe với thiết kế tối
                      giản, chi phí tối thiểu mà hiệu quả tối đa
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-4.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Bàn nâng hạ chiều cao Epione SmartDesk Pro
                    </h4>
                    <p class="news-description">
                      Epione SmartDesk Pro với Dual Mottor mạnh mẽ cùng khả năng
                      điều chỉnh độ cao linh hoạt từ 3 Stage, được trang bị
                      những tính năng an toàn và thông minh nhất. Đây chính là
                      chiếc bàn đáp ứng mọi nhu cầu của bạn
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-5.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Keychron V2 - Bàn phím cơ Custom QMK
                    </h4>
                    <p class="news-description">
                      Cơ chế ATLAS | Lưới Krall & Roth nhập khẩu Đức | Piston
                      Class 4 Samhongsa | Bộ máy Multi-Function | Chân kim loại
                      chắc chắn | Cơ chế ngả lưng True Tilt | Tỳ tay 4D | Bảo
                      hành 5 năm
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="m-3">
            <div class="owl-item">
              <div class="news-card">
                <router-link :to="{ name: '' }">
                  <a href="" class="thumb-news">
                    <img
                      class="img-news"
                      src="@/assets/img/news/news-1.jpeg"
                      alt=""
                    />
                  </a>
                  <div class="news-content">
                    <h4 class="news-title">
                      Keychron K6 Pro - Bàn phím cơ custom QMK 65%
                    </h4>
                    <p class="news-description">
                      Hỗ trợ QMK/VIA | Hot-Swappable | Double-Shot PBT Keycaps
                      với OSA Profile | South Facing RGB |
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import News from "../../components/news/News.vue";
import PaginationView from "../../components/PaginationView.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "news-vue",
  components: {
    PaginationView,
    News,
    VueSlickCarousel,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    };
  },
  computed: {
    listAllNews() {
      return this.$store.state.news;
    },
    listNews() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      return this.listAllNews.slice(start, end);
    },
    listAllProduct() {
      return this.$store.state.products;
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 48px;
  color: #201d6c;
  margin-bottom: 25px;
}
.news-page {
  margin: 50px 0;
  .news-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 24px;
    .news-card {
      position: relative;
      height: 350px;
      overflow: hidden;
      transition: all 0.5;
      &:hover {
        .thumb-news {
          opacity: 1;
        }
        img {
          transform: scale(1.05);
          transition: 0.5s all;
        }
      }

      &:nth-child(odd) {
        grid-column: 1/3;
      }
    }
  }
  .news-pagination {
    margin-top: 50px;
    border-bottom: 1px solid #ccc;
    // padding-top: 20px;
  }
}

.owl-carousel {
  h3 {
    font-size: 42px;
    font-weight: 600;
    color: #201d6c;
    text-align: center;
    text-transform: uppercase;
    margin-top: 35px;
  }
}
.owl-item {
  background-color: #ccc;
  margin: 8px;
  .news-card {
    position: relative;
    height: 350px;
    overflow: hidden;
    transition: all 0.5;
    .thumb-news {
      width: 100%;
      height: 100%;
      opacity: 0.8;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .news-content {
      width: 100%;
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      padding: 18px;
      color: #fff;
      background: url("@/assets/img/bg.png") no-repeat center bottom/100% 100%;
      h4 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 400;
      }
      p {
        margin-bottom: 5px;
        line-height: 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
    &:hover {
      .thumb-news {
        opacity: 1;
      }
      img {
        transform: scale(1.05);
        transition: 0.5s all;
      }
    }

    &:nth-child(odd) {
      grid-column: 1/3;
    }
  }
}
</style>
