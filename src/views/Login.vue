<template>
    <div v-if="!isLoggedIn">
      <div v-if="showLoginForm" class="login-form">
        <h2>Iniciar Sesión</h2>
        <input type="text" v-model="loginForm.nombre_usuario" placeholder="Usuario" />
        <input type="password" v-model="loginForm.contrasena" placeholder="Contrasena" />
        <button @click="loginUser">Iniciar Sesión</button>
        <button @click="logout">Cerrar Sesión</button>
        <router-link to="/Registrarse" class="button">
            Registrarse
        </router-link>

      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            registerForm: {
                nombre_usuario: "",
                contrasena: "",
            },
            loginForm: {
                nombre_usuario: "",
                contrasena: "",
            },
            loggedInUser: "",
        }
    },
    methods: {
        showRegisterForm() {
            this.showRegister = true;
        },

        showLoginForm() {
            this.showRegister = true;
        },
        async registerUser() {
            if (!this.registerForm.nombre_usuario || !this.registerForm.contrasena) {
                alert('Por favor ingrese un usuario y una contraseña válidos.');
                return;
            }
            try { 
                const response = await axios.post('http://localhost:3000/usuario', this.registerForm);
                const usuarios = response.data;
                this.users.push(usuarios);
                alert('Usuario registrado exitosamente.');
                this.showLoginForm();
                this.resetForm();
            } catch (error) {
                console.error('Failed to register user:', error);
            }
        },
        async loginUser() {
            if (!this.loginForm.nombre_usuario || !this.loginForm.contrasena) {
                alert("Por favor ingrese un usuario y una contraseña válidos.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3000/usuarios`, this.loggedInUser);
                const usuarios = response.data;
                if (usuarios.length === 0) {
                alert("Credenciales inválidas. Por favor, intente nuevamente.");
                return;
                }
                this.isLoggedIn = true;
                this.loggedInUser = this.loginForm.nombre_usuario;
                localStorage.setItem("loggedInUser", this.loginForm.nombre_usuario);
                alert("Inicio de sesión exitoso.");
            } catch (error) {
                console.error('Failed to login:', error);
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.loggedInUser = "";
            localStorage.removeItem("loggedInUser");
            alert("Sesión cerrada exitosamente.");
        },
    },
    async created() {
        try {
        const response = await axios.get('http://localhost:3000/usuarios');
        this.usuarios = response.data;

        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            this.isLoggedIn = true;
            this.loggedInUser = loggedInUser;
        }
        } catch (error) {
        console.error('Failed to fetch data:', error);
        }
    } 
    
}
</script>
<style>

</style>