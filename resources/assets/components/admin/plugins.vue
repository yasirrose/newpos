<template>
    <div class="row left-space">
        <div class="col-lg-12m add-price">
                <h2 class="head-price">App Plugin Pricing</h2>

                    <!-- <div class="table-responsive col-max col-lg-6 col-sm-12 col-xs-12"> -->
                       <!--  <b-alert show variant="info" v-if="seen">{{message}}</b-alert> -->

                    <div class="table-responsive col-maxx col-lg-6 col-sm-12 col-xs-12">

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Modules</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(plugin, index) in model.pluginsdata">
                                    <td><input type="text" name="" v-model="plugin.plugin_name" ></td>
                                    <td><input type="text" name="" v-model="plugin.plugin_price" ></td>
                                    <td> 
                                        <input type="radio" :id="'Active' + plugin.plugin_id + ''"  value="1" v-model="plugin.plugin_status">
                                        <label :for="'Active' + plugin.plugin_id + ''">Active</label>

                                        <input type="radio" :id="'Deactive' + plugin.plugin_id + ''" value="0" v-model="plugin.plugin_status">
                                         <label :for="'Deactive' + plugin.plugin_id + ''" >Deactive</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-offset-4 col-md-8 m-t-25">
                       
                        <button class="btn btn-success" @click="updatePlugin">Update</button>
                    </div>
            <modal name="modallogin" :adaptive="true">
                <div class="p-4">
                        <div class="row">
                            <div class="form-group">
                                <label for="name"> Plugin Name</label>
                                <input  v-model="model.plugin_name" name="plugin_name" type="text" required placeholder="Plugin Name" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="Price">Price</label>
                                <input  v-model="model.plugin_price" name="plugin_price" type="text" required placeholder="Plugin Price" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="Status">Status</label>
                                <input v-model="model.plugin_status" name="plugin_status" type="text" required placeholder="Plugin Status" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <button class="btn btn-primary" @click="addPlugin">Save</button>
                        </div>
                </div> 
            </modal>
        </div>
    </div>
</template>

<script>
 require("radiobox.css/dist/css/radiobox.min.css");
import miniToastr from 'mini-toastr';
import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)
miniToastr.init();
export default {
    name: "modals",
      name: "radios_checkboxes",
     data() {
            return {
            seen:false,
            model: {
                plugin_name: '',
                plugin_price: '',
                plugin_status: '',
                pluginsdata:''

            },
            data2:{
                d:""
            },
           
        }
    },
    mounted()
        {
            this.readPlugins();
        },
    methods: {
        addNewPlugin () {
                this.$modal.show('modallogin');
            },
        New() {
            this.plugins.push({
                value: ''
            });
            
        },
        readPlugins()
        {
            axios.get('./get_plugins')
                .then(response => {

                    //console.log(response.data.plugins);
                   // this.pluginsdata = response.data.plugins;
                    this.model.pluginsdata=response.data.plugins;
                });
        },
        addPlugin() {
            let vm = this;
                axios.post('./add_plugins', vm.model)
                .then( response =>{
                    vm.reset();
                    vm.$modal.hide('modallogin');
                    vm.readPlugins();
                })
               
        },
        updatePlugin () {
            let vm = this;
            vm.data2.d = vm.plugins;
            axios.post('./update_plugins', vm.model)
            .then( response =>{

                
                vm.readPlugins();
                //alert(response.data.message);
                if(response.data.message == "Record updated successfully"){

                    vm.message = response.data.message;

                    miniToastr.success(vm.message)
            /*successMsg() {
            
            },*/

                    vm.seen=true;
                }

                
            })
        },
        reset(){
            this.model.plugin_name= '',
            this.model.plugin_price= '',
            this.model.plugin_status= ''
        },
    },
}
    
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->

<style scoped>
 .add-price .table-bordered  table{
        border-collapse: collapse;
    }
   
 .add-price  .table-bordered.table-bordered tbody:before {
    line-height:3px;
    content:"-";
    display:block;
}
 .add-price  .table-bordered td{
        padding: 0;

    }
 .add-price  .table-bordered thead{
        border: none;
    }
 .add-price   .table-bordered input{
        padding: 14px;
        border: none;
        outline: none;
    }
 .add-price .table-bordered  input:focus{
        padding: 14px;
        margin:0;
        border:1px solid #868e96;
        width: 100%;
    }
 .add-price   .table-bordered th {
    border: none;
    background-color: #dcdcdc;

}
.add-price .table-bordered input[type="radio"] {
    display:none; 
}
.add-price .table-bordered label::before {
    padding: 7px 10px;
    margin: 6px 4px -3px 11px;
    border: 1px solid #e8d9d9;
    border-radius: 4px;
    content: "";
}
.add-price .table-bordered input[type="radio"]:checked + label::before{ 
    content: "";
    background-color:#60b360;
    border-color: #4c4;
}

.add-price h2.head-price {
    margin: 25px 20px;
    font-weight: bold;
}
.add-price .col-maxx
    {
        max-width: 100%;
        width: 100%;

    }
@media screen and (max-width: 1024px){
    .add-price table{
        width: 100%;

    }
    
}
@media screen and (max-width: 992px){
    .add-price table{
        width: 100%;
    }
    .add-price .col-maxx
{
        max-width: 100%;
    }
    .add-price .table-responsive {
    display: block;
    width: 100%;
}

    .add-price h2.head-price {
    margin: 25px 20px;
    font-weight: bold;
}
}
@media screen and (max-width: 768px){
    .add-price table{
        width: 100%;

    }
    .add-price .table-responsive {
    display: block;
    width: 100%;}

     .add-price h2.head-price {
   
    margin: 30px 20px 20px 21px;
    font-weight: bold;
}
 .add-price .col-maxx
 {
        max-width: 100%;
    }
}
@media screen and (max-width: 480px){
    .add-price table{
        width: 100%;

    }
    .add-price h2.head-price {
       margin: 85px 63px 16px 20px;
    font-weight: bold;
}
.add-price .table-responsive {
    display: block;
    width: 100%;}
     .col-maxx
 {
        max-width: 100%;
    }
}

@media screen and (max-width: 320px){
    .add-price table{
        width: 100%;

    }
    .add-price .table-responsive {
    display: block;
    width: 100%;}
    .add-price h2.head-price {
    margin: 25px 20px;
    font-weight: bold;
}
 .add-price .col-maxx
 {
        max-width: 100%;
    }
}

</style>