<template>
<div class="sidebar-container"> 
<!--sidebar-left-->
<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <!-- <li class="sidebar-brand">
            <a class="sidebar-close" ><i class="fa fa-times"></i><img src="images/logo.png"/></a></li>-->
        <li @click="ChangeMenu('产品')"> 
            <a class="sidebarnav_bt" data-target="#menuitem-1">
                <i class="fa fa-cubes"></i>
                <span>产品</span>
              </a>
        </li>
        
        <li @click="ChangeMenu('服务')"> 
            <a class="sidebarnav_bt" data-target="#menuitem-2">
                <i class="fa fa-support"></i>
                <span>服务</span></a>
        </li>
        
        <li>
            <a class="sidebarnav_bt" data-target="#menuitem-3">
                <i class="fa fa-cloud"></i>
                <span>云平台</span></a>
        </li>
        <li>
            <a class="sidebarnav_bt" data-target="#menuitem-4">
                <i class="fa fa-globe"></i>
                <span class="tit">解决方案</span></a>
        </li>
        <li>
            <a class="sidebarnav_bt" data-target="#menuitem-5">
                <i class="fa fa-home"></i>
                <span class="tit">公司</span></a>
        </li>
        <li style=" margin-top:30px;">
            <a class="qq">
                <i class="fa fa-qq"></i>
                <span class="tit"></span></a>
        </li>
        <li style="margin-top:20px;">
            <a class="wechat">
                <i class="fa fa-wechat"></i>
                <span class="tit"></span></a>
        </li>
        <li style="margin-top:20px;">
            <a class="tel">
                <i class="fa fa-phone"></i>
                <span class="tit"></span></a>
        </li>
        
        
    </ul>
</div>
<!--//sidebar-left-->


<!--sidebar-content-->
<div class="sidebar-overlay deskNav verticleNav" id="megamenuid" style=" left: 135px; min-height:100%;z-index:999999;display: block;" v-if="IfShowProductList">
    <br/>
    <br/>
    <a class="sidebar-back" @click="CloseProductList">
        <i class="fa fa-reply"></i>
    </a>
    <ul class="submenu">
        <!--产品中心-->
        <div v-if="CurMenu == '产品'" style="display:block;"> class="menu-cat" id="menuitem-1" data-analytics-menu-cat-id="产品中心">
            <div class="col-md-12">
                <span class="head-ico" id="head-ico">
                    <a href="products.jsp">
                        <i class="fa fa-cubes"></i>产品</a>
                </span>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong><a href="pdms.jsp" title="物流管理系统" target="_self">物流管理系统</a></strong>
                    </li>
                    <li>
                        <a href="tms.jsp" title="TMS运输管理系统" target="_self">TMS运输管理系统</a></li>
                    <li>
                        <a href="oms.jsp" title="OMS订单管理系统" target="_self">OMS订单管理系统</a></li>
                    <li>
                        <a href="wms.jsp" title="WMS仓储管理系统" target="_self">WMS仓储管理系统</a></li>
                    <li>
                        <a href="lfcs.jsp" title="LFCS物流财务系统" target="_self">LFCS物流财务系统</a></li>
                    <li>
                        <a href="ros.jsp" title="ROS路径优化系统" target="_self">ROS路径优化系统</a></li>
                    <li>
                        <a href="CubelQ.jsp" title="CubelQ装箱优化系统" target="_self">CubelQ装箱优化系统</a></li>
                    <li>
                        <a href="ewm.jsp" title="二维码追溯管理系统" target="_self">二维码追溯管理系统</a></li>
                        
                </div>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong><a href="ams.jsp" title="应用管理系统" target="_self">应用管理系统</a></strong>
                    </li>
                    <li>
                        <a href="wzh.jsp" title="无纸化会议系统" target="_self">无纸化会议系统</a></li>
                    <li>
                        <a href="wdjm.jsp" title="文档加密管理系统" target="_self">文档加密管理系统</a></li>
                    <li>
                        <a href="kjds.jsp" title="跨境电商管理系统" target="_self">跨境电商管理系统</a></li>
                    <li>
                        <a href="hgfx.jsp" title="海关风险管控系统" target="_self">海关风险管控系统</a></li>
                    <li>
                        <a href="MES.jsp" title="MES制造执行系统" target="_self">MES制造执行系统</a></li>
                    <li>
                        <a href="scgx.jsp" title="SFIS生产管控系统" target="_self">SFIS生产管控系统</a></li>
                    <li>
                        <a href="asset.jsp" title="资产管理系统" target="_self">资产管理系统</a></li>
                        
                </div>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                          <strong><a href="kds.jsp" title="金蝶软件" target="_self">金蝶软件</a></strong>
                    </li>
                    <li>
                        <a href="eckf.jsp" title="金蝶二次开发" target="_self">金蝶二次开发</a></li>
                    <li>
                        <a href="EAS.jsp" title="金蝶EAS" target="_self">金蝶EAS</a></li>
                    <li>
                        <a href="k3wise.jsp" title="金蝶/K3 WISE" target="_self">金蝶/K3 WISE</a></li>
                    <li>
                        <a href="k3cloud.jsp" title="金蝶/K3 Cloud" target="_self">金蝶K/3 Cloud</a></li>
                    <li>
                        <a href="KIS.jsp" title="金蝶KIS" target="_self">金蝶KIS</a></li>
                    <li>
                        <a href="./Download/金蝶K3ERP软件介绍.pdf" title="金蝶K3ERP软件介绍" target="_blank">金蝶K3ERP软件介绍</a></li>
                    <li>
                        <a href="KIS旗舰版.jsp" title="金蝶旗舰版" target="_self">金蝶旗舰版</a></li>  
                        
                        
                        
                </div>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong><a href="customization.jsp" title="柏田定制化软件" target="_self">柏田定制化软件</a></strong>
                    </li>
                    <li>
                        <a href="customization.jsp" title="订单系统" target="_self">订单系统</a></li>
                    <li>
                        <a href="battery.jsp" title="微订货系统(小程序)" target="_self">微订货系统(小程序)</a></li>
                    <li>
                        <a href="customization.jsp" title="柏田CRM系统" target="_self">柏田CRM系统</a></li>
                    <li>
                        <a href="inventory.jsp" title="进销存系统" target="_self">进销存系统</a></li>
                    <li>
                        <a href="backflush.jsp" title="生产系统" target="_self">生产系统</a></li>
                    <li>
                        <a href="PDA.jsp" title="二维码出入库管理系统" target="_self">二维码出入库管理系统</a></li>
                    <li>
                        <a href="lease.jsp" title="厂房租赁管理系统" target="_self">厂房租赁管理系统</a></li>
                    <li>
                        <a href="customization.jsp" title="RFID仓储自动化系统" target="_self">RFID仓储自动化系统</a></li>
                    <li>
                        <a href="wine.jsp" title="微信审批系统" target="_self">微信审批系统</a></li>
                    <li>
                        <a href="customization.jsp" title="第三方物流管理系统" target="_self">第三方物流管理系统</a></li>
                    <li>
                        <a href="weChat.jsp" title="微信小程序开发" target="_self">微信小程序开发</a></li>
                    <li>
                        <a href="after-service.jsp" title="售后服务系统" target="_self">售后服务系统</a></li>
                    <li>
                        <a href="funeral.jsp" title="殡仪馆业务系统" target="_self">殡仪馆业务系统</a></li>
                    <li>
                        <a href="vehicleMonitoring.jsp" title="柏田车辆监控平台" target="_self">柏田车辆监控平台</a></li>
                    <li>
                        <a href="FinanceLease.jsp" title="融资租业务赁管理系统" target="_self">融资租业务赁管理系统</a></li>
                </div>
            </div>
            
        </div>
        <!--//产品中心-->
        <!--服务-->
        <div v-if="CurMenu == '服务'" style="display:block;"> class="menu-cat" id="menuitem-2" data-analytics-menu-cat-id="服务">
            <div class="col-md-12">
                <span class="head-ico" id="head-ico">
                    <a href="service.jsp">
                        <i class="fa fa-support"></i>服务</a>
                </span>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong></strong>
                    </li>
                    <li>
                        <a href="service.jsp" title="应用开发" target="_self">应用开发</a></li>
                    <li>
                        <a href="service.jsp" title="移动应用" target="_self">移动应用</a></li>
                    <li>
                        <a href="service.jsp" title="用户体验设计" target="_self">用户体验设计</a></li>
                    <li>
                        <a href="service.jsp" title="平台迁移" target="_self">平台迁移</a></li>
                    <li>
                        <a href="service.jsp" title="系统重构" target="_self">系统重构</a></li>
                    <li>
                        <a href="service.jsp" title="IT托管服务" target="_self">IT托管服务</a></li>
                    <li>
                        <a href="service.jsp" title="下载中心" target="_self">下载中心</a></li>
                        
                        
                </div>
            </div>
        </div>
        <!--//服务-->
        <!--云服务-->
        <div class="menu-cat" id="menuitem-3" data-analytics-menu-cat-id="云平台">
            <div class="col-md-12">
                <span class="head-ico" id="head-ico">
                    <a href="cloudplat.jsp">
                        <i class="fa fa-cloud"></i>云平台</a>
                </span>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong></strong>
                    </li>
                    <li>
                        <a href="cloudplat.jsp" title="物流链云" target="_self">物流链云</a></li>
                    <li>
                        <a href="cloudplat.jsp" title="Meeting云" target="_self">Meeting云</a></li>
                </div>
            </div>
        </div>
        <!--//云服务-->
        <!--解决方案-->
        <div class="menu-cat" id="menuitem-4" data-analytics-menu-cat-id="解决方案">
            <div class="col-md-12">
                <span class="head-ico" id="head-ico">
                    <a href="solutions.jsp">
                        <i class="fa fa-globe"></i>解决方案</a>
                </span>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong></strong>
                    </li>
                    <li>

                        <a href="tms-solution.jsp" target="_self">TMS运输管理系统解决方案</a></li>
                    <li>
                        <a href="oms-solution.jsp" target="_self">OMS订单管理系统解决方案</a></li>
                    <li>
                        <a href="wms-solution.jsp" target="_self">WMS仓储管理系统解决方案</a></li>
                    <li>
                        <a href="mes-solution.jsp" target="_self">MES制造执行系统解决方案</a></li>
                    <li>
                        <a href="sfis-solution.jsp" target="_self">SFIS生产管控系统解决方案</a></li>
                    <li>
                        <a href="meeting-solution.jsp" target="_self">无纸化会议系统解决方案</a></li>
                    <li>
                        <a href="ebusiness-solution.jsp" target="_self">跨境电子商务平台解决方案</a></li>
                    <li>
                        <a href="QRCode-solution.jsp" target="_self">二维码追溯管理解决方案</a></li>
                    <li>
                        <a href="cars-solution.jsp" target="_self">车辆集中调度管理解决方案</a></li>
                    <li>
                        <a href="wechat-solution.jsp" target="_self">微信小程序解决方案</a></li>
                        
                </div>
            </div>
        </div>
        <!--//解决方案-->
        
        
        <!--公司-->
        <div class="menu-cat" id="menuitem-5" data-analytics-menu-cat-id="公司">
            <div class="col-md-12">
                <span class="head-ico" id="head-ico">
                    <a href="aboutus.jsp" title="公司" target="_self">
                        <i class="fa fa-home"></i>公司</a>
                </span>
            </div>
            <div class="col-md-3">
                <div class="subCat-container">
                    <li class="subCat">
                        <strong></strong>
                    </li>
                    <li>
                        <a href="aboutus.jsp#introduction" title="公司概况" target="_self">公司概况</a></li>
                    <li>
                        <a href="aboutus.jsp#mission" title="愿景与使命" target="_self">愿景与使命</a></li>
                    <li>
                        <a href="aboutus.jsp#chooseus" title="选择Ztnet" target="_self">选择Ztnet</a></li>
                    <li>
                        <a href="aboutus.jsp#team" title="管理团队" target="_self">管理团队</a></li>
                    <li>
                        <a href="aboutus.jsp#customer" title="典型客户" target="_self">典型客户</a></li>
                    <li>
                        <a href="aboutus.jsp#joinus" title="加入我们" target="_self">加入我们</a></li>
                    <li>
                        <a href="aboutus.jsp#newsshare" title="新闻资讯" target="_self">新闻资讯</a></li>
                    <li>
                        <a href="aboutus.jsp#contactus" title="联系我们" target="_self">联系我们</a></li>
                        
                </div>
            </div>
        </div>
        <!--//公司-->
        
        </ul>
      
        
</div>        
<!--//sidebar-content-->
       
   
</div>
</template>
<script>
//import TopBlock from 'components/PC/Common/TopBlock'
  export default{
    data: function () {
      return {
        CurMenu:'',
        IfShowProductList:false
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
      

    },
    methods: {
      ChangeMenu(menu){
        this.IfShowProductList = true
        this.CurMenu = menu
      },
      CloseProductList(){
        this.IfShowProductList = false
      },
     

    }
  }
</script>
<style lang="scss">
</style>
