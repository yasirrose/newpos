<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-3 offset-lg-5 col-sm-4 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div id="phone"> 
                    <div id="wrapper">    
                        <div class="key" rel="1">1</div>
                        <div class="key" rel="2">2</div>
                        <div class="key" rel="3">3</div>
                        <div class="clear"></div>
                        <div class="key" rel="4">4</div>
                        <div class="key" rel="5">5</div>
                        <div class="key" rel="6">6</div>
                        <div class="clear"></div>
                        <div class="key" rel="7">7</div>
                        <div class="key" rel="8">8</div>
                        <div class="key" rel="9">9</div>
                        <div class="clear"></div>
                        <div class="key special" rel="*"></div>
                        <div class="key" rel="1">0</div>
                        <div class="key special" rel="#"></div>
                        <div class="clear"></div>
                        <div class="key nb"></div>
                        <div class="key phone" rel="Make Call">Sign In</div>
                        <div class="key nb"></div>
                        <div class="clear"></div>
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
body {
  font-family: 'Lato', sans-serif;
  font-weight: 200;
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
#phone {   background:url(https://blogs.which.co.uk/technology/files/2013/03/iphone_5_hero.jpg) no-repeat 50.4% top;
  background-size: contain;
  height:655px;
}
#wrapper {
  width:252px;
  height:410px;
  margin:0 auto 0 auto;
  position:relative;
  top:116px;
  padding:24px 0 0 0;
  background:#fff;
}
.key {
  border-radius: 50px 50px 50px 50px;
  color:#444;
  width:70px;
  height:70px;
  text-align:center;
  font-size:30px;
  float:left;
  box-sizing:border-box;
  padding:5px 0 0 0;
  margin:0 7px 10px 7px;
  border:1px solid #444;
  cursor:pointer;
}
.key span {
  display:block;
  color:#444;
  text-align:center;
  font-size:12px;
  text-transform:uppercase;
}
.key.special {
  line-height:60px;
}
.key.nb {
  border:none;
}
.key.phone {
  background:#5CDB74;
  border:none;
  color:#FFF;
  line-height:60px;
  font-size:40px;
}
.clear {
  clear:both;
}
</style>
