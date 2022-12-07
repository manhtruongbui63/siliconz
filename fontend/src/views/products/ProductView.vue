<template>
  <div class="product-page">
    <div class="container">
      <div class="product-wrap">
        <div class="option-filter">
          <div class="card mb-3">
            <div class="card-header">Danh mục sản phẩm</div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  Bàn phím
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Phụ kiện custom
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Ghế công thái học
                </label>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-header">Lựa chọn</div>
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Blue Switch
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Red Switch
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Led RGB - Case kim loại
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Led While - Case nhựa
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="product-list">
          <div class="top-category row">
            <div class="option-sort col-md-6">
              <div class="title-sort mb-3">
                <f-icon class="icon" icon="fa-sort" />
                Sắp xếp
                <span>568 Sản phẩm</span>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Tăng dần</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Giảm dần</label
                >
              </div>
            </div>
            <div class="form-search col-md-6">
              <input type="search" placeholder="Tìm kiếm sản phẩm..." />
              <f-icon class="search-icon" icon="fa-magnifying-glass" />
              <!-- <button class="btnSearch">Tìm kiếm</button> -->
            </div>
          </div>
          <div class="product-tab mt-5">
            <ProductBox
              :product="item"
              v-for="(item, index) in listProduct"
              :key="index"
            ></ProductBox>
          </div>
          <PaginationView
            :allItem="listAllProduct"
            :perPage="perPage"
            :currentPage="currentPage"
            @pageChanged="onPageChange"
          ></PaginationView>
        </div>
      </div>
      <div class="product-recommend mt-5">
        <div class="title-main">
          <h4 class="title-h">
            <a href="#">Sản phẩm cùng loại</a>
          </h4>
          <span class="title-text">Làm việc thông minh cùng siliconz</span>
        </div>
        <div class="p-list">
          <ProductBox
            :product="item"
            v-for="(item, index) in listAllProduct"
            :key="index"
          ></ProductBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../../components/productBox/Product.vue";
import PaginationView from "../../components/PaginationView.vue";
export default {
  name: "product-view",
  components: { ProductBox, PaginationView },
  data() {
    return {
      categoryName: "",
      categoryDescription: "",
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    listAllProduct() {
      return this.$store.state.products;
    },
    listProduct() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      return this.listAllProduct.slice(start, end);
    },
  },
  methods: {
    createCategory() {
      this.$store.dispatch("createCategory", {
        categoryName: this.categoryName,
        categoryDescription: this.categoryDescription,
      });
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-page {
  margin-top: 8px;
  background-color: #f8fafc;
}
.product-wrap {
  display: flex;
  padding-top: 32px;
  .option-filter {
    width: 25%;
    padding: 0 15px;
    .card {
      .card-header {
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
        background-color: #201d6c;
      }
    }
  }
  .product-list {
    display: flex;
    flex: 1;
    margin-left: 12px;
    // align-items: center;
    flex-direction: column;
    width: 100%;

    .top-category {
      .form-search {
        width: 50%;
        position: relative;
        input {
          width: 100%;
          line-height: 24px;
          padding: 5px 12px;
          border: 2px solid #201d6c;
          border-radius: 25px;
          &:focus-visible {
            outline: none;
          }
        }
        .search-icon {
          position: absolute;
          right: 30px;
          top: calc(50% - 22px);
        }
      }
    }
    .product-tab {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      width: 100%;
      margin-bottom: 25px;
      background-color: #f8fafc;
    }
  }
}

.product-recommend {
  padding: 50px 0;
  border-top: 1px solid #ddd;
  .title-main {
    margin-bottom: 20px;
    text-align: center;

    h1 {
      margin: 0 0 13px 0;
    }

    .title-h {
      font-size: 28px;
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
  .p-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 16px;
  }
}
</style>
