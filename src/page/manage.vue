<template>
  <el-container>
    <el-aside :style="{width:'200px',height:clientHeight+'px',position: 'fixed',zIndex:10,background:'#253149'}">
      <!-- <Aside></Aside> -->
      <div class="title">蔬果到家</div>
      <div class="item" @click="go('index')">信息管理</div>
      <div class="item" @click="go('sendMessage')">手动短信批量发送</div>
      <!-- <div class="item" @click="go('look')">发送账户查看</div> -->
    </el-aside>
    <router-view :style="{marginLeft:'200px'}" :clientHeight="clientHeight"/>
  </el-container>
</template>

<script>
    import Aside from "../components/aside";

    export default {
        name: "manage",
        components: {Aside},
        data() {
            return {
                clientHeight: document.documentElement.clientHeight >= 700 ? document.documentElement.clientHeight : 700
            }
        },
        mounted() {
            let that = this;
            window.onresize = function () {
                let temp = `${document.documentElement.clientHeight}`;
                that.clientHeight = temp >= 700 ? temp : 700;
            }
        },
        methods:{
          go(e){
            // console.log(e)
            this.$router.push({
              path:`${e}`
            })
          }
        }
    }
</script>

<style scoped lang="scss">

  .el-aside {
    position: relative;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    user-select: none;
    overflow-x: hidden;
  }

  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #6592d7;
    padding-left: 13px;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box
  }

  .item{
    width: 100%;
    height: 56px;
    line-height: 56px;
    // text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    padding: 0 20px;
    font-weight: 700;
    box-sizing: border-box
  }
</style>
