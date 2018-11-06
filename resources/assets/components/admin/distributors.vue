<template>
    <div class="row">
       
        <div class="col-lg-12 mb-3">

             <div class="container-here">

                    <div class="tabel-main-header">
                        <div class="in-left">
                            <h3>Distributors</h3>
                            <input type="text" placeholder="Search">
                        </div>
                        <div class="in-right">
                            <ul>
                                <li>
                                    <a class="tools" href="#">Tools</a>
                                    <div class="tools-wrapper">
                                        <div><a href="#">Add Distributor</a></div>
                                        <div><a href="#">Print PDF</a></div>
                                        <div><a href="#">Export</a></div>
                                    </div>
                                </li>
                                <li>
                                    <select>
                                        <option>50</option>
                                        <option>40</option>
                                        <option>20</option>
                                        <option>10</option>
                                    </select>
                                </li>
                                <li>
                                    <a href="#"><span><</span></a>
                                    <a href="#"><span>1</span></a>
                                    <a href="#"><span>2</span></a>
                                    <a href="#"><span>3</span></a>
                                    <a href="#"><span>></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <table class="table-container-wapper">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date Created</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Glazer of Kansas</td>
                                <td>john@glazers.com</td>
                                <td>(788) 999-999</td>
                                <td>01/10/2018</td>
                                <td>Active</td>
                                <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="show-record">Viewing 1 of 50 records </div>

                </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "advanced_tables",

    data() {
        return {
            
            
        }
    },
    mounted() {
       
            
    }
}
</script>
<style type="text/css" scoped>
.container-here{max-width:900px; font-family:arial; margin-top:30px; padding:0px 30px;}


.tabel-main-header{clear:both; float:left; width:100%; margin-bottom:5px;}
.tabel-main-header .in-left{float:left;}
.tabel-main-header .in-left h3{font-size:18px; font-weight:bold; color:#000;}
.tabel-main-header .in-left input{display:block; width:150px; height:35px; padding:0px 10px; border:1px solid #b7b7b7; background:none; border-radius:4px;}
.tabel-main-header .in-right{float:right; margin-top:30px;}
.tabel-main-header .in-right ul{}
.tabel-main-header .in-right ul li{float:left; position:relative;}
.tabel-main-header .in-right ul li span{display:inline-block; text-align:center; color:#000; width:32px; height:32px; line-height:32px;}
.tabel-main-header .in-right ul li select{height:32px; width:60px; outline:none; border:1px solid #b7b7b7; background:none;}
.tabel-main-header .in-right ul li a{float:left; margin:0px 3px; height:32px; line-height:32px; border:1px solid #b7b7b7;}
.tabel-main-header .in-right ul li a.tools{padding:0px 15px;}
.tabel-main-header .in-right ul li a:hover{background:#f3f3f3;}
.tabel-main-header .in-right ul li .tools-wrapper{display:none; border:1px solid #b7b7b7; width:115px; background-color:#fff; position:absolute; top:100%; left:0px; z-index:55;}
.tabel-main-header .in-right ul li .tools-wrapper a{display:block; border:none; float:none; font-size:12px; color:#000; padding:5px 10px;}
.tabel-main-header .in-right ul li:hover .tools-wrapper{display:block;}


.table-container-wapper{}
.table-container-wapper thead{}
.table-container-wapper thead tr{}
.table-container-wapper thead tr th{border:1px solid #b7b7b7; font-size:12px; padding:5px 12px; background:#f3f3f3; font-weight:normal;}

.table-container-wapper thead tr th:nth-child(1){width:5%;}
.table-container-wapper thead tr th:nth-child(2){width:12%;}
.table-container-wapper thead tr th:nth-child(3){width:12%;}
.table-container-wapper thead tr th:nth-child(4){width:12%;}
.table-container-wapper thead tr th:nth-child(5){width:12%;}
.table-container-wapper thead tr th:nth-child(6){width:12%;}
.table-container-wapper thead tr th:nth-child(7){width:10%;}

.table-container-wapper tbody{}
.table-container-wapper tbody tr{}
.table-container-wapper tbody tr td{border:1px solid #e5e5e5; font-size:12px; padding:5px 12px;}
.table-container-wapper tbody tr td a{font-size:12px;}

.show-record{text-align:right; font-size:12px; padding:15px;}


</style>