<template>
  <div class="p-item" style="background-color: #fff">
    <div class="tab-item">
      <div v-show="product.productDiscount" class="discount">
        <span>{{ product.productDiscount }}%</span>
      </div>
      <div class="p-image" :style="{}">
        <a href="#" class="img">
          <img :src="urlImage" alt="" />
        </a>
      </div>
      <div class="box-text">
        <p class="title">
          <a href="#">{{ product.productName }}</a>
        </p>
        <p class="price">
          Giá:
          <span class="p-discount">{{ priceDiscount | currency }} </span>
          <span class="p-price" v-show="this.product.productDiscount"
            >{{ product.productPrice | currency }}
          </span>
        </p>
        <div class="p-btn">
          <router-link
            class="btnBuy"
            :to="{
              name: 'ProductDetail',
              params: { slug: slugs, productID: product._id },
            }"
            >Mua Ngay</router-link
          >
          <router-link
            class="btnAdd"
            :to="{
              name: '',
              params: {
                productID: product._id,
              },
            }"
            >Giỏ Hàng</router-link
          >
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "product-box",
  props: ["product"],
  data() {
    return {
      url: "http://localhost:3000/",
      discount: false,
      priceDiscount: Math.ceil(
        this.product.productPrice -
          (this.product.productDiscount * this.product.productPrice) / 100
      ),
    };
  },
  computed: {
    slugs() {
      return this.product.productName.toLowerCase().replace(/\s+/g, "-");
    },
    urlImage() {
      return this.url + this.product.productImage;
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.p-item {
  transition: all 0.5s;
  .tab-item {
    position: relative;
    padding: 15px;
    .discount {
      position: absolute;
      top: 5px;
      right: 0;
      width: 37px;
      height: 37px;
      text-align: center;
      line-height: 35px;
      background-color: #e54646;
      border-radius: 50%;
      z-index: 1;
      span {
        font-size: 13px;
        color: #fff;
      }
    }
    .p-image {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: 230px;
      margin-bottom: 25px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.5s;
      .img {
        border-radius: 5px;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: auto;
        min-height: 230px;
        object-fit: cover;
        transition: all 1s;
      }
    }
    .box-text {
      text-align: center;
      transition: all 0.5s;
      text-align: left;

      .title {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .price {
        color: #c92a1d;
        font-style: italic;
        margin: 0;
        padding-bottom: 10px;
        line-height: 1.8rem;

        .p-discount {
          color: #211d70;
          font-size: 14px;
          font-weight: 600;
        }

        .p-price {
          color: #999;
          font-size: 14px;
          text-decoration: line-through;
        }
      }
      .p-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btnBuy,
        .btnAdd {
          padding: 3px 8px;
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
  }
  &:hover {
    box-shadow: 0px 0px 10px #999;
    .p-image img {
      scale: 1.1;
    }
  }
}
</style>
