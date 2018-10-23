<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Plugins" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Plugin Name</label>
                                            <input v-for="item in items" v-model="item.value" id="name" name="plugin_name" type="text" required autofocus placeholder="Plugin Name" class="form-control" />
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="Price">Price</label>
                                            <input v-for="price in prices" v-model="price.value" name="price" id="price" type="price" required placeholder="Price" class="form-control" />
                                        </validate>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-offset-4 col-md-8 m-t-25">
                                <button type="button" class="btn btn-primary" @click="New">Add New
                                </button>
                                <!-- <button type="submit" class="btn btn-effect-ripple btn-secondary  reset_btn1" @click="form_reset">
                                    Submit
                                </button> -->
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
import VueForm from "vue-form";
import options from "src/validations/validations.js";
Vue.use(VueForm, options);export default {
     data() {
            return {
                
                items: [{
                    value: ''
                }],
                prices: [{
                    value: ''
                }],
        }
    },
    methods: {
        New() {
            this.items.push({
                value: ''
            });
            this.prices.push({
                value: ''
            });
        },
    },
}
    
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style scoped>
    
</style>