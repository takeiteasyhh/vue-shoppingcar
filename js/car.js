var vue = new Vue({
    el:"#app",
    data:{
		totalMoney:0,
        productList:[]
    },
    //钩子函数，当所有DOM挂载在页面上时，加载此方法，相当于window.onload=function(){}
	mounted:function(){
		//需要用$nextTick来保证所有节点挂载后才执行方法
		this.$nextTick(function(){
			this.cartView();
		})
	},
	filters:{
		formatMoney :function(v){
			return "$"+Number(v).toFixed(2);

		}
	},
    methods:{
        cartView:function(){
            var _this = this;
			//Vue.source插件，目前已经被axios代替
			var res = {
				"status":1,
				"result":{
				  "totalMoney":109,
				  "list":[
					{
					  "productId":"600100002115",
					  "productName":"黄鹤楼香烟",
					  "productPrice":19.655,
					  "productQuantity":1,
					  "productImage":"img/goods-1.jpg",
					  "parts":[
						{
						  "partsId":"10001",
						  "partsName":"打火机",
						  "imgSrc":"img/part-1.jpg"
						}
					  ]
					},
					{
					  "productId":"600100002120",
					  "productName":"加多宝",
					  "productPrice":8,
					  "productQuantity":5,
					  "productImage":"img/goods-2.jpg",
					  "parts":[
						{
						  "partsId":"20001",
						  "partsName":"吸管",
						  "imgSrc":"img/part-2.jpg"
						}
					  ]
					},
					{
					  "productId":"600100002117",
					  "productName":"金装黄鹤楼",
					  "productPrice":25,
					  "productQuantity":2,
					  "productImage":"img/goods-1.jpg",
					  "parts":[
						{
						  "partsId":"10001",
						  "partsName":"打火机-1",
						  "imgSrc":"img/part-1.jpg"
						},
						{
						  "partsId":"10002",
						  "partsName":"打火机-2",
						  "imgSrc":"img/part-1.jpg"
						}
					  ]
					}
				  ]
				},
				"message":""
			  };
			  
			  _this.productList = res.result.list;
			// this.$http.get('./data/cartData.json',{'id':123}).then(function(res){
			// 	_this.productList = res.data.result.list;
			// 	//_this.totalMoney = res.data.result.totalMoney;
			// });//注释

			// axios.get('./data/cartData.json')
  			// .then(function (response) {
    		// 	console.log(response);
 			//  })
  			// .catch(function (error) {
    		// 	console.log(error);
  			// });
        	}
    }
})