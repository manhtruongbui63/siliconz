<template>
  <div id="home-page">
    <section id="slide-banner">
      <div class="carousel-wrap">
        <SliderView :sliders="sliders"></SliderView>
      </div>
    </section>
    <!-- Slide -->

    <section id="banner-category">
      <div class="container">
        <div class="category-box">
          <div
            v-for="(item, index) in categoryBanner"
            :key="index"
            class="category-item"
            :style="{ backgroundImage: `url(${item.photoUrl})` }"
          >
            <router-link class="btn-link" :to="{ name: 'home' }">{{
              item.categoryName
            }}</router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Category -->

    <section id="sale-products">
      <div class="container">
        <div class="title-main">
          <h1 class="title-h">
            <a href="#">Sản phẩm nổi bật</a>
          </h1>
          <span class="title-text">Làm việc thông minh cùng siliconz</span>
        </div>

        <div class="tabs">
          <div class="tab-caption">
            <div class="item selected">
              <a href="#">
                <span class="text">Sản phẩm hot</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <span class="text">Sản phẩm mới</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <span class="text">Sản phẩm khuyến mại</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <span class="text">Sản phẩm bán chạy</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                <span class="text">Sản phẩm cao cấp</span>
              </a>
            </div>
          </div>
          <div class="tab-content">
            <Product
              :product="item"
              v-for="(item, index) in productSales"
              :key="index"
            >
            </Product>
          </div>
        </div>
      </div>
    </section>
    <!-- Product -->

    <section id="new-products">
      <div class="banner-top">
        <a href="#" class="banner-img">
          <img :src="require(`../assets/img/banners/n-banner-1.png`)" alt="" />
        </a>
        <div class="title-banner">
          <h2>Bàn Phím Keychron</h2>
          <span>Sản phẩm mới nhất nổi bật nhất</span>
        </div>
      </div>
      <div class="container"></div>
    </section>

    <section id="news">
      <div class="container">
        <div class="title-main">
          <h1 class="title-h">
            <a href="#">Tin tức nổi bật</a>
          </h1>
          <span class="title-text">Tin tức mới nhất và thú vị nhất</span>
        </div>

        <div class="news-box">
          <div class="news-item">
            <div class="news-image">
              <img :src="require(`../assets/img/news/news-1.jpeg`)" alt="" />
            </div>

            <div class="info">
              <h6 class="news-date">
                <span>14/07/2022</span>
              </h6>
              <router-link class="news-title" :to="{ name: '' }"
                >Một sản phẩm ghế công thái học không thể bỏ qua trong tầm giá 5
                triệu</router-link
              >
              <p class="news-description">
                Epione Easy Chair - Một sản phẩm ghế công thái học...
              </p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <img :src="require(`../assets/img/news/news-2.jpeg`)" alt="" />
            </div>

            <div class="info">
              <h6 class="news-date">
                <span>14/07/2022</span>
              </h6>
              <router-link class="news-title" :to="{}"
                >Một sản phẩm ghế công thái học không thể bỏ qua trong tầm giá 5
                triệu</router-link
              >
              <p class="news-description">
                Epione Easy Chair - Một sản phẩm ghế công thái học...
              </p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <img :src="require(`../assets/img/news/news-3.jpeg`)" alt="" />
            </div>

            <div class="info">
              <h6 class="news-date">
                <span>14/07/2022</span>
              </h6>
              <router-link class="news-title" :to="{}"
                >Một sản phẩm ghế công thái học không thể bỏ qua trong tầm giá 5
                triệu</router-link
              >
              <p class="news-description">
                Epione Easy Chair - Một sản phẩm ghế công thái học...
              </p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <img :src="require(`../assets/img/news/news-4.jpeg`)" alt="" />
            </div>

            <div class="info">
              <h6 class="news-date">
                <span>14/07/2022</span>
              </h6>
              <router-link class="news-title" :to="{}"
                >Một sản phẩm ghế công thái học không thể bỏ qua trong tầm giá 5
                triệu</router-link
              >
              <p class="news-description">
                Epione Easy Chair - Một sản phẩm ghế công thái học...
              </p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <img :src="require(`../assets/img/news/news-5.jpeg`)" alt="" />
            </div>

            <div class="info">
              <h6 class="news-date">
                <span>14/07/2022</span>
              </h6>
              <router-link class="news-title" :to="{}"
                >Một sản phẩm ghế công thái học không thể bỏ qua trong tầm giá 5
                triệu</router-link
              >
              <p class="news-description">
                Epione Easy Chair - Một sản phẩm ghế công thái học... Epione
                Easy Chair - Một sản phẩm ghế công thái học... Epione Easy Chair
                - Một sản phẩm ghế công thái học...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- news -->
  </div>
</template>

<script>
import Product from "../components/productBox/Product.vue";
import SliderView from "../components/SliderView.vue";
export default {
  name: "HomeView",
  components: {
    Product,
    SliderView,
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    categoryBanner() {
      return this.$store.state.categoryBanner;
    },
    productSales() {
      return this.$store.getters.getProductSale;
    },
    sliders() {
      return this.$store.state.sliders;
    },
  },
};
</script>
<style lang="scss" scoped>
#slide-banner {
  .carousel-wrap {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}

#banner-category {
  background-color: #f2f2f2;
  padding-top: 64px;
  padding-bottom: 80px;
  .category-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    .category-item {
      position: relative;
      width: 100%;
      height: 284px;
      overflow: hidden;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      a {
        color: #070707;
        text-decoration: none;

        &:hover {
          color: #fff;
          background-color: #211d70;
        }
      }

      .btn-link {
        position: absolute;
        width: 170px;
        height: 40px;
        left: 50%;
        bottom: 25px;
        line-height: 40px;
        font-weight: 600;
        background-color: #fff;
        text-align: center;
        align-items: center;
        transform: translate(-50%);
        transition: all 0.5s;
      }
    }

    .category-item:first-child {
      grid-column: 1/2;
      grid-row: 1/3;
      height: 100%;
    }
  }
}

.title-main {
  margin-bottom: 20px;
  text-align: center;

  h1 {
    margin: 0 0 13px 0;
  }

  .title-h {
    font-size: 30px;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;

    a {
      position: relative;
      color: #333;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -110px;
        width: 80px;
        height: 2px;
        background: #333;
        transform: translateY(0%, -50%);
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -110px;
        width: 80px;
        height: 2px;
        background: #333;
        transform: translateY(0%, -50%);
      }
    }
  }
  .title-text {
    padding-top: 5px;
    font-size: 18px;
    color: #999;
    font-style: italic;
  }
}

#sale-products {
  padding: 50px 0;
  border-top: 1px solid #e5e5e5;

  .tabs {
    padding-top: 20px;
    text-align: center;

    .tab-caption {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;
      text-align: center;

      .item {
        padding: 5px 12px;
        border-radius: 30px;
        color: #333;
        font-size: 16px;
        margin: 0 5px;
        border: 2px solid #fff;
        transition: all 0.3s;

        &:hover {
          border-color: #211d70;
        }
      }

      .item.selected {
        border-color: #211d70;
      }
    }

    .tab-content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      gap: 16px;
      .tab-item {
        padding: 0 15px;
        transition: all 0.5s;

        .p-image {
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 10px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.5s;

          img {
            width: 100%;
            height: auto;
            min-height: 230px;
            object-fit: cover;
            transition: all 1s;
          }
        }

        .box-text {
          padding: 15px;
          text-align: center;
          transition: all 0.5s;
          text-align: left;

          .title {
            margin: 0;
            line-height: 2.6;
            font-weight: 600;
            overflow: hidden;
          }

          .price {
            color: #c92a1d;
            font-style: italic;
            margin: 0;
            padding-bottom: 10px;
            line-height: 1.8rem;

            .p-price {
              color: #211d70;
              font-size: 16px;
              font-weight: 600;
            }
          }
          .p-btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .btnBuy,
            .btnAdd {
              padding: 5px 12px;
              box-shadow: 1px 1px 0px #999;
            }
            .btnBuy {
              color: #fff;
              background-color: #211d70;
            }
            .btnAdd {
              border: 1px solid #211d70;
            }
          }
        }

        &:hover {
          box-shadow: 0px 0px 10px #999;

          .p-image img {
            scale: 1.1;
          }
        }
      }
    }
  }

  .contentTab {
    padding-top: 20px;
    text-align: center;
    .tabUl {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;
      text-align: center;
      .tabLi {
        padding: 10px 20px;
        border-radius: 30px;
        color: #333;
        font-size: 16px;
        margin: 0 5px;
        border: 2px solid #fff;
        transition: all 0.3s;
        &:hover {
          border-color: #211d70;
        }
      }
    }
  }
}

#new-products {
  .banner-top {
    position: relative;
    // margin-bottom: 40px;
    .banner-img {
      max-width: 100%;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .title-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-shadow: 1px 1px 1px #e5e5e5;

      span {
        font-size: 16px;
        color: #000;
        font-style: italic;
        padding-top: 10px;
      }
    }
  }
}

#news {
  background-color: #f2f2f2;
  padding-top: 64px;
  padding-bottom: 80px;

  .news-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;

    .news-item {
      width: 100%;
      min-height: 200px;
      // padding:8px;
      overflow: hidden;
      transition: 0.5s all;

      .news-image {
        display: flex;
        flex-direction: column;
        // padding-bottom: 15px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.5s;

        img {
          width: 100%;
          height: auto;
          max-height: 130px;
          object-fit: cover;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        position: relative;

        .news-date {
          position: absolute;
          z-index: 1;
          left: 0;
          top: -25px;
          span {
            font-size: 12px;
            font-weight: 300;
            padding: 5px 8px;
            background-color: #211d70;
            color: #f2f2f2;
          }
        }
        .news-title {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: #333;
          padding-bottom: 10px;
          // margin-bottom: 15px;
          margin-top: 15px;
        }
        .news-description {
          font-size: 14px;
          line-height: 1.4;
          color: #666;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }

    .news-item:first-child {
      grid-column: 1/4;
      grid-row: 1/3;

      img {
        max-height: 450px;
      }
    }
  }
}
</style>
