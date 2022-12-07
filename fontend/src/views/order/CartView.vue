<template>
  <div class="cart-page container">
    <div class="cart-wrap">
      <div class="cart-content">
        <div class="cart-thead row">
          <div class="col-md-2">Sản phẩm</div>
          <div class="col-md-3">Thông tin</div>
          <div class="col-md-2">Giá tiền</div>
          <div class="col-md-2">Số lượng</div>
          <div class="col-md-2">Thành tiền</div>
          <div class="col-md-1">Xoá</div>
        </div>
        <div class="cart-tbody">
          <div class="info row" v-for="(item, index) in listItem" :key="index">
            <div class="product-img col-md-2">
              <img src="@/assets/img/products/p-1.png" alt="" />
            </div>
            <div class="product-name col-md-3">Keychron K8 Pro</div>
            <div class="product-price col-md-2">{{ item.price }}</div>
            <div class="product-quantity col-md-2">
              <input class="p-quan" type="text" :value="item.quantity" />
            </div>
            <div class="product-total col-md-2">{{ item.total }} đ</div>
            <div class="product-action col-md-1">
              <f-icon class="icon" icon="fa-trash" />
            </div>
          </div>
        </div>
      </div>
      <div class="cart-submit">
        <p>
          Tổng tiền:<span>{{ cartInfo.subTotal }}</span>
        </p>
        <button class="btnPay">Thanh Toán</button>
        <button>Tiếp tục mua hàng</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-view",
  components: {},
  data() {
    return {};
  },
  computed: {
    cartInfo() {
      return this.$store.state.carts;
    },
    listItem() {
      return this.cartInfo.items;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-page {
  .cart-wrap {
    display: flex;
    flex-direction: column;
    .cart-content {
      margin-top: 25px;
      .cart-thead {
        width: 100%;
        padding: 10px 0;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        text-align: center;
        color: #333;
        background-color: #ddd;
      }
      .cart-tbody {
        margin-top: 15px;
        .info {
          width: 100%;
          border: 1px solid #ddd;
          align-items: center;
          text-align: center;
          margin: 0;
          margin-bottom: 5px;

          .product-img {
            width: 100%;
            img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }
          }
          .product-name {
            font-size: 16px;
            text-transform: uppercase;
          }
          .product-quantity {
            .p-quan {
              text-align: center;
              width: 40px;
              height: 30px;
            }
            input:focus {
              outline: none;
            }
          }
          .product-action {
            cursor: pointer;
            .icon {
              color: #e2494d;
            }
          }
        }
      }
    }
    .cart-submit {
      text-align: right;
      margin: 25px 0;
      padding: 0;
      p {
        font-size: 16px;
        line-height: 26px;
      }
      span {
        padding-left: 5px;
        font-weight: 700;
      }
      button {
        cursor: pointer;
        border: none;
        color: #333;
        border: 1px solid #201d6c;
        line-height: 35px;
        padding: 0 25px;
        &:hover {
          color: #fff;
          background-color: #201d6c;
        }
      }
      .btnPay {
        margin-right: 12px;
      }
    }
  }
}
</style>
