<template>
    <!-- <div class="container">
      <div class="calculator">
        <div class="content">
          <form></form>
        </div>
      </div>
    </div> -->

     <div class="container-fluid img_backgrond">
    <div class="row">
        <div class="res_section col-lg-4 offset-lg-5 col-sm-4 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
            <div class="row">
                <div class="col-sm-12 mt-3">
                     
                    <h3 class="text-center">Your Cheers POS PIN
                      <button class="close-x">x</button>
                    </h3>
                    <b-alert show variant="danger" v-if="seen">{{alertMessage}}</b-alert>
                    <div class="row">
                      <input type="number" v-model="model.user_pin">
                    </div>
                    <div class="row">
                      <div class="buttons">
                        <input type="button" name="1" value="1"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="2" value="2"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="3" value="3"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">

                        <input type="button" name="4" value="4"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="5" value="5"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="6" value="6"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">

                        <input type="button" name="7" value="7"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="8" value="8"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="9" value="9"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <input type="button" name="0" value="0"  @click="handleClick($event)" @submit.prevent="getButtonName($event)" class="element">
                        <!-- <div class="element">1</div>
                        <div class="element">2</div>
                        <div class="element">3</div> 
                        <div class="element">4</div>
                        <div class="element">5</div>
                        <div class="element">6</div>
                        <div class="element">7</div>
                        <div class="element">8</div>
                        <div class="element">9</div>
                         <div class="element">0</div>-->

                      </div>
                    </div>
                      <div class="sign-in">
                        <button type="button" @click="onSubmit">Sign In</button><br>
                        <p>Clear</p>
                      </div>
                </div>
            </div>
           
            
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";

Vue.use(VueForm);
export default {
    name: "login2",
    data() {
        return {
            formstate: {},
            user_pin : '',
            seen:false,
            model: {
                user_pin : '',
            }
        }
    },
    methods: {
      getButtonName(event) {
            // console.log(event);
      },
      handleClick(e) {
       // console.log(e.target.name);
        this.model.user_pin = parseInt("" + this.model.user_pin + e.target.name) ;

      },

      /*isloggedin() {
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

      onSubmit() {
        let vm = this;
               axios.post('./user_pin', vm.model)
                .then( response =>{
                    if(response.data.message == "success")
                    {
                        vm.$router.push("/admin/");
                    }else{
                        vm.alertMessage= response.data.error;
                        vm.seen=true;
                    }
                    
                })
            
        }
    },
     mounted()
        {
          this.$auth.isAuthenticatedServerSide();
        },
    destroyed: function() {

    },

}
</script>
<style scoped>
  .calculator{
    padding: 0;
    margin: 60px auto;
   border: 1px solid red;
    width: 50%;
    height: 200px;
  }
  .content{
    padding: 30px;
     border: 1px solid red;
     margin: 15px;
  }
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
.mt-3{
  text-align: center;
  color: #696565;
}
    input[type="number"] {
    text-align: center; 
    margin: 16px auto;
    width: 340px;
    box-sizing: border-box;
    height: 50px;
    font-size: 38px;
    line-height: 44px;
    padding-left: 5px;
    text-align: left;
}

.close-x{
background:none;
    font-size: 20px;
   
    border: none;
    position: absolute;
    color: #d0cece;
    margin-top: -9px;
    right: 0;
    text-align: center;
    cursor: pointer;
}
.close-x:hover{
  font-size: 22px;
 
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
.buttons {
     width: 230px;
    display: block;
    margin: 30px auto;
    text-align: center;
}
.element {
    border: 1px solid #D9D9D9;
    border-radius: 50%;
    background-color: white;
    outline: none;
    color: #909090;
    font-size: 32px;
    height: 57px;
    line-height: 57px;
    width: 57px;
    margin-top: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    padding: 0px;
    display: inline-block;
}
.element:hover{
  background-color: #E11B24;
  cursor: pointer;
  color: white;
}

.element:not(first-child) {
   margin: 6px;
}

    .sign-in{
     text-align: center;
    }
   .sign-in button {
    background: none repeat scroll 0 0 #E11B24;
    border: 1px solid #E11B24;
    clear: both;
    display: block;
        cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 300;
    margin: 0 auto;
    color: white;
    max-width: 210px;
    padding: 12px;
    width: 100%;
}
.sign-in p {
   
    color: #696565;
}
@media screen and (max-width: 1024px) {
   input[type="text"] {
    width: 70%;
    height: 40px;
   }
   .mt-3 h3{
    font-size: 22px;
   }

}
</style>
