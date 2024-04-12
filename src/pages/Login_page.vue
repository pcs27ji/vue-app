<template>
    <div class="row">
        <div id="lbg" class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Login</h3>
                    <hr />
                </div>
                <form>
                    <div class="form-group">
                        <level>Email</level>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <level>Password</level>
                        <input type="password" class="form-control" />
                    </div>

                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {};
</script>

<style>
#lbg {
  background-image: url('../assets/login-img.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 10vh;
  color: white;
  border-radius: 3vh;
  padding: 4vh;
}
</style>
