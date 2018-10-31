<template>
    <b-card header="Ads" header-tag="h4" class="bg-success-card">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad1">Ad 1:</label>
                                    <input type="file" @change="ad_one" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <img v-if="url_ad_one" :src="url_ad_one" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad2">Ad 2:</label>
                                    <input type="file" @change="ad_two" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <img v-if="url_ad_two" :src="url_ad_two" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad3">Ad 3:</label>
                                    <input type="file" @change="ad_three" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <img v-if="url_ad_three" :src="url_ad_three" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad1">Video 1:</label>
                                    <input type="file" @change="video_one" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <video v-if="url_video_one" :src="url_video_one"> </video>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad2">Video 2:</label>
                                    <input type="file" @change="video_two" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <video v-if="url_video_two" :src="url_video_two"> </video>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="ad3">Video 3:</label>
                                    <input type="file" @change="video_three" />
                                </div>
                            </div>
                            <div class="col-lg-6 preview">
                                <video v-if="url_video_three" :src="url_video_three"> </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6"></div>
                    <div class="col-lg-6">
                        <button class="btn btn-success">Apply Ads</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <b-card  class="bg-deafult-card">
                            <div class="box-body">
                                <ul class="styled-ul p-l-25 list-lineheight">
                                    <li><b>Updating CFD images and video: </b> Simply upload images and video you like to share on any store. You can either select one particular store or select all store to apply to many accounts</li>
                                </ul>
                                <p><b>NOTE: </b>Ads on the left will apply to all selected stores; if you would like to change or update on particular account after updating click view ads and update from within that particular account.</p>
                            </div>
                        </b-card>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <datatable title="" :rows="rowdata" :columns="columndata"></datatable>
                    </div>
                </div>
            </div>
        </div>
    </b-card>
</template>
<script>
import Vue from 'vue';
import VModal from 'vue-js-modal'
Vue.use(VModal)
import {
    ClientTable,
    Event
} from 'vue-tables-2';
import datatable from "components/plugins/DataTable/DataTable.vue";
Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable
    },
    data() {
        return {
            rowdata: [{
                "fname": "Toya",
                "videos": "Wallace",
                "ads": 19,
                "button": "Vew Ads"
            }, {
                "fname": "Toya",
                "videos": "Wallace",
                "ads": 19,
                "button": "Vew Ads"
            }, {
                "fname": "Toya",
                "videos": "Wallace",
                "ads": 19,
                "button": "Vew Ads"
            }],

            columndata: [ // Array of objects
                {
                    label: 'Store Name', // Column name
                    field: 'fname', // Field name from row
                    numeric: false, // Affects sorting
                    width: "200px", //width of the column
                    html: false, // Escapes output if false.
                }, {
                    label: 'video',
                    field: 'videos',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Ads',
                    field: 'ads',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Action',
                    field: 'button',
                    numeric: false,
                    html: true,
                }
            ],
           
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                skin: "table-hover table-striped table-bordered",
                perPage: 7,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 3,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                }
            },
             url_ad_one: null,
             url_ad_two: null,
             url_ad_three: null,

             url_video_one: null,
             url_video_two: null,
             url_video_three: null,
        }
    },
    mounted() {

        
    
    },
    methods: {

        ad_one(e) {
          const file = e.target.files[0];
          this.url_ad_one = URL.createObjectURL(file);
        },
        ad_two(e) {
          const file = e.target.files[0];
          this.url_ad_two = URL.createObjectURL(file);
        },
        ad_three(e) {
          const file = e.target.files[0];
          this.url_ad_three = URL.createObjectURL(file);
        },
        video_one(e) {
          const file = e.target.files[0];
          this.url_video_one = URL.createObjectURL(file);
        },
        video_two(e) {
          const file = e.target.files[0];
          this.url_video_two = URL.createObjectURL(file);
        },
        video_three(e) {
          const file = e.target.files[0];
          this.url_video_three = URL.createObjectURL(file);
        }

    }
}
</script>
<style src="assets/css/custom_typo.css" scoped></style>
<style type="text/css" scoped>


.preview {
  display: flex;
  justify-content: left;
  align-items: left;
}

.preview img {
  max-width: 100%;
  max-height: 100px;
}

.preview video {
  max-width: 100%;
  max-height: 100px;
}

</style>
