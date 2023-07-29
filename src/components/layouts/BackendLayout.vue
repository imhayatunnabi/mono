<template>
    <div class="navbar-fixed sidebar-fixed" id="body">
        <!-- <script>
            NProgress.configure({ showSpinner: false });
                  NProgress.start();
        </script> -->
        <div id="toaster"></div>
        <div class="wrapper">
            <SidebarComponent></SidebarComponent>
            <div class="page-wrapper">
                <HeaderComponent></HeaderComponent>
                <div class="content-wrapper">
                    <div class="content">
                        <!-- slot for backend create this slot named backend -->
                        <slot name="backend"></slot>
                    </div>
                </div>
                <FooterComponent></FooterComponent>
            </div>
        </div>
    </div>
</template>
<script>
// Import Vue component dependencies

import HeaderComponent from '../partials/HeaderComponent.vue'
import FooterComponent from '../partials/FooterComponent.vue'
import SidebarComponent from '../partials/SidebarComponent.vue'

// Import external scripts using proper module syntax
import '../../assets/backend/plugins/nprogress/nprogress.js'
import '../../assets/backend/plugins/jquery/jquery.min.js'
import '../../assets/backend/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'https://unpkg.com/hotkeys-js/dist/hotkeys.min.js'
import '../../assets/backend/plugins/apexcharts/apexcharts.js'
import '../../assets/backend/plugins/DataTables/DataTables-1.10.18/js/jquery.dataTables.min.js'
import '../../assets/backend/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js'
import '../../assets/backend/plugins/jvectormap/jquery-jvectormap-world-mill.js'
import '../../assets/backend/plugins/jvectormap/jquery-jvectormap-us-aea.js'
import '../../assets/backend/plugins/daterangepicker/moment.min.js'
import '../../assets/backend/plugins/daterangepicker/daterangepicker.js'
import 'https://cdn.quilljs.com/1.3.6/quill.js'
import '../../assets/backend/plugins/toaster/toastr.min.js'
import '../../assets/backend/js/mono.js'
import '../../assets/backend/js/chart.js'
import '../../assets/backend/js/map.js'
import '../../assets/backend/js/custom.js'
export default {
    components:{
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
    },
    mounted() {

    },
}
</script>
<style>
@import 'https://fonts.googleapis.com/css?family=Karla:400,700|Roboto';
@import '../../assets/backend/css/style.css';
@import '../../assets/backend/plugins/toaster/toastr.min.css';
@import '../../assets/backend/plugins/daterangepicker/daterangepicker.css';
@import '../../assets/backend/plugins/jvectormap/jquery-jvectormap-2.0.3.css';
@import '../../assets/backend/plugins/DataTables/DataTables-1.10.18/css/jquery.dataTables.min.css';
@import '../../assets/backend/plugins/nprogress/nprogress.css';
@import '../../assets/backend/plugins/simplebar/simplebar.css';
@import '../../assets/backend/plugins/material/css/materialdesignicons.min.css';
@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>