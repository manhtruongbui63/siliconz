<template>
  <div class="user container">
    <h1>Test</h1>


    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          data-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-toggle="pill"
          data-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        1...
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        2...
      </div>
    </div>

    

    <h4>User Page</h4>
    <div class="info-user">
      <div class="card" v-for="(item, index) in listUser" :key="index">
        <div class="card-header">
          <h4>Info User</h4>
        </div>
        <div class="card-body">
          <p>
            <strong>ID: {{ index + 1 }}</strong>
          </p>
          <p>
            <strong>First Name: {{ item.firstName }}</strong>
          </p>
          <p>
            <strong>Last Name: {{ item.lastName }}</strong>
          </p>
          <p>
            <strong>Email: {{ item.email }}</strong>
          </p>
          <router-link
            :to="{ name: 'user-detail', params: { userID: item._id } }"
            >Chi tiet</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-view",
  components: {},
  computed: {
    listUser() {
      return this.$store.getters.getAllUser;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.info-user {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
</style>
