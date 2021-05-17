<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-4-widescreen ">
          <form @submit="onSubmit" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" v-model="email" placeholder="email@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" v-model="senha" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <input type="submit" class="button is-success" value="Login"/>
              <span v-show="loginError" class="has-text-danger">
                Usuário e/ou senha inválidos
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createHttp from '@/services/axiosConfig'

export default {
  data() {
    return {
      email: '',
      senha: '',
      loginError: false
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();

      const bodyData = new FormData();
      bodyData.append('grant_type', 'password')
      bodyData.append('username', this.email)
      bodyData.append('password', this.senha)

      try {
        const http = createHttp()
        const res = await http.post('/oauth/token', bodyData, {
          auth: {
            username: 'mycash-web',
            password: 'SENHAFORTE'
          }
        })

        console.log(res);
        console.log(res.data.access_token);
        console.log(JSON.parse(atob(res.data.access_token.split('.')[1])));

        if (res.status === 200) {
          this.$router.push('/')
          
          // http.defaults.headers.common['Authorization'] = `${res.data.token_type} ${res.data.access_token}`
          localStorage.setItem('mycash_token', res.data.access_token)
        } 
        
      } catch(err) {
        console.log(err);

        this.loginError = true
        // delete this.$http.defaults.headers.common['Authorization']
        localStorage.removeItem('mycash_token')
      } 

      
    }
  }

}
</script>

<style>

</style>