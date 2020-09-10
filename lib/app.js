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
        },
        //we can always get an event object automatically,we get access to it
        updateXY: function (event) {
            //get the exact data of the event
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }


});
new Vue({
    el: '#canvous',
    data: {
        x: 0,
        y: 0
    },
//    add some styles
    methods: {
        //we can always get an event object automatically,we get access to it
        updateXY: function (event) {
            //get the exact data of the event
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
