<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="19">
        <div>
          <span style="font-size: 20px">心里话记录</span>
        </div>
        <el-divider></el-divider>
        <el-form inline>
          <el-form-item  label="选择时间">
            <el-date-picker
                size="mini"
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-plus" type="primary" size="mini">创建心里话</el-button>
          </el-form-item>
        </el-form>

        <div class="speakCardBody">
          <div v-for="(item,index) in newMesList" :key="index" style=" width: 32%">
            <el-card>
              <el-row :gutter="20">
                <el-col :span="12">
                  <img src="../static/commu.png" style="width:200px;" alt="">

                </el-col>
                <el-col :span="12">
                  <div style="padding-left: 20px">
                    <div style="font-weight: bold;font-size: 25px;padding-bottom: 5px">刘锦云</div>
                    <div>状态：<span>待提交</span></div>
                    <div>创建日期：2022-3-2</div>
                    <div style="display: flex;position: absolute;bottom: 0%;justify-content: center">
                      <el-button size="medium" plain type="primary">修改</el-button>
                      <el-button size="medium" plain type="primary">提交</el-button>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </div>



      </el-col>
      <el-col :span="5">
          <span style="font-size: 20px">提示</span>
          <el-divider></el-divider>
          <div class="inner-card">
            <div v-for="(item,index) in newMesList" :key="index">
              <div style="padding: 1px 5px 0px 5px;display: flex">
                <span>{{ item.name }}的回复</span>
                <el-badge style="margin-left: auto" class="mark" :value="3"/>
              </div>
            </div>
          </div>
      </el-col>
    </el-row>


  </el-card>
</template>

<script>
export default {
  name: "leader",
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      newMesList: [
        {name: "zhou"},
        {name: "zhou"},
        {name: "zhou"}
      ]
    }
  }
}
</script>

<style scoped>
.el-divider {
  margin: 10px 0;
}

.inner-card {
  background: #f0f0f0;
  min-height: 100px;
  padding: 0 10px;
}
.speakCardBody{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>