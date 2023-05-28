<template>
    <div v-if="!isLoggedIn">
      <div v-if="showRegisterForm" class="register-form">
        <h2>Registrarse</h2>
        <input type="text" v-model="registerForm.nombre_usuario" placeholder="Usuario" />
        <input type="password" v-model="registerForm.contrasena" placeholder="Contrasena" />
        <button @click="registerUser">Registrarse</button>
        <router-link to="/login" class="button">
            Log in
        </router-link>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
        return{
            registerForm: {
                nombre_usuario: "",
                contrasena: "",
            },
        }
    },
        methods: {
        showRegisterForm() {
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

<style lang="scss" scoped>

</style>