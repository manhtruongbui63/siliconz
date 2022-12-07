<template>
  <div class="product-add container">
    <div class="form-add row pt-5 pb-5">
      <div class="product-info col-md-7">
        <form>
          <div class="form-group">
            <label for="product-name">Product Name</label>
            <input
              v-model="productName"
              type="text"
              class="form-control"
              id="product-name"
              placeholder="Keychron K8 Pro"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="product-category">Category</label>
              <select
                id="product-category"
                class="form-control"
                v-model="categoryID"
              >
                <option
                  v-for="(item, index) of categories"
                  :key="index"
                  :value="item._id"
                >
                  {{ item.categoryName }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="product-brand">Brand</label>
              <select
                id="product-brand"
                class="form-control"
                v-model="productType"
              >
                <option
                  v-for="(item, index) in brands"
                  :key="index"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="product-price">Price</label>
              <input
                v-model="productPrice"
                type="number"
                class="form-control"
                id="product-price"
                placeholder="1.000.000 đ"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="product-discount">Discount</label>
              <input
                v-model="productDiscount"
                type="number"
                class="form-control"
                id="product-discount"
                min="0"
                max="99"
                placeholder="10%"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <label for="product-quantity">Quantity</label>
              <input
                v-model="productQuantity"
                type="number"
                class="form-control"
                id="product-quantity"
              />
            </div>
            <div class="col-md-6 pt-4">
              <div
                class="form-check form-check-inline"
                v-for="(item, index) in colors"
                :key="index"
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  :value="item.name"
                  v-model="color"
                  checked
                />
                <label class="form-check-label">{{ item.name }}</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="product-description">Description</label>
            <textarea
              v-model="productDescription"
              class="form-control"
              id="product-description"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="product-preview col-md-5">
        <p>Thumbnail</p>
        <div class="image-preview">
          <div class="img">
            <img :src="previewImage" alt="" />
            <span v-show="!previewImage"
              ><strong>File:</strong> .png, .jpg, .jpeg</span
            >
          </div>
        </div>
        <label for="upFile">Upload Photo</label>
        <input
          class="mt-3 mb-3"
          id="upFile"
          type="file"
          @change="fileImage"
          accept=".png, .jpg, ,jpeg"
        />
        <button class="btnSubmit" @click.prevent="createProduct">
          Add Product
        </button>
      </div>
      <vue-editor
        class="product-content pl-3 pr-3"
        v-model="productHTML"
      ></vue-editor>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-add",
  data() {
    return {
      productName: "",
      categoryID: "",
      productDescription: "",
      productPrice: null,
      productDiscount: null,
      productQuantity: null,
      color: "",
      productType: "",
      image: "",
      productHTML: "",
      previewImage: null,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    brands() {
      return this.$store.state.brands;
    },
    colors() {
      return this.$store.state.colors;
    },
  },
  methods: {
    fileImage(e) {
      this.image = e.target.files[0];
      if(this.image){
        this.previewImage = URL.createObjectURL(this.image);
      }
    },
    createProduct() {
      const formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("productDescription", this.productDescription);
      formData.append("productPrice", this.productPrice);
      formData.append("productDiscount", this.productDiscount);
      formData.append("productQuantity", this.productQuantity);
      formData.append("productColor", this.color);
      formData.append("productType", this.productType);
      formData.append("categories", this.categoryID);
      formData.append("image", this.image);
      formData.append("productNote", this.productHTML);

      this.$store.dispatch("createProduct", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-preview {
  p {
    margin-bottom: 8px;
  }
  label,
  button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 12px;
    cursor: pointer;
    border-radius: 20px;
    padding: 8px 12px;
    margin-top: 8px;
    color: #fff;
    background-color: #201d6c;
    text-decoration: none;

    &:hover {
      background-color: rgba(32, 29, 108, 0.7);
    }
  }
  input {
    display: none;
  }
  .btnSubmit {
    margin-left: 24px;
    border: none;
  }
}
.product-content {
  width: 100%;
  padding: 15px;
}
.image-preview {
  display: flex;
  align-items: center;
  height: 210px;
  padding: 12px;
  border: 1px solid #201d6c;
  border-style: dashed;
  .img {
    width: 145px;
    margin: 0 auto;
    height: auto;
    span {
      text-align: center;
      font-size: 12px;
      color: #201d6c;
      font-style: italic;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
