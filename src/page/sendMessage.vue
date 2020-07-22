<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" label-suffix :rules="rules">
        <el-form-item label="消息类型" prop="type">
          <el-select placeholder="请选择消息类型" v-model="ruleForm.type">
            <el-option label="信息" value="信息"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="批次号" prop="num">
              <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="上传名单" prop="fileName">
              <el-input v-model="fileName" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-upload
              ref="upload"
              action="#"
              :limit="1"
              :before-upload="beforeUpload"
              :http-request="uploadFile"
            >
              <el-button slot="trigger" type="primary">选择文件</el-button>
            </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="模板内容" prop="desc">
              <el-input v-model="ruleForm.desc" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button @click="submit(ruleForm)" type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/header";
import sendMessage from "../api/advert/advertIndex"
export default {
  name: "sendMessage",
  components: {
    Header
  },
  data() {
    return {
      file: "",
      fileName: "",
      ruleForm: {
        type: "",
        num: "",
        fileName: "",
        desc: ""
      },
      rules: {
        type: [{ required: true, message: "请选择消息类型", trigger: "blur" }],
        num: [{ required: true, message: "请输入批次号", trigger: "blur" }],
        fileName: [
          { required: true, message: "请选择要上传的文件", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请输入模板内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    beforeUpload(file) {
      this.file = file;
      const t1 = file.name.split(".")[1] === "xls";
      const t2 = file.name.split(".")[1] === "xlsx";
      // const isLt2M = file.size / 1024 / 1024 < 2
      if (!t1 && !t2) {
        this.$message.warning("上传文件只能是 xls、xlsx格式!");
        return;
      }

      // if(!isLt2M){
      //   this.$message.warning('上传文件大小不能超过 2MB!')
      //   return
      // }

      this.fileName = file.name;
      this.ruleForm.fileName = file.name;
      return false;
    },

    uploadFile(item) {
      // console.log(item); 
      this.file = item.file;
    },
    submit() {
      // console.log(this.file);
      sendMessage.save(this.file,this.ruleForm.num,this.ruleForm.type,this.ruleForm.desc).then(res=>{
        if(res.success){
          this.$message({
            type:'success',
            message:'上传成功'
          })
          // this.file='',
          this.ruleForm.num='',
          this.ruleForm.type='',
          this.ruleForm.desc=''
        }
      }).catch(()=>{
        this.$message({
          type:'warning',
          message:"上传失败"
        })
      })
      // console.log(this.ruleForm)
      // this.$refs['ruleForm'].validate(valid => {
      //   if(valid){
      //     if(this.file == ""){
      //       this.$message({
      //         message:'请选择要上传的文件！',
      //         type:'warning',
      //         showClose:true
      //       })
      //       return false;
      //     }
      //     let fileData = new FormData();
      //     fileData.append('file',this.file);//上传的文件
      //     fileData.append('num',this.ruleForm.num);//批次号
      //     fileData.append('desc',this.ruleForm.desc);//模板内容
      //     fileData.append('fileName',this.ruleForm.fileName)//文件名
      //     console.log(fileData)
      //   }
      // })
      // if (this.file == "") {
      //   this.$message({
      //     message: "请选择要上传的文件！",
      //     type: "warning",
      //     showClose: true
      //   });
      //   return false;
      // }
      // let fileData = new FormData();
      // fileData.append("file", this.file); //上传的文件
      // fileData.append("num", this.ruleForm.num); //批次号
      // fileData.append("desc", this.ruleForm.desc); //模板内容
      // fileData.append("fileName", this.ruleForm.fileName); //文件名
      // console.log(fileData);
    }
  }
};
</script>

<style>
</style>