<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card class="mb-2 bg-success-card" header="Distributors / Glazer of Kansas" header-tag="h4">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group pull-right">
                                <router-link to="/admin/"><b>Print PDF</b></router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row">
                                <div class="col-md-6">
                                    <b-card header="Distributor Information" header-tag="h4" class="mb-2 mt-2 bg-default-card" align="left">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Frist:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Last:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Company Name:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="text">Address:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Some value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">City:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Zip:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">State:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Phone:
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Email:</label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="text" placeholder="Enter value">
                                            </div>
                                        </div>
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-4" for="number">Status:</label>
                                            <b-form-radio-group :options="radiooptions"></b-form-radio-group>
                                        </div>

                                        <div class="row">
                                            <div class="form-group p-10 form-actions">
                                                <div class="col-md-offset-4 col-md-8">
                                                    <button type="button" class="btn btn-success">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card>   
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

            },
            data2:{
                d:""
            },
        }
    },
    mounted()
        {
        
        },
    methods: {

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
