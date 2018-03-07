<template>
<header>
        <nav id="toTop" class="navbar  navbar-fixed-top navbar-inverse" role="navigation">
          <!--  <div class="container-fluid">-->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <i class="fa fa-ellipsis-v" style="color:#fff;"></i>
                     <!--
                        <span class="sr-only">菜单</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        -->
                    </button>
                    <div class="brand">
                        <a class="navbar-brand" href="javascript:void(0)">
                            <span class="toogle" style="">
                                <i class="fa fa-bars" style="color:#fff;"></i><img src="images/logo.png"/></span>
                        </a>
                        <!--<a class="pull-right"><i class="fa fa-chevron-left"></i></a>-->
                    </div>
                </div>
                <div class="collapse navbar-collapse">
                    <div class="kingdeeBox" >
                        <img class="kingdeeLogo" src="images/金蝶授权营销伙伴.png"/>
                        <span>上海柏田信息科技——金蝶授权营销伙伴</span>
                    </div>
                    <form class="navbar-form navbar-right" role="search" style="background:#fff;position:relative;">
                        <div class="form-group" style="background:#fff; color:#000;">
                            <input class="form-control" placeholder="Search" type="text">
                            <span class="glyphicon glyphicon glyphicon-search" style="font-size:2em; color:#000; position:absolute; top:20%; right:20px;"></span>
                        </div>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
          <li class="">
            <a href="javascript:void(0)" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
              <span class="glyphicon glyphicon-home dropdown" style="float:left;">语言</span>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" style="background:#000; color:#fff; padding:5px;">
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="default.jsp">中文</a></li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="EN-ztnet/default.jsp">英文</a></li>
              </ul>
            </a>
          </li>
                        <li>
                            <a>
                                <span class="glyphicon glyphicon-user">登录</span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="glyphicon glyphicon-headphones">培训</span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="glyphicon glyphicon glyphicon-comment">社区</span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="glyphicon glyphicon-shopping-cart">采购</span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="glyphicon glyphicon glyphicon-earphone">400-880-4428</span></a>
                        </li>
                    </ul>
                </div>
                <!-- /.nav-collapse -->
             <!--</div>-->
        </nav>
    </header>
</template>
<script>
//import TopBlock from 'components/PC/Common/TopBlock'
  export default{
    data: function () {
      return {
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
     

    }
  }
</script>
<style lang="scss">
.navbar{
  margin-bottom: 0px !important;
}
</style>
