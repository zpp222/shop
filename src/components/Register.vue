<template>
  <mu-container>
    <mt-header fixed title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mu-form ref="regForm" :model="regForm" class="mu-demo-form" autoValidate=true>
      <mu-form-item label="" prop="name" :rules="usernameRules">
        <mu-text-field v-model="regForm.name" prop="name" placeholder="name"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="" prop="passwd" :rules="passwordRules">
        <mu-text-field type="password" v-model="regForm.passwd" prop="passwd" placeholder="passwd"></mu-text-field>
      </mu-form-item>
      <mu-form-item lable="" prop="birthDate" :rules="birthDateRules">
        <mu-date-input v-model="regForm.birthDate" container="dialog" label="birthDate" label-float full-width format=""></mu-date-input>
      </mu-form-item>
      <mu-form-item lable="" prop="sex" :rules="sexRules">
          <mu-radio :value="1" v-model="regForm.sex" :label="' ' + '男'" ></mu-radio>
          <mu-radio :value="2" v-model="regForm.sex" :label="' ' + '女'"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox label="同意用户协议" v-model="regForm.isAgree"></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="onsubmit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
import { Toast } from 'mint-ui'
let Base64 = require('js-base64').Base64

export default {
  name: 'Register',
  data () {
    return {
      usernameRules: [
        {validate: (val) => !!val, message: '必须填写用户名'},
        {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
      birthDateRules: [{validate: (val) => true, message: '出生日期为空'}],
      sexRules: [{validate: (val) => !!val, message: '性别为空'}],
      regForm: {
        username: '',
        password: '',
        birthDate: '',
        sex: '',
        isAgree: false
      }
    }
  },
  methods: {
    onsubmit: function (event) {
      var that = this
      this.$refs.regForm.validate()
      let pwd = this.$md5(Base64.encode(this.regForm.passwd))
      this.$http.post('http://localhost:8180/shop-console/reg',
        {name: this.regForm.name, passwd: pwd}
      )
        .then(function (response) {
          console.log(response)
          if (response.data.rtcode === 'LG_0000') {
            Toast('注册成功，请登录!')
            that.$router.push({name: 'Login', params: { name: '' }})
          } else {
            Toast('注册失败，请检查!')
          }
        })
        .catch(function (err) {
          console.log(err)
        })
      // }
    },
    clear () {
      this.$refs.regForm.clear()
      this.regForm = {
        username: '',
        password: '',
        birthDate: '',
        sex: '',
        isAgree: false
      }
    }
  }
}
</script>

<style scoped>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>
