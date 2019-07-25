var vue = new vue({
    el:"#app",
    data:{
        productList:[]
    },
    //钩子函数，当所有DOM挂载在页面上时，加载此方法，相当于window.onload=function(){}
	mounted:function(){
		//需要用$nextTick来保证所有节点挂载后才执行方法
		this.$nextTick(function(){
			this.cartView();
		})
	},
    methods:{
        cartView:function(){
            var _this = this;
			//Vue.source插件，目前已经被axios代替
			this.$http.get('./data/cartData.json',{'id':123}).then(function(res){
				_this.productList = res.data.result.list;
				//_this.totalMoney = res.data.result.totalMoney;
			});
        },
    }
})