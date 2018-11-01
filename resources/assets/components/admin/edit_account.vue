<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                
                <b-card class="mb-2 bg-success-card" header="Accounts / Editing" header-tag="h4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group p-10 pull-right">
                                <div class="col-md-offset-4 col-md-8">
                                    <button type="button" @click="go_back" class="btn btn-default btn-lg mt-3">Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row">
                                <div class="col-md-3">
                                    <b-card header="Store Information" header-tag="h4" class="mb-2 mt-2 bg-default-card" align="left">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Frist
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Last
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Store Name
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Address
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">City
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Zip
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">State
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Phone
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Email</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Status</label>
                                            <b-form-radio-group :options="radiooptions"></b-form-radio-group>
                                        </div>
                                    </b-card>   
                                </div>
                                <div class="col-md-3">
                                    <b-card header="Billing Card Information" header-tag="h4" class="mb-2 mt-2 bg-default-card" align="left">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Card Type</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>

                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Ending Card#</label>
                                            <div class="col-md-9">
                                                <input type="number" class="form-control" id="number" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Frist Name</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                        </div>
                                       <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Address
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">City
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Zip
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">State
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">CVV
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Exp. Date</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Lock Acct.</label>
                                             <b-form-checkbox class="primarycheck"></b-form-checkbox>
                                        </div>
                                    </b-card> 
                                </div>
                                <div class="col-md-3">
                                    <b-card header="Billing Card Information" header-tag="h4" class="mb-2 mt-2 bg-default-card" align="left">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">DB Created</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>

                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Name</label>
                                            <div class="col-md-9">
                                                <input type="number" class="form-control" id="number" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Last Paid</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                        </div>
                                       <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Next Payment
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Payment Amount
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Registers
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Active Employees
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Total Items
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Total Trans YTD</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Total Net Sales YTD</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Total Credit Trans. YTD</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Total Customers</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Invoice History</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Current PIN</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Assign New PIN</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        
                                    </b-card> 
                                </div>
                                <div class="col-md-3">
                                     <b-card class="mb-2 mt-2 bg-default-card" align="left">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Select Modules</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="plugin in model.pluginsdata">
                                                    <td>{{ plugin.plugin_name }}</td>
                                                    <td> {{ plugin.plugin_price }}</td>
                                                    <td> 
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="custom-controls-stacked text-center">
                                                                    <b-form-checkbox class="primarycheck"></b-form-checkbox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group p-10 form-actions">
                                    <div class="col-md-offset-4 col-md-8">
                                        <button type="button" class="btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    require("radiobox.css/dist/css/radiobox.min.css");
export default {
    name: "formelements",
    name: "radios_checkboxes",
    data(){
        return{
           
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

        readPlugins()
        {
            axios.get('./api/get_plugins')
                .then(response => {
                   // this.pluginsdata = response.data.plugins;
                    this.model.pluginsdata=response.data.plugins;
                });
        },
        go_back()
        {
            this.$router.go(-1);
        }
    }
}
</script>
<style type="text/css" scoped>
#color {
    height: 35px;
}
    /deep/ .form-control:disabled{
        cursor: not-allowed;
    }
    .disabled{
        cursor:not-allowed;
    }
.form-control:active, .input-group .form-control:hover{
    z-index: 1;
}
</style>
