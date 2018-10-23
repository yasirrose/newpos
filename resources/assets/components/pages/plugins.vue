<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Plugins" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Plugin Name</label>
                                            <input v-for="plugin in plugins" v-model="plugin.plugin_id" name="plugin_id[]" type="hidden" />
                                            <input v-for="plugin in plugins" v-model="plugin.plugin_name" id="plugin_name" name="plugin_name" type="text" required autofocus placeholder="Plugin Name" class="form-control" />
                                            
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="Price">Price</label>
                                            <input v-for="plugin in plugins" v-model="plugin.plugin_price" name="plugin_price" id="plugin_price" type="text" required placeholder="Price" class="form-control" />
                                            
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="Status">Status</label>
                                            <input v-for="plugin in plugins" v-model="plugin.plugin_status" name="plugin_status" id="plugin_status" type="text" required placeholder="Price" class="form-control" />
                                           
                                        </validate>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-offset-4 col-md-8 m-t-25">
                                <button class="btn btn-primary" v-on:click="login">+ Add New</button>
                                <!-- <button type="submit" class="btn btn-effect-ripple btn-secondary  reset_btn1" @click="form_reset">
                                    Submit
                                </button> -->
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>

            <modal name="modallogin" :adaptive="true">
                <div class="p-4">
                    <div class="row">
                        <div class="form-group">
                            <validate tag="div">
                                <label for="name"> Plugin Name</label>
                                <input  v-model="model.plugin_name" id="plugin_name" name="plugin_name" type="text" required autofocus placeholder="Plugin Name" class="form-control" />
                            </validate>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <validate tag="div">
                                <label for="Price">Price</label>
                                <input  v-model="model.plugin_price" name="plugin_price" id="plugin_price" type="text" required placeholder="Plugin Price" class="form-control" />
                                
                            </validate>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <validate tag="div">
                                <label for="Status">Status</label>
                                <input v-model="model.plugin_status" name="plugin_status" id="plugin_status" type="text" required placeholder="Plugin Status" class="form-control" />
                               
                            </validate>
                        </div>
                    </div>
                    <div class="row">
                        <button class="btn btn-primary" @click="onSubmit">Save</button>
                    </div>
                </div>
                
            </modal>
        </div>
    </div>
</template>
<script>
    import Vue from "vue"
    import VModal from 'vue-js-modal'

    Vue.use(VModal)
export default {
    name: "modals",
     data() {
            return {
            plugins : [],
            model: {
                plugin_name: '',
                plugin_price: '',
                plugin_status: ''

            }
        }
    },
    mounted()
        {
            this.readPlugins();
        },
    methods: {
        login () {
                this.$modal.show('modallogin');
            },
        New() {
            this.plugins.push({
                value: ''
            });
            
        },
        readPlugins()
        {
            axios.get('./api/getPlugins')
                .then(response => {
                    this.plugins = response.data.plugins;
                });
        },
        onSubmit() {
            let vm = this;
                axios.post('./api/addPlugins', vm.model)
                .then( response =>{
                    vm.reset();
                    vm.$modal.hide('modallogin');
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