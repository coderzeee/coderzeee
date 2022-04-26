<template>
  <div class="login_color" :style="bg">
    <div class="tips">
      <span>和组织说说你的心里话</span>
    </div>
    <div class="login_box">
      <div v-if="permission">
        <!--    登录表单-->
        <!--    用户名-->
        <div class="login_title">
          <span>用户登录</span>
        </div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px"
                 class="login_Form">
          <img src="" alt="">
          <el-form-item prop="username">
            <el-input
                size="medium"
                v-model="loginForm.username"
                placeholder="请选输入用户名"
                prefix-icon="el-icon-user">
            </el-input>
          </el-form-item>

          <!--登录密码-->
          <el-form-item prop="password">
            <el-input type="password"
                      size="medium"
                      v-model="loginForm.password"
                      placeholder="请选输入密码"
                      prefix-icon="el-icon-lock">
            </el-input>
          </el-form-item>

          <!--按钮区域-->
          <el-form-item>
            <el-button type="primary" size="medium" style="width: 100%" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div v-else>
        <div class="login_title">
          <span>用户绑定</span>
        </div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px"
                 class="login_Form">
          <img src="" alt="">
          <el-form-item prop="username">
            <el-input
                size="medium"
                v-model="loginForm.username"
                placeholder="请选输入用户名"
                prefix-icon="el-icon-mobile">
            </el-input>
          </el-form-item>

          <!--登录密码-->
          <el-form-item prop="password">
            <el-input type="password"
                      size="medium"
                      v-model="loginForm.password"
                      placeholder="请选输入密码"
                      prefix-icon="el-icon-message">
              <el-button slot="append" size="mini">
                <span style="font-size: 10px">{{text}}</span>
              </el-button>
            </el-input>
          </el-form-item>

          <!--按钮区域-->
          <el-form-item>
            <el-button type="primary" size="medium" style="width: 100%" @click="login">登录</el-button>
          </el-form-item>
        </el-form>



      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permission:false,
      text:"获取验证码",
      //表单数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      bg:{
        backgroundImage: "url(" + require("../assets/img/back.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      //验证输入框对象
      loginFormRules: {
        username: [
          {required: true, message: "请输入登录名称", trigger: "blur"},
          {min: 3, max: 10, message: "长度在3到10个字符之间", trigger: "blur"}
        ],
        password: [
          {required: true, message: "请输入登录密码", trigger: "blur"},
          {min: 6, max: 15, message: "长度在6到15个字符之间", trigger: "blur"}
        ]
      }
    }
  },
  methods: {
    restLoginForm() {
      // console.log(this)
      this.loginForm.username = ''
      this.loginForm.password = ''
      // this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          this.$message.success("登陆成功"),
              this.$router.push('/home')
        }
        // console.log('登录成功');}
        else {
          this.$message.error("登陆失败！")
        }
      })

      // if (this.loginForm.username = 'admin',
      //      this.loginForm.password = 123456)
      // {this.$message.success("登陆成功")
      //   console.log('登录成功');}
      // else
      // {
      //   this.$message.error("登陆失败！")
      // }

    },
  }


}
</script>

<style scoped>
.login_color {
  height: 100%;
}
.tips{
  font-family: cuteFont;font-size: 56px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.login_title{
  text-align: center;
  border-bottom: 2px solid #409eff;
  width: 90px;
  padding-bottom: 10px;
  font-size: 20px;
  position:absolute; top:6%;left:39%
}
.login_box {
  width: 400px;
  height: 270px;
  /*background: wheat;*/
  background: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px #888888;
}

.login_Form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

</style>

