<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Plugins" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="name">Plugin Name</label>
                                        <input v-for="plugin in model.pluginsdata" v-model="plugin.plugin_id" name="plugin_id[]" type="hidden" />
                                        <input v-for="plugin in model.pluginsdata" v-model="plugin.plugin_name" name="plugin_name[]" type="text" required placeholder="Plugin Name" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="Price">Price</label>
                                        <input v-for="plugin in model.pluginsdata" v-model="plugin.plugin_price" name="plugin_price[]" type="text" required placeholder="Price" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="Status">Status</label>
                                        <input v-for="plugin in model.pluginsdata" v-model="plugin.plugin_status" name="plugin_status[]" type="text" required placeholder="Price" class="form-control" />
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-offset-4 col-md-8 m-t-25">
                                <button class="btn btn-primary" @click="addNewPlugin">+ Add New</button>
                                <button class="btn btn-success" @click="updatePlugin">Update</button>
                            </div>
                    </div>
                </div>
            </b-card>

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

import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)
export default {
    name: "modals",
     data() {
            return {
          
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
    
</style>