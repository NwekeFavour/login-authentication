<template lang="">
    <div>
        <div class='container'>
            <div class='row'>
                <div class='col-md-6 my-5'>
                    <div class='Logo'>
                        <p class='h4 fw-bold  m-0'>LOGO</p>
                    </div>
                    <div class='art mt-5'>
                        <p class='m-0'>Artificial Intelligence Driving
                        Results For The Travel Industry</p>
                    </div>
                    <div>
                        <p>Welcome  back! Please login to your account.</p>
                    </div>
                   <form @submit.prevent="createPost">
                        <div class="form-floating mb-3">
                            <input type="email" v-model="formData.emailAddress" class="form-control shadow-none" id="emailAddress" placeholder="name@example.com">
                            <label for="emailAddress">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" v-model="formData.Password" email="email" class="form-control shadow-none" id="Password" placeholder="Password">
                            <label for="Password">Password</label>
                        </div>
                   </form>
                    <div class="form-check mt-3">
                        <input class="form-check-input"  type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class='d-md-flex align-items-center gap-3 mt-5'>
                        <div>
                            <button class='btn sign btn-primary'>SIGN UP</button>
                        </div>
                        <div class='login border d-md-flex align-items-center justify-content-center border-primary px-3 py-2'>
                            <ul class='list-unstyled  m-0'>
                                <li>
                                    <a href='' class='  text-decoration-none'>LOGIN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class='d-md-flex align-items-center gap-4 mt-5'>
                        <div>
                            <ul class='list-unstyled'>
                                <li>
                                    <a href='' class='text-dark text-decoration-none'>or login with</a>
                                </li>
                            </ul>
                        </div>    
                        <div class='facebook'>
                            <p>facebook</p>
                        </div>
                        <div class='LinkedIn'>
                            <p>LinkedIn</p>
                        </div>
                        <div class='Google'>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
                <div class='col-md-6 navi d-none d-md-block my-5'>
                    <div>
                        <ul class='list-unstyled gap-4 links py-3 d-md-flex align-items-center justify-content-center'>
                            <li>

                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <div class='Clip'>
                        <img src="./assets/clip-message-sent 1.svg"/>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
// import axios from 'axios';

export default {
    name: 'createPost',
    data() {
        return {
            showText: true,
            formData: {
                name: '',
                emailAddress: '',
                Password: ''
            }
        }
    },
    methods: {
        createPost(){
            
        }
    }
}
</script>
<style scope src="../assets/Login.css"></style>
