var app = new Vue({
  el: '#app',
  data: {
    data: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    isReverse: false,
    sortItem: ''
  },
  // 請在此撰寫 JavaScript
  computed: {
    sortByData: function(){
      var vm = this;
      return this.data.sort(function(a,b){
        // if(vm.isReverse){
        //   return a[vm.sortItem] - b[vm.sortItem];
        // }else{
        //   return b[vm.sortItem] - a[vm.sortItem];
        // };
        return vm.isReverse? (a[vm.sortItem] - b[vm.sortItem]):(b[vm.sortItem] - a[vm.sortItem]);
          

      })
    }
  },
  methods:{
    reverseArry:function(item){
      this.sortItem = item;
      this.isReverse = !this.isReverse;
    }
  }
});