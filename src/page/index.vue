<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-card class="box">
        <div slot="header">
          <span>条件查询</span>
        </div>
        <div>
          <el-form :model="searchForm" ref="search" label-width="100px" label-suffix>
            <el-row>
               <el-col :span="8">
                 <el-form-item>
                   <el-date-picker v-model="searchForm.value1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
                 </el-form-item>
               </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <el-input placeholder="模版内容关键字搜索" v-model="searchForm.content"></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="8">
                 <el-form-item>
                   <el-button type="primary" @click="search">查询</el-button>
                 </el-form-item>
               </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <el-card class="box">
        <el-table style="width:100%" :data="tableData">
          <el-table-column label="消息编号" width="150" prop="sendNo"></el-table-column>
          <el-table-column label="发送日期" width="150" prop="sendDate"></el-table-column>
          <el-table-column label="消息类型" width="100" prop="sendType"></el-table-column>
          <el-table-column label="发送数量" width="100" prop="sendSum"></el-table-column>
          <el-table-column label="发送成功数" width="100" prop="sendOk"></el-table-column>
          <el-table-column label="回调通知数" width="100" prop="sendReturn"></el-table-column>
          <el-table-column label="模板内容" width="180" prop="sendMould"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="showList(scope.$index,scope.row)">查看列表</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-card>
    </el-main>

    <!-- 发送账户查看 -->
    <el-dialog title="发送账户查看" :visible.sync="isShow">
      <el-table :data="list">
        <el-table-column width="130" align="center">
          <template slot-scope="scope">
            <span>{{scope.row}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import Aside from "../components/aside";
import Header from "../components/header";
import indexApi from "../api/index";
export default {
  name: "index",
  components: {
    Aside,
    Header
  },
  data() {
    return {
      searchForm:{
        value1: "",
        content:'',
      },
      tableData:[],
      list:[],
      isShow:false
    };
  },
  computed: {},
  methods: {
    // 查询
    search(){
      console.log(this.searchForm)
      indexApi.selectData(this.searchForm.content,this.searchForm.value1).then(res=>{
        if(res.success){
          this.$message({
            type:'success',
            message:'查询成功'
          })
          this.tableData = res.data
        }
      }).catch(()=>{
        this.$message({
          type:'warning',
          message:'查询失败'
        })
      })
    },

    // 查看列表
    showList(index,row){
      indexApi.getData(row.sendName).then(res=>{
        this.list = res.data
        this.isShow = true
      }).catch(()=>{
        this.$message({
          type:'warning',
          message:'数据异常'
        })
      })
    },

  
    // isType(row){
    //   return row.sendType == '01' ? '短信' :''
    // }
  },
 
  // 1 2 3  0 1 2
  // 4 5 6  3 4 5
  // 7 8 9  6 7 8
  mounted() {
    indexApi.selectData().then(res=>{
      if(res.success){
        this.tableData = res.data
      }
    }).catch(()=>{
      this.$message({
        type:'warning',
        message:'暂无数据'
      })
    })
  },

  beforeMount() {
   
  }
};
</script>
<style scoped>
   .box {
    border-radius: 8px;
    margin-bottom: 10px;
  }

</style>
