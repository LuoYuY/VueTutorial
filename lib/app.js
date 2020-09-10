new Vue({
    el: '#vue-app',
    data: {
        name: 'LUOYY',
        job: 'coder',
        website: 'https://github.com/',
        websiteTag: "<a href='https://github.com/'>github</a>"
    },
    methods: {
        greet: function (time) {
            var name = this.name;
            return 'Good ' + time + ' ' + name;
        }
    }

});

new Vue({
    el: '#vue-app2',
    data: {
        age: 23
    },
    methods: {
        add: function (num) {
            this.age+=num;
        },
        subtract: function (num) {
            this.age-=num;
        }
    }


});
new Vue({
    el: '#canvous',
//    add some styles

});
