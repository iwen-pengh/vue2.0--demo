<template>
    <div class="UserOrder">
        <mt-header fixed title="博乐街"></mt-header>
        <mt-navbar fixed style="top: 40px;" v-model="selected">
            <mt-tab-item id="1" @click.native="loadData(1)">选项一</mt-tab-item>
            <mt-tab-item id="2" @click.native="loadData(2)">选项二</mt-tab-item>
            <mt-tab-item id="3" @click.native="loadData(3)">选项三</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container style="margin-top: 80px;" >
            <mt-tab-container-item >
                <div v-for="n in orderData" style="display: flex; flex-direction: column; background-color: white;">
                    <div style="display: -webkit-flex; flex-direction: row;  padding-left: 0.32rem; padding-right: 0.28rem; justify-content: space-between; align-items: center; border-bottom: 1px solid rgb(238, 238, 238); border-top: 11px solid rgb(238, 238, 238);">
                        <p style="font-size: 0.28rem; color: rgb(46, 46, 46);">{{n.orderTime}}</p>
                        <p style="font-size: 0.28rem; color: rgb(163, 129, 78);">{{n.orderStatus}}</p>
                    </div>
                    <div style="display: flex; flex-direction: column; background-color: white;">
                        <button>
                            <div style="display: -webkit-flex; width: 100%;  flex-direction: row; justify-content: space-between; border-bottom: 1px solid rgb(238, 238, 238);">
                                <img v-bind:src="n.goodList | filtersUrl"  style="margin-left: 0.3rem; margin-top: 0.3rem; height:100px; width: 100px;" />
                                <div style="display: -webkit-flex; flex-direction: column; ">
                                    <div style="display: -webkit-flex;  flex-direction: row; ">
                                        <p style="flex: 1 1 0%; font-size: 0.28rem; color: rgb(46, 46, 46); text-align: left;">固特异澳洲鸵鸟皮手工限量小方头横担乐福鞋</p>
                                        <p style="font-size: 0.3rem; color: rgb(46, 46, 46);">
                                            <!-- react-text: 59 -->&yen;
                                            <!-- /react-text -->
                                            <!-- react-text: 60 -->5888
                                            <!-- /react-text --></p>
                                    </div>
                                    <div style="display: -webkit-flex;  flex-direction: row; ">
                                        <p style="font-size: 0.28rem; color: rgb(122, 122, 122);"></p>
                                        <p style="margin-left: 1.8rem; font-size: 0.28rem; color: rgb(122, 122, 122);"></p>
                                    </div>
                                </div>
                            </div></button>
                    </div>
                    <div></div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>



    </div>
</template>

<script>
    export default {
        name: 'UserOrder',
        data () {
            return {
                articles:[],
                handleId : this.$route.params.handleId,
                selected : null,
                orderData : {}
            }
        },
        components: {
            //Hello
        },
        created: function () {
            var vm = this;
            vm.loadData(1)
        },
        methods: {
            loadData : function (type) {
                var vm = this;
                const params = {
                    type : type,
                }
                vm.$http({
                    method:'POST',
                    url:'/hand/index/order_list',
                    params:params,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    emulateJSON:true
                }).then(function(response){
                    vm.orderData = response.body.data.data;
                },function(error){
                    console.log(error);
                })
            }
        },
        filters: {
            filtersUrl: function (urlObject) {
                return urlObject[0].imgobj.url

            }
        }
    }
</script>
