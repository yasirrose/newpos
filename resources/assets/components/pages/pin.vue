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
                    
                    <h3 class="text-center">

                         Your Cheers POS PIN
                    </h3>
                    <div class="row">
                      <input type="text" name="tex">
                    </div>
                    <div class="row">
                      <div class="buttons">
                        <div class="element">1</div>
                        <div class="element">2</div>
                        <div class="element">3</div>
                        <div class="element">4</div>
                        <div class="element">5</div>
                        <div class="element">6</div>
                        <div class="element">7</div>
                        <div class="element">8</div>
                        <div class="element">9</div>
                         <div class="element">0</div>

                      </div>
                    </div>
                      <div class="sign-in">
                        <button >Sign In</button><br>
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
            
        }
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
    input[type="text"] {
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
.buttons {
     width: 230px;
    display: block;
    margin: 30px auto;
    text-align: center;
}
.element {
       border: 1px solid #D9D9D9;
    border-radius: 50%;
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
