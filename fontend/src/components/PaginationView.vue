<template>
  <ul v-show="this.totalPages > 1" class="paginator">
    <li
      v-show="this.currentPage !== 1"
      class="page-item"
      @click.prevent="onClickPre"
    >
      <a href="">
        <f-icon class="search icon" icon="fa-angles-left" />
      </a>
    </li>
    <li
      v-for="(item, index) in pages"
      :key="index"
      class="page-item"
      :disable="item.isDisabled"
      :class="{ active: isPageActive(item.number) }"
      @click.prevent="onClickPage(item.number)"
    >
      <a href="">{{ item.number }}</a>
    </li>
    <li
      v-show="this.totalPages !== this.currentPage"
      class="page-item"
      @click.prevent="onClickNext"
    >
      <a href="">
        <f-icon class="search icon" icon="fa-angles-right" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination-view",
  props: ["currentPage", "allItem", "perPage"],
  data() {
    return {
      maxVisibleButtons: 3,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allItem.length / this.perPage);
    },
    startPage() {
      if (this.currentPage === 1) return 1;
      if (this.currentPage === 2) return 1;
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      let range = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({ number: i, isDisabled: i === this.currentPage });
      }
      return range;
    },
  },
  methods: {
    onClickPre() {
      this.$emit("pageChanged", this.currentPage - 1);
    },
    onClickNext() {
      this.$emit("pageChanged", this.currentPage + 1);
    },
    onClickPage(page) {
      this.$emit("pageChanged", page);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  li {
    background-color: #ddd;
    list-style: none;
    &:hover {
      color: #fff;
      background-color: #201d6c;
      a {
        color: #fff;
      }
    }
  }

  .page-item {
    min-width: 35px;
    height: 35px;
    line-height: 35px;
    margin-right: 20px;
    border-radius: 3px;
  }
  .page-item:last-child {
    margin-right: 0;
  }
  .page-item.active {
    color: #fff;
    background-color: #201d6c;
    a {
      color: #fff;
    }
  }
}
</style>
