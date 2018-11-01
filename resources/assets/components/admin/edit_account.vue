<template >
<div class="row">
    <div class="col-lg-12 left-space">
        <!-- <b-card header="App Plugins Pricing" header-tag="h4" class="bg-success-card"> -->
        <h2 class="head-price"><a href="">Accounts/</a>Editing Anitoch Liquor
            <div class="col-md-offset-4 col-md-8 m-t-25 btn-men btn-right" id="primary_nav_wrap">    
            <div class="dropdown">
  <button class="dropbtn">Tools</button>
  <div class="dropdown-content">
    
    <a href="#">Print PDF</a>
   
  </div>
</div>
        </div>
        </h2>
        
        <div class="table-responsive col-max col-lg-6 col-sm-12 col-xs-12">
            <table class="tab-1 table table-bordered">
                <thead>
                    <tr>
                        <th colspan="2">Store Information</th>
                        
                        
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
                    <tr class="ac-label">
                        <td><p> First </p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Last</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Store Name</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Address</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>City</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Zip</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>State</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Phone</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Email</p></td>
                        <td><input type="" name="" value=""></td>
                    </tr>
                    <tr class="ac-label">
                        <td><p>Status</p></td>
                        <td> <input type="radio" name="green" id="active">
                        <label for="active">Active</label>
                        
                        <input type="radio" name="green" id="deactive">
                        <label for="deactive">Deactive</label>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
    
    <!-- Billing card information -->
    <!-- Select Modules -->
    <!--End OF Select Modules -->
    <div class="table-responsive col-max col-lg-6 col-sm-12 col-xs-12">
        <table class="tab-2 table table-bordered">
            <thead>
                <tr>
                    <th colspan="2">Billing Card Information</th>
                    
                    
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
                <tr class="ac-label">
                    <td><p> Card Type </p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Ending Card #</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>First Name</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Address</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>City</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Zip</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>State</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>CVV</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Lock Acct.</p></td>
                    <td>
                        
                        
                        <input type="radio"  id="act">
                        <label for="act"></label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- end of Billing card information -->
    <!-- detail -->
        <div class="table-responsive col-max col-lg-6 col-sm-12 col-xs-12">
        <table class="tab-3 table table-bordered">
            <thead>
                <tr>
                    <th colspan="2">Details</th>
                    
                    
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
                <tr class="ac-label">
                    <td><p> Card Type </p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Ending Card #</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>First Name</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Address</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>City</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Zip</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>State</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>CVV</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><input type="" name="" value=""></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Lock Acct.</p></td>
                    <td>
                        
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- end of  detail -->
    <!-- Select Modules -->
    <div class="table-responsive col-max col-lg-6 col-sm-12 col-xs-12">
        <table class="tab-4 table table-bordered">
            <thead>
                <tr>
                    <th>Select Modules</th>
                    <th>Price</th>
                    <th>Action</th>
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
                <tr class="ac-label">
                    <td><p> Card Type </p></td>
                    <td><p>99.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Ending Card #</p></td>
                    <td><p>79.00</p></td>
                    <td class="check-btn"> <input type="radio" name="" id="end" >
                    <label for="end"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>First Name</p></td>
                    <td><p>99.00</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Address</p></td>
                    <td><p>79.00</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>City</p></td>
                    <td><p>5.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Zip</p></td>
                    <td><p>5.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>State</p></td>
                    <td><p>0.00</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>CVV</p></td>
                    <td><p>5.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><p>$9.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><p>0.00</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><p>20.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><p>8.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                <tr class="ac-label">
                    <td><p>Exp.Date</p></td>
                    <td><p>$9.99</p></td>
                    <td class="check-btn"> <input type="radio" name="green" id="deactive">
                    <label for="deactive"></label></td>
                </tr>
                
            </tbody>
        </table>
    </div>
    <!--End OF Select Modules -->
        <div class="col-md-offset-4 col-md-8 m-t-25">    
            <button class="btn btn-success save-btn" @click="updatePlugin">Save</button>
        </div>
        <!-- <div class="col-md-offset-4 col-md-8 m-t-25 btn-right">    
            <button class="btn btn-success save-btn tool-btn" @click="updatePlugin">Tools</button><br>
            <button class="btn btn-success save-btn print-btn" @click="updatePlugin">Print PDF</button>
        </div> -->
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
<style scoped src="assets/css/custom.css" rel="stylesheet"></style>
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