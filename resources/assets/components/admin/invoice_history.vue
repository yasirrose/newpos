<template>
    <b-card header="Invoices" header-tag="h4" class="bg-success-card">
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group pull-right">
                    <router-link to="/admin/"><b>Export</b></router-link> |
                    <router-link to="/admin/"><b>Print PDF</b></router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive col-lg-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Invoice ID</th>
                                <th>Billing date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="">
                                <td><b-form-checkbox class="primarycheck"></b-form-checkbox></td>
                                <td>Invoice 1</td>
                                <td>10/25/18</td>
                                <td>$185.00</td>
                                <td>Paid</td>
                            </tr>
                            <tr v-for="">
                                <td><b-form-checkbox class="primarycheck"></b-form-checkbox></td>
                                <td>Invoice 1</td>
                                <td>10/25/18</td>
                                <td>$185.00</td>
                                <td>Paid</td>
                            </tr>
                            <tr v-for="">
                                <td><b-form-checkbox class="primarycheck"></b-form-checkbox></td>
                                <td>Invoice 1</td>
                                <td>10/25/18</td>
                                <td>$185.00</td>
                                <td>Paid</td>
                            </tr>
                            <tr v-for="">
                                <td><b-form-checkbox class="primarycheck"></b-form-checkbox></td>
                                <td>Invoice 1</td>
                                <td>10/25/18</td>
                                <td>$185.00</td>
                                <td>Paid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </b-card>
</template>
<script>
require("checkbox.css/dist/css/checkbox.min.css");
export default {

    data(){
        return{
          
        }
    },
    mounted: function() {

    },

    methods: {
        
    },
    destroyed: function() {

    }
}
</script>
<style type="text/css" scoped>

</style>
