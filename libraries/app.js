function member() {
    this.user = '';
    this.pass = '';
    this.set = function(u, p) {
        this.user = u;
        this.pass = p;
    };
    this.login = function() {
        return 'concac';
    };
    this.register = function() {
        return 'concu';
    }
    return this;
}
var App_Body = new Vue({
    el : '#App_Body',
    data : {
        username : '',
        password : ''
    },
    methods : {
        load : function(req) {
            var res = new member();
            res.set(this.username, this.password);
            if (req == 'login') {
                res.login();
            } else if (req == 'register') {
                res.register();
            }
        }
    }
});
$('#login_button').click(function(){
    $('.ui.basic.modal').modal('show');
});