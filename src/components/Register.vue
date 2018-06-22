<template>
  <mu-container>
    <mu-form ref="regForm" :model="regForm" class="mu-demo-form" autoValidate=true>
      <mu-form-item label="" prop="username" :rules="usernameRules">
        <mu-text-field v-model="regForm.username" prop="username" placeholder="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="regForm.password" prop="password" placeholder="password"></mu-text-field>
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
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
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
    submit () {
      var that = this
      this.$refs.regForm.validate()
      if (!this.regForm.username || !this.regForm.password || !this.regForm.birthDate || !this.regForm.sex || !this.regForm.isAgree) {
        console.log('must field is null !')
      } else {
        this.$http.post('/user', this.regForm)
          .then(function (response) {
            console.log(response)
            alert(response)
            that.$router.push({name: 'Login', params: { name: this.regForm.username }})
          })
          .catch(function (err) {
            console.log(err)
          })
      }
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
