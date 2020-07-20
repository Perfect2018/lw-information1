<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-card class="box">
        <el-table style="width:100%" :data="tableData">
          <el-table-column width="100" prop="user"></el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
  import Header from '../components/header'
  export default {
    name:'Look',
    components:{
      Header
    },
    data(){
      return{
        
      }
    },
    methods:{

    }
  }
</script>

<style>
  .box {
    border-radius: 8px;
    margin-bottom: 10px;
  }
</style>