<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item label="" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username" placeholder="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password" placeholder="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item lable="" prop="birthDate">
        <mu-date-input v-model="validateForm.birthDate" label="birthDate" label-float full-width format=""></mu-date-input>
      </mu-form-item>
      <mu-form-item lable="" prop="sex">
          <mu-radio :value="1" v-model="validateForm.sex" :label="' ' + '男'" ></mu-radio>
          <mu-radio :value="2" v-model="validateForm.sex" :label="' ' + '女'"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
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
      validateForm: {
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
      this.$refs.form.validate()
      alert(this.validateForm.birthDate)
      this.$http.get('/user?ID=12345')
        .then(function (response) {
          console.log(response)
          alert(response)
        })
        .catch(function (err) {
          console.log(err)
          alert(err)
        })
    },
    clear () {
      this.$refs.form.clear()
      this.validateForm = {
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
