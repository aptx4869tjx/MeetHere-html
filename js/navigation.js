Vue.component('navigation',{
    data: function () {
        return {
            username: ''
        }
    },
    created: function () {
        this.username = $.cookie('username');
        if (this.username == null) {
            window.location.href = 'login.html';
        }
    },
    props:{
        cname:Array
    },

    template:'<div class="navbar navbar-default navbar-fixed-top" role="navigation" id="navigation">\n' +
        '\n' +
        '    <div class="container">\n' +
        '\n' +
        '        <div class="navbar-header">\n' +
        '\n' +
        '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
        '\n' +
        '                <span class="sr-only">Toggle navigation</span>\n' +
        '\n' +
        '                <span class="icon-bar"></span>\n' +
        '\n' +
        '                <span class="icon-bar"></span>\n' +
        '\n' +
        '                <span class="icon-bar"></span>\n' +
        '\n' +
        '            </button>\n' +
        '\n' +
        '            <a class="navbar-brand" href="#">MeetHere</a>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="navbar-collapse collapse">\n' +
        '\n' +
        '            <ul class="nav navbar-nav">\n' +
        '\n' +
        '                <li v-bind:class="{active:cname[0]}"><a href="home.html">主页</a></li>\n' +
        '\n' +
        '                <li v-bind:class="{active:cname[1]}"><a href="site_reservation.html">场地预约</a></li>\n' +
        '\n' +
        '                <li v-bind:class="{active:cname[2]}"><a href="news.html">最新资讯</a></li>\n' +
        '\n' +
        '                <li v-bind:class="{active:cname[3]}"><a href="order.html">我的订单</a></li>\n' +
        '            </ul>\n' +
        '\n' +
        '            <ul class="nav navbar-nav navbar-right">\n' +
        '\n' +
        '                <li class="dropdown">\n' +
        '\n' +
        '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{username}}<b class="caret"></b></a>\n' +
        '\n' +
        '                    <ul class="dropdown-menu">\n' +
        '\n' +
        '                        <li><a href="#">个人中心</a></li>\n' +
        '\n' +
        '                        <li><a @click="logout()">退出登录</a></li>\n' +
        '                    </ul>\n' +
        '\n' +
        '                </li>\n' +
        '\n' +
        '            </ul>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '    </div>\n' +
        '\n' +
        '</div>',
    methods: {
        logout: function () {
            $.removeCookie('username');

            axios.post(baseUrl+'/user/logout').then(res => {
                window.location.href = "login.html";
            })
        }
    }
})
