<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-card class="box">
        <el-table style="width:100%" :data="tableData">
          <el-table-column width="100" type="index"></el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
  import Header from '../components/header';
  import look from '../api/index'
  export default {
    name:'Look',
    components:{
      Header
    },
    data(){
      return{
        tableData:[
          12346578,
          9876547321,
          // 1425111211,
          // 4122112,
        ]
      }
    },
    methods:{
      
    },
    mounted(){
      look.getData().then(res=>{
        console.log(res)
      }).catch(()=>{
        this.$message({
          type:'warning',
          message:'查询失败'
        })
      })
    }
  }
</script>

<style>
  .box {
    border-radius: 8px;
    margin-bottom: 10px;
  }
</style>