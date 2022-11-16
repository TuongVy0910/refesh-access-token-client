<template>
<div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-sm-4">
        <form action="/auth/login" method="post">
          <div class="form-group p-3">
            <div class="input-group">
              <input type="text" class="form-control form-control-lg border-right-0" name="username" placeholder="Username" autofocus>
            </div>
          </div>
          <div class="form-group p-3">
            <div class="input-group">
              <input type="password" class="form-control form-control-lg border-right-0" name="password" placeholder="Password">
            </div>
          </div>
          <div class="form-group d-flex p-3 ">
            <div class="w-25 pr-2 mr-2">
              <a class="btn btn-lg btn-outline-info w-100 pl-2" href="/" role="button">
                Register
              </a>
            </div>
            <div class="  w-50">
              <button type="submit" class="btn btn-lg btn-info w-100 ml-2">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style>
</style>