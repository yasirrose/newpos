<template>
    <b-card header="Exporting Item Library" header-tag="h4" class="bg-success-card">
        <div class="row">
            <div class="col-lg-12">
                <b-card  class="bg-deafult-card">
                    <div class="box-body">
                        <ul class="styled-ul p-l-25 list-lineheight">
                           <li><b>Exporting:</b> simply select a format you would like to export your item library information.</li>
                        </ul>
                    </div>
                </b-card>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <p>
                        <b>Export format options:</b>
                        <router-link to=""><b>CSV</b></router-link> |
                        <router-link  to=""><b>Excel</b></router-link>
                    </p>
                    
                </div>
            </div>
        </div>
    </b-card>
</template>
<script>

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
<style src="assets/css/custom_typo.css" scoped></style>
<style type="text/css" scoped>

</style>
