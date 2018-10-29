<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card header="Admin/Profile" header-tag="h4" class="bg-deafult-card">
                    <div class="box-body">
                        <ul class="styled-ul p-l-25 list-lineheight">
                            <li><b>Support Emails:</b> Add any Support Email #1 or  # 2 and this will allow for us to get emails sent from users within POS in case of a questions.</li>
                            <li><b>Allow IP:</b>  Only these IP address can sign into the the Admin Panel</li>
                            <li><b>Security PIN: </b> Simply add a six digit numberical PIN which will be used when you sign in</li>
                            <li><b>Support Phones:</b> Simply add a cell phones you would like to get text messages from users when they click on Call Me button </li>
                        </ul>
                         <p><b>NOTE:</b> If you would like to change any of the field information simply update and Save.</p>
                    </div>
                </b-card>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <b-card class="mb-2" header="Information" header-tag="h4">
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">First:
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
                                        <label class="control-label col-md-4" for="input_Email">Support Email # 1:</label>
                                        <div class="col-md-9">
                                            <input type="email" class="form-control" id="input_Email" placeholder="Email">
                                        </div>
                                    </div>
                                     <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="input_Email">Support Email # 2:</label>
                                        <div class="col-md-9">
                                            <input type="email" class="form-control" id="input_Email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Allow IP:
                                        </label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="input_Password">Security PIN:</label>
                                        <div class="col-md-9">
                                            <input type="password" class="form-control" id="input_Password" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="input_Password">Password:</label>
                                        <div class="col-md-9">
                                            <input type="password" class="form-control" id="input_Password" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="input_Password">Confirm Password:</label>
                                        <div class="col-md-9">
                                            <input type="password" class="form-control" id="input_Password" placeholder="Password">
                                        </div>
                                    </div>
                                   
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Support Phone  # 1:
                                        </label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Support Phone  # 2:
                                        </label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4" for="text">Support Phone  # 3:
                                        </label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="text" placeholder="Some value">
                                        </div>
                                    </div>
                                    <div class="form-group p-10">
                                        <button type="button" class="btn btn-primary">Save</button>
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
export default {
    name: "formelements",
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="assets/css/custom_typo.css" scoped></style>
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
