var app = new Vue({
  el: '#app',
  data: {
    mycolor: '#000000',
    backColor: '#000000',
    },
  methods: {
      generator(event){
      this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      this.backColor = this.mycolor
       }
    }
})