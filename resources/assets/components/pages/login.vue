<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="res_section col-lg-4 offset-lg-5 col-sm-4 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center">
                            <img src="~img/logo.png" alt="Logo" width="200">
                        </h2>
                    </div>
                </div>
                <b-alert show variant="danger" v-if="seen">{{alertMessage}}</b-alert>
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-sm-12 mt-3 ">
                            <div class="form-group">
                                <validate tag="div" class="fa_parent">
									<i class="fa fa-envelope-o fa_icon"></i>
                                    <input v-model="model.email" name="email" id="email" type="email" required autofocus placeholder="E-mail" class="form-control form_email_pas" />
                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Email is a required field</div>
                                        <div slot="email">Email is not valid</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <validate tag="div" class="fa_parent">
									<i class="fa fa-lock fa_icon"></i>
                                    <input v-model="model.password" name="password" id="password" type="password" required placeholder="Password" class="form-control form_email_pas" minlength="4" maxlength="10" />
                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Password is required</div>
                                        <div slot="minlength">Password should be atleast 4 characters long</div>
                                        <div slot="maxlength">Password should be atmost 10 characters long</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
						<div class="col-lg-12 col-md-12 text-right">
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn btn-success  log_in_btn" />
                            </div>
                        </div>
                            
                        <div class="col-lg-6 col-md-6 font_cus">
                            <validate tag="label" class="custom_bl">
                                <b-form-checkbox id="remember" v-model="model.remember">Remember Me</b-form-checkbox>
                                <field-messages name="remember" show="$invalid && $submitted" class="text-danger">
                                    <div slot="check-box">Terms must be accepted</div>
                                </field-messages>
                            </validate>
                        </div>

                        <div class="col-lg-6 col-md-6 text-right font_cus">
                            <div class="custom_bl form-group">
                                <p>
                                    <router-link tag="a" to="/forgotpassword" class="">Forgot Password?</router-link>
                                </p>
                            </div>
                        </div>

                        <br>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";
import {AuthenticationStore} from '../../main.js'
import options from "src/validations/validations.js";
Vue.use(VueForm, options);
export default {
    name: "login2",
    data() {
        return {
            formstate: {},
            seen:false,
            alertMessage:"",
            model: {
                email: '',
                password: '',
                remember: '',
                client_secret: AuthenticationStore.client_secret,
                client_id: AuthenticationStore.client_id,
                grant_type: AuthenticationStore.grant_type,

            }
        }
    },
    methods: {
        onSubmit() {
        let vm = this;
            if (vm.formstate.$invalid) {
                return;
            } else {
               axios.post('./login', vm.model)
                .then( response =>{
                    if(response.data.message == "success" && response.auth_user !=="")
                    {
                        vm.$router.push("/pin");
                    }else{
                        this.alertMessage= response.data.message;
                        this.seen=true;
                    }
                    
                })
            }
        },
       /* isloggedin() {
        let vm = this;
               axios.get('./isloggedin')
                .then( response =>{
                    if(response.data.message == "success")
                    {
                        vm.$router.push("/pin");
                        
                    }else if(response.data.error == "Unauthorised"){
                        vm.$router.push("/");
                    }
                    
                })
            
        },*/
    },
    mounted()
        {
          //this.isloggedin();
          //this.$auth.isAuthenticatedServerSide();
        },
    destroyed: function() {

    },

}
</script>
<style scoped>
.login-content {
    margin-top: 7%;
	margin: 0 auto;
    margin-bottom: 7%;
	padding: 0px 25px;
    box-shadow: 0 0 20px #ccc;
    background-size: 100% 100%;
    border-radius: 7px;
	background-color: #fff;
}
    .img_backgrond{
        /* background-image: url(/newpos/public/images/Login-03-01.png?d74e560…); */
		background-color: #80808014;
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
    }
	.form_email_pas {
	border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: unset;
	padding: 5px 25px;
	}
	.log_in_btn {
	width:100%;
	}
	.custom_bl {
	    display: inline-block;
	}
	.font_cus {
		font-size:13px;
	}
	.fa_parent {
		position: relative;
	}
	.fa_icon {
		position: absolute;
		top: 10px;
		padding: 0 4px;
	}
label{
    font-size: 14px !important;
}
::-webkit-input-placeholder {
    font-size:14px;
}	
@media screen and (max-width:1024px) {
	.res_section {
		max-width: 33%;
		flex: 0 0 33%;
	}
}
@media screen and (max-width:768px) {
	.res_section {
		max-width: 44%;
		flex: 0 0 44%;
	}
}
@media screen and (max-width:425px) {
	.res_section {
		max-width: 100%;
		flex: 0 0 100%;
	}
}
</style>
