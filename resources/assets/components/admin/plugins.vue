<template>
    <div class="row">
        <div class="col-lg-12">
            <!-- <b-card header="App Plugins Pricing" header-tag="h4" class="bg-success-card"> -->
                <h2 class="head-price">App Plugin Pricing</h2>
                    <div class="table-responsive col-lg-6">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Modules</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                               <!--  <tr v-for="plugin in model.pluginsdata">
                                    <td>{{ plugin.plugin_name }}</td>
                                    <td> {{ plugin.plugin_price }}</td>
                                    <td> 
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="custom-controls-stacked">
                                                    <b-form-radio  value="1" v-model="plugin.plugin_status"class="primaryradio">Active</b-form-radio>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="custom-controls-stacked">
                                                    <b-form-radio  value="0" v-model="plugin.plugin_status" class="primaryradio">Deactive</b-form-radio>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr> -->

                                 <tr >
                                    <td><input type="" name="" value="TECHLEADZ"></td>
                                    <td><input type="" name="" value="TECHLEADZ"></td>
                                    <td> 
                                            <!-- <b-form-radio-group :options="radiooptions" class="radio-border"></b-form-radio-group> -->
                                            <label for="active">Active</label>
                                            <input type="radio" name="" id="active">
                                    </td>
                                </tr>
                                <tr >
                                    <td><input type="" name="" value="TECHLEADZ"></td>
                                    <td><input type="" name="" value="TECHLEADZ"></td>
                                    <td> 
                                 
                                            <!-- <b-form-radio-group :options="radiooptions" class="radio-border"></b-form-radio-group> -->
                                            <label for="active">Active</label>
                                            <input type="radio" name="" id="active">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-offset-4 col-md-8 m-t-25">
                       
                        <button class="btn btn-success" @click="updatePlugin">Update</button>
                    </div>
            <!-- </b-card>
 -->
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
import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)
export default {
    name: "modals",
      name: "radios_checkboxes",
     data() {
            return {
          radiooptions: [
                { text: 'Active', value: '1' },
                { text: 'Deactive', value: '0' },
            ],
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
            axios.get('./api/get_plugins')
                .then(response => {
                   // this.pluginsdata = response.data.plugins;
                    this.model.pluginsdata=response.data.plugins;
                });
        },
        addPlugin() {
            let vm = this;
                axios.post('./api/add_plugins', vm.model)
                .then( response =>{
                    vm.reset();
                    vm.$modal.hide('modallogin');
                    vm.readPlugins();
                })
               
        },
        updatePlugin () {
            let vm = this;
            vm.data2.d = vm.plugins;
            axios.post('./api/update_plugins', vm.model)
            .then( response =>{
                vm.readPlugins();
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
    table{
        border-collapse: collapse;
    }
   
    tbody:before {
    line-height:3px;
    content:"-";
    color:white; /* to hide text */
    display:block;
}
    td{
        padding: 0;

    }
    thead{
        border: none;
    }
     input{
        padding: 14px;
        border: none;
        outline: none;
    }
    input:focus{
        padding: 14px;
        margin:0;
        
        border:1px solid #868e96;
        width: 100%;
    }
    .table-bordered th {
    /* vertical-align: middle; */
    border: none;
    background-color: #dcdcdc;

}
.custom-radio .custom-control-label::before {
     border-radius: 0% !important; 
}
.custom-control-label::before {
    position: absolute;
    top: 0.40rem;
    left: 0.1rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #dee2e6;
}



</style>