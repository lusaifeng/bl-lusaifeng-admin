<template>
  <div class="app flex-row align-items-center">
    <div class="container animated fadeIn">
      <div class="row justify-content-center">
        <div class="col-md-9 col-xl-8">
          <div class="card-group">
            <div class="card p-4">
              <div class="card-body">
                <h1>Login</h1>
                <p class="text-muted">请先登录</p>
  
                <b-form class="mt-3">
                  <label class="sr-only" for="username">Username</label>
                  <b-input-group class="mb-2">
                    <b-input-group-addon>
                      <i class="fa fa-user"></i>
                    </b-input-group-addon>
                    <b-input type="text" id="username" placeholder="用户名" />
                  </b-input-group>
                  <label class="sr-only" for="username">密码</label>
                  <b-input-group class="mb-2 ">
                    <b-input-group-addon>
                      <i class="fa fa-lock"></i>
                    </b-input-group-addon>
                    <b-input type="password" id="username" placeholder="密码" />
                  </b-input-group>
                  <b-button type="submit" variant="primary">登录</b-button>
                </b-form>
  
              </div>
            </div>
            <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-body text-center">
                <div>
                  <h2>后台系统 - 控制台</h2>
                  <p>世纪华联后台系统</p>
                  <a href="/" class="btn btn-primary active mt-3">进入首页</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>