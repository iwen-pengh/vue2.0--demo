<template>
    <div class="Login">
        <div class="page-field">
            <div class="page-part">
                <mt-field  placeholder="请输入手机号" v-model="tel" type="tel"></mt-field>
                <mt-field  placeholder="请输入密码" v-model="password" type="password"></mt-field>
            </div>
            <mt-button type="primary" size="large" @click="login">login</mt-button>
        </div>
    </div>
</template>

<script>
  //  import 'mint-ui/lib/style.css'
  export default {
      name: 'Login',
      data () {
          return {
              articles:[],
              tel : null,
              password : null,
          }
      },
      components: {
          //Hello
      },
      methods: {
          login: function () {
              var vm = this;
              const params = {
                  mobile : vm.tel,
                  password : vm.password
              }
              vm.$http({
                  method:'POST',
                  url:'/hand/index/login',
                  params:params,
                  headers: {"Content-Type": "application/x-www-form-urlencoded"},
                  emulateJSON:true
              }).then(function(data){
                  //vm.$router.go({name: 'UserOrder', params: {userId: 1}});
                  vm.$router.push({
                      name: "UserOrder",
                      params: { handleId: 1 }
                  });
              },function(error){
                  console.log(error);
              })
          }
      }
  }
</script>
