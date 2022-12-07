<template>
  <div class="footer__desktop">
    <div class="container">
      <footer id="site-footer">
        <div class="footer-box">
          <div class="f-title">
            <img src="../assets/img/logo_footer.png" alt="" />
          </div>
          <div class="f-address">
            <router-link class="link_footer" :to="{ name: 'home' }"
              >A</router-link
            >
            <router-link class="link_footer" :to="{ name: 'home' }"
              >A</router-link
            >
            <router-link class="link_footer" :to="{ name: 'home' }"
              >A</router-link
            >
          </div>
        </div>
        <div class="footer-box">
          <div class="f-title">
            <h3>Sản phẩm nổi bật</h3>
          </div>
          <div class="f-address">
            <p>Bàn phím cơ keychron</p>
            <p>Công thái học</p>
          </div>
        </div>
        <div class="footer-box">
          <div class="f-title">
            <h3>Chính sách của siliconz</h3>
          </div>
          <div class="f-address">
            <p>Chính sách thanh toán</p>
            <p>Chính sách kiểm hàng và vận chuyển</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo mật thông tin</p>
          </div>
        </div>
        <div class="footer-box">
          <div class="f-title"></div>
          <div class="f-address">
            <p>
              Đăng ký email và chính tôi sẽ gửi cho bạn những thông tin mới nhất
            </p>
          </div>
        </div>
      </footer>
      <div id="bottom-footer">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'footer-view'
}
</script>

<style lang="scss" scoped>
.footer__desktop {
  background-color: #222;
  color: #f8f8f8;
  padding-top: 30px;

  #site-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 22px;

    .footer-box {
      margin-bottom: 25px;
      a {
        color: #f8f8f8;
      }
      .link_footer {
        padding-bottom: 10px;
      }
      .f-title {
        width: 100%;
        height: auto;
        overflow: hidden;

        img {
          width: 100%;
          max-width: 215px;
          height: auto;
          object-fit: cover;
        }
      }
      .f-address {
        display: flex;
        flex-direction: column;
        padding-top: 5px;
      }
    }
  }

  #bottom-footer {
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid #393939;
    p {
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>