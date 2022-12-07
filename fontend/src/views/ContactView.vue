<template>
  <div class="contact-page mt-5 mb-5">
    <div class="container">
      <div class="banner-top">
        <div class="item">
          <a href="" class="banner-img">
            <img src="../assets/img/banners/s-banner-3.png" alt=""
          /></a>
        </div>
        <div class="item">
          <h3>Miễn phí vận chuyển</h3>
          <p>
            100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
          </p>
        </div>
        <div class="item">
          <h3>Bảo hành tận tâm</h3>
          <p>
            Bất kể giấy tờ thế nào, Siliconz luôn cam kết sẽ hỗ trợ khách hàng
            tới cùng.
          </p>
        </div>
        <div class="item">
          <h3>Đổi trả 1-1 hoặc hoàn tiền</h3>
          <p>
            Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu
            cầu.
          </p>
        </div>
      </div>
      <div class="contact-info mt-5 mb-5">
        <div class="row">
          <div class="col-md-6">
            <h3 class="mb-3">Tự tin mua sắm cùng Siliconz</h3>
            <div class="row mt-3">
              <div class="col-md-6">
                <f-icon class="icon-top" icon="fa-check-to-slot" />
                <p class="title">Chế độ bảo hành tận tâm</p>
                <p class="text">
                  Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ điều
                  kiện bảo hành của nhà cung cấp, hãng sản xuất. Nếu có vấn đề
                  về chất lượng sản phẩm, ThinkPro xin cam kết sẽ hỗ trợ Quý
                  khách tới cùng.
                </p>
              </div>
              <div class="col-md-6">
                <f-icon class="icon-top" icon="fa-repeat" />
                <p class="title">Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</p>
                <p class="text">
                  Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ
                  trợ đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc cảm
                  thấy sản phẩm chưa đáp ứng được nhu cầu.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <f-icon class="icon-top" icon="fa-circle-info" />
            <h3 class="title">Thông tin hữu ích</h3>
            <div class="i-fo mt-3">
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-phone" />
                  <p>Hotline: 19008198</p>
                </div>
              </a>
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-cube" />
                  <p>Vận chuyển, thanh toán</p>
                </div>
              </a>
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-user-group" />
                  <p>Group trao đổi và hỗ trợ</p>
                </div>
              </a>
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-circle-check" />
                  <p>Tra cứu bảo hành</p>
                </div>
              </a>
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-map" />
                  <p>Hệ thống cửa hàng</p>
                </div>
              </a>
              <a href="" class="i-item">
                <div class="i-wrap">
                  <f-icon class="icon" icon="fa-file-invoice" />
                  <p>Bảng giá dịch vụ</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  .banner-top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
    .item:first-child {
      grid-column: 1/4;
      grid-row: 1/4;
      height: 100%;
      padding: 0;
      background-color: #fff;
      .banner-img {
        img {
          width: 100%;
          height: 100%;
          border-radius: 25px;
          vertical-align: middle;
          object-fit: cover;
        }
      }
    }
    .item {
      height: 125px;
      padding: 15px;
      background-color: #f8fafc;
      border-radius: 16px;
      h3 {
        font-size: 19px;
        font-weight: 600;
        line-height: 150%;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
      }
    }
  }

  .contact-info {
    padding-top: 35px;
    border-top: 1px solid #ddd;
    h3 {
      font-size: 28px;
    }
    .icon-top {
      width: 30px;
      height: 30px;
      margin-bottom: 8px;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      color: #201d6c;
    }
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
  .i-fo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
    .i-item {
      padding: 12px;
      background-color: #f8fafc;
      border-radius: 5px;
      .i-wrap {
        display: flex;
        align-items: center;
        .icon {
          color: #00abcb;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          padding-left: 12px;
          margin-bottom: 0;
        }
      }
      &:hover {
        background-color: #ecf0f4;
      }
    }
  }
}
</style>
