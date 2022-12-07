<template>
  <div class="news-card">
    <router-link :to="{ name: '' }">
      <a href="" class="thumb-news">
        <img class="img-news" src="@/assets/img/news/news-1.jpeg" alt="" />
      </a>
      <div class="news-content">
        <h4 class="news-title">
          {{ news.title }}
        </h4>
        <p class="news-description">
          {{ news.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "news-box",
  props: ["news"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
</style>
