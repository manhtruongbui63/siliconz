<template>
  <div>
    <div class="tab-item">
      <div class="p-image">
        <a href="#">
          <img
            :src="require(`../../assets/img/products/${product.image}.png`)"
            alt=""
          />
        </a>
      </div>
      <div class="box-text">
        <p class="title">
          <a href="#">{{ product.productName }}</a>
        </p>
        <p class="price">
          Giá bán:
          <span class="p-price"> {{ product.price | currency }}</span>
        </p>
        <div class="p-btn">
          <router-link
            class="btnBuy"
            :to="{ name: '', params: { productID: product.id } }"
            >Mua Ngay</router-link
          >
          <router-link
            class="btnAdd"
            :to="{ name: '', params: { productID: product.id } }"
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
  name:'product-box',
  props:['product'],
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
</style>
