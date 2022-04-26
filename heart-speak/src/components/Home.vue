<template>
  <el-container class="home-container">
    <!--    头部区域-->
    <el-header>
      <div class="header-title">
        <span>和组织说说你的心里话</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-main>
      <leader></leader>
    </el-main>
  </el-container>
</template>

<script>
import leader from '@/views/leader'
export default {
  name:"home",
  components: {
    leader
  },
  data() {
    return {
      activeTab: 1
    }
  },
  methods: {
    logout() {
      this.$router.push('login')
    },
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}

.header-title{
  font-family: cuteFont;font-size: 30px;
}

.el-header {
  background-color: #2b4b6b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 30px
}


.el-aside {
  background-color: #2b4b6b;

  .el-menu {
    border-right: none
  }

}

.el-main {
  background-color: antiquewhite;
}

</style>
