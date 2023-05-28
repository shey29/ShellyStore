<template>
  <div>
    <div class="navbar">
      <nav class="navbar" role="navigation" aria-label="main navigation" style="display: contents;">
    <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="Home"><img src="./assets/imagenes-indumentaria/logo_large.png" width="140" height="30"> 
      </router-link>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/">Tienda</router-link>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      <a class="navbar-item">
        <router-link to="/Contactanos">Contactanos</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/car" class="icono"><img src="./assets/imagenes-indumentaria/carrito.jpg" alt=""></router-link>
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Registrarse" class="button">
              Sign Up
            </router-link>
            <router-link to="/login" class="button">
              Log in
            </router-link>
        </div>
      </div>
    </div>
  </div>

</nav>
    </div>
      <router-view/>
    </div>
    <!-- icono de whatsap -->
    <div>
    </div>
    <a href="https://api.whatsapp.com/send?phone=+573206042219" class="btn-wsp" target="_blank" >
      <img src="./assets/imagenes-indumentaria/whatsapp.png" alt="">
      <i class="icon-whatsapp"></i>
    </a>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

nav {
  display: flex;
}
.btn-wsp {
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 55px;
  bottom: 30px;
  right: 30px;
  background-color: #0df053;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
}
.btn-wsp:hover{
  text-decoration: none;
  color: #0df053;
  background: #fff;
  width: 70px;
  height: 70px;
}
</style>
