<template>
  <div class="category-add container">
    <form class="p-5">
      <div class="form-group">
        <label for="category-name">Category Name</label>
        <input
          type="text"
          class="form-control"
          id="category-name"
          placeholder="Enter category name..."
          v-model="categoryName"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          placeholder="Enter description category name..."
          v-model="categoryDescription"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <button class="btn btn-primary mb-2" @click.prevent="createCategory">
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "category-add",
  data() {
    return {
      categoryName: "",
      categoryDescription: "",
    };
  },
  methods: {
    createCategory() {
      this.$store.dispatch("createCategory", {
        categoryName: this.categoryName,
        categoryDescription: this.categoryDescription,
      });
    },
  },
};
</script>

<style></style>
