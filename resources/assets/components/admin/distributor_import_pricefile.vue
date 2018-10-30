<template>
    <b-card header="Distributors / Import Pricefile" header-tag="h4" class="bg-success-card">
        <div class="row">
            <div class="col-lg-12">
                <b-card header="Admin/Profile" header-tag="h4" class="bg-default-card">
                    <div class="box-body">
                        <ul class="styled-ul p-l-25 list-lineheight">

                            <li><b>Importing Pricefile:</b> Simply drag and drop the file that belongs to a distributor</li>
                            <ul class="styled-ul p-l-25 list-lineheight">
                                <li>
                                    Make sure the file is saved and imported as the following formating in order to work properly
                                </li>
                            </ul>
                            <li><b>Standard:</b> FTP</li>
                            <li><b>Glazers:</b> Glazers_pricefile.txt</li>
                            <li><b>Worldwide:</b> Worldwide_pricefile.csv</li>
                            <li><b>Pick a date:</b> Select a date in which you would like to upload a file</li> 
                        </ul>
                    </div>
                </b-card>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div>
                    <form method="" class="form-horizontal">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-4" for="example-select">Distributors:</label>
                                    <div class="col-md-8 col-md-offset-2">
                                        <select id="example-select" name="example-select" class="form-control" size="1">
                                            <option value="0">
                                                Select
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group p-10">
                                    <label class="control-label col-md-4" for="example-select">File Type:</label>
                                   <div class="col-md-8 col-md-offset-2">
                                        <select id="example-select" name="example-select" class="form-control" size="1">
                                            <option value="0">
                                                Select
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group p-10">
                                    <label class="control-label col-md-4" for="date">Pick a date:
                                    </label>
                                    <div class="col-md-8 col-md-offset-2">
                                        <input type="date" class="form-control" id="date" value="yyyy-mm-dd" aria-selected="true">
                                    </div>
                                </div>
                                <div class="col-md-8 col-md-offset-2">
                                    <vue-dropzone ref="product_attachment" id="dropzone" :options="dropzoneOptions" @vdropzone-success="uploaded">
                                    </vue-dropzone>
                                </div>
                                <br>
                                <div class="col-md-8 col-md-offset-2">
                                        <button type="button" class="btn btn-success">Save</button>
                                        <button type="button" class="btn btn-warning">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </b-card>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
export default {
    name: "formelements",
    name: 'vue2-dropzone',
    components: {
        vueDropzone: vue2Dropzone,
    },
    data(){
        return{
            dropzoneOptions:{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                // maxFilesize: 0.5,
                maxFiles:1,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    mounted: function() {

    },

    methods: {
        uploaded() {
            console.log('File successfully uploaded')
        }
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
