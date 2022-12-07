<template>
  <div v-if="currentProduct" class="product-detail container">
    <div class="product-top">
      <ul class="menus">
        <li class="menu-item">Trang chủ</li>
        <li class="menu-item">{{ this.$route.params.slug }}</li>
      </ul>
    </div>
    <div class="product-wrap">
      <div class="product-image">
        <img class="img-info" :src="urlImage" alt="" />
      </div>
      <div class="product-info">
        <div class="info">
          <h3>
            {{ currentProduct.productName }}
          </h3>
          <p class="cate-name">Danh mục: <span>Keychron K8 Pro</span></p>
          <p class="cate-name">
            Mã sản phẩm: <span>{{ currentProduct.productCode }}</span>
          </p>
          <p class="price">
            <span>{{ currentProduct.productPrice | currency }}</span>
          </p>
        </div>
        <div class="selection">
          <div class="size">
            <div class="form-check">
              <input class="form-check-input" type="radio" />
              <label>Blue Switch</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" />
              <label>Red Switch</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" />
              <label>Brown Switch</label>
            </div>
          </div>
          <div class="quantity">
            <label>Số lượng</label>
            <button class="btn-quantity" @click="count--">-</button>
            <input
              type="text"
              id="quantity"
              name="quantity"
              :value="count"
              min="1"
              max="10"
            />
            <button class="btn-quantity" @click="count++">+</button>
          </div>
          <button class="btnAdd" @click="addCart">Thêm vào giỏ hàng</button>
        </div>
        <div class="store">
          <h4>Sản phẩm có tại cửa hàng</h4>
          <ul>
            <li>
              <f-icon class="icon" icon="fa-location-dot" />
              Store 1: Hà Nội
            </li>
            <li>
              <f-icon class="icon" icon="fa-location-dot" /> Store 2: Hồ Chí
              Minh
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-content row">
      <div class="col-md-9" v-html="currentProduct.productNote"></div>
      <div class="col-md-3">
        <div class="sidebar">
          <p>Giao hàng trên toàn lãnh thổ</p>
          <p>Bảo hành chính hãng toàn quốc</p>
          <p>Đầy đủ các hình thức thanh toán thẻ Visa, MasterCard,...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-detail",
  data() {
    return {
      changeSlugTxt: "",
      currentProduct: null,
      count: 1,
      url: "http://localhost:3000/",
    };
  },
  created() {
    this.fetchProduct();
  },
  computed: {
    changeSlug(slug) {
      let texts = slug.split("-");
      for (let i = 0; i < texts.length; i++) {
        var text = texts[i];
        texts[i] = text.charAt(0).toUpperCase() + text.slice(1);
      }
      return texts.join(" ");
    },
    urlImage() {
      return this.url + this.currentProduct.productImage;
    },
  },
  methods: {
    fetchProduct() {
      this.$store
        .dispatch("getProductDetail", this.$route.params.productID)
        .then((res) => {
          this.currentProduct = res.product;
        });
    },
    addCart(){
      return this.$store.dispatch("addCart",{id:this.currentProduct._id,quantity:this.count})  
    }
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
.product-top {
  margin: 26px 0;
  li::before {
    content: "/ ";
    padding: 0 5px;
    color: #666;
  }
  li:first-child::before {
    content: "";
    padding: 0;
  }
  li {
    list-style: none;
  }
  .menus {
    display: flex;
  }
}
.product-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  .product-image {
    width: 40%;
    .img-info {
      max-width: 444px;
      max-height: 444px;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .product-info {
    width: 60%;
    margin-left: 15px;
    .info {
      h3 {
        font-size: 20px;
        text-transform: uppercase;
        color: #201d6c;
        margin-bottom: 13px;
      }
      p {
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 10px;
        span {
          color: #201d6c;
        }
      }
      .price {
        font-size: 24px;
        font-weight: 400;
        margin: 25px 0;
      }
    }
    .selection {
      .quantity {
        label {
          width: 100px;
          line-height: 25px;
        }
        #quantity {
          width: 40px;
          height: 30px;
          font-size: 16px;
          margin: 0 1px;
          color: #201d6c;
          border: 1px solid #ccc;
          text-align: center;
        }
        .btn-quantity {
          width: 40px;
          height: 30px;
          text-align: center;
          border: 1px solid #ccc;
          background-color: #fff;
          &:hover {
            color: #fff;
            background-color: #201d6c;
          }
        }
        button:focus,
        input:focus {
          outline: none;
        }
      }
      .btnAdd {
        border: none;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        padding: 8px 15px;
        margin: 15px 0;
        border-radius: 3px;
        background-color: #201d6c;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
    .store {
      h4 {
        font-size: 16px;
        font-weight: 400;
        color: #201d6c;
        text-transform: uppercase;
      }
      li {
        list-style: none;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        font-style: italic;
        .icon {
          color: #201d6c;
          margin-right: 12px;
        }
      }
    }
  }
}
.product-content {
  margin: 50px;
  padding-top: 50px;
  border-top: 1px solid #666;
  .sidebar {
    padding: 15px;
    margin: 0 auto;
    font-size: 14px;
    background-color: #f4f4f4;
    border: 1px solid #201d6c;
    border-style: dashed;
    p {
      margin-bottom: 8px;
    }
  }
}
</style>
