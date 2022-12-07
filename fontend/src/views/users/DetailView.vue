<template>
  <div class="user-detail">
    <p>First Name: {{ userDetail.firstName }}</p>
    <p>Last Name: {{ userDetail.lastName }}</p>
    <p>Email: {{ userDetail.email }}</p>
    <p>ID: {{ userDetail._id }}</p>
  </div>
</template>

<script>
export default {
  name: "detail-view",
  components: null,
  data() {
    return {
      userDetail: {},
    };
  },

  async mounted() {
    this.userDetail = await this.$store.state.users.find((user) => {
      return user._id === this.$route.params.userID;
    });
  },
};
</script>

<style></style>
