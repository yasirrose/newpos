<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="Accounts" header-tag="h4" class="bg-success-card">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group pull-right">
                            <router-link to="/admin/add_account"><b>Add Acct.</b></router-link> |
                            <router-link @click.native="text_acct"  to=""><b>Text Acct.</b></router-link> |
                            <router-link @click.native="email_acct" to=""><b>Email</b></router-link> |
                            <router-link to="/admin/"><b>Export List</b></router-link> |
                            <router-link to="/admin/"><b>Print PDF</b></router-link>
                        </div>
                    </div>
                </div>

                <datatable title="" :rows="rowdata" :columns="columndata"></datatable>
            </b-card>
                <modal name="modal_text_acct" :adaptive="true">
                    <div class="p-4">
                        <h5>Text Account</h5>
                        <div class="row">
                            <div class="form-group">
                                <input   type="text" required placeholder="Subject" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                 <textarea rows="4" class="form-control resize_vertical" id="text_area" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </modal>
                <modal name="modal_email_acct" :adaptive="true">
                    <div class="p-4">
                        <h5>Email Account</h5>
                        <div class="row">
                            <div class="form-group">
                                <input   type="text" required placeholder="Email Account" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                 <textarea rows="4" class="form-control resize_vertical" id="text_area" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </modal>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import VModal from 'vue-js-modal'
Vue.use(VModal)
import {
    ClientTable,
    Event
} from 'vue-tables-2';
import datatable from "../plugins/DataTable/DataTable.vue";
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
                "lname": "Wallace",
                "age": 19,
                "state": "MD",
                "button": "<router-link to='/admin/edit_account'>Edit </router-link>"
            }, {
                "fname": "Deborah",
                "lname": "Morrison",
                "age": 14,
                "state": "VT",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Nerissa",
                "lname": "Wade",
                "age": 7,
                "state": "DE",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Glenn",
                "lname": "Bommi",
                "age": 8,
                "state": "MO",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Kate",
                "lname": "Azcunaga",
                "age": 25,
                "state": "ME",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Jesse",
                "lname": "Ingham",
                "age": 50,
                "state": "OK",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Gateri",
                "lname": "Sergent",
                "age": 50,
                "state": "MA",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }, {
                "fname": "Marian",
                "lname": "Malmfeldt",
                "age": 50,
                "state": "DC",
                "button": "<i class='fa fa-pencil text-info mr-3'></i><i class='fa fa-trash text-danger'></i>"
            }],

            columndata: [ // Array of objects
                {
                    label: 'Store Name', // Column name
                    field: 'fname', // Field name from row
                    numeric: false, // Affects sorting
                    width: "200px", //width of the column
                    html: false, // Escapes output if false.
                }, {
                    label: 'First Name',
                    field: 'lname',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Age',
                    field: 'age',
                    numeric: true,
                    html: false,
                }, {
                    label: 'State',
                    field: 'state',
                    numeric: false,
                    html: false,
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
            }
        }
    },
    mounted() {


    
    },
    methods: {
        text_acct () {
                this.$modal.show('modal_text_acct');
            },
        email_acct () {
                this.$modal.show('modal_text_acct');
            },
    }
}
</script>
