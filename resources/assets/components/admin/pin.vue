<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-3 offset-lg-5 col-sm-4 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center">
                            <img src="~img/logo.png" alt="Logo" width="200">
                        </h2>
                    </div>
                </div>

                <vue-form :state="formstate">
                    <div class="row">
                        
                        
                        
                       
                       
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";
Vue.use(VueForm, options);
export default {
    name: "login2",
    data() {
       
    },
    methods: {
       
    },
    mounted: function() {

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
}
    .log_in_btn {
    width:100%;
    }
label{
    font-size: 14px !important;
}
::-webkit-input-placeholder {
    font-size:14px;
}   
</style>
