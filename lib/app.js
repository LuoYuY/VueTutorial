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
        },
        click: function () {
            alert("You clicked me!");

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
new Vue({
    el: '#vue-app3',
//    add some styles
    data: {

    },
    methods: {
        //we can always get an event object automatically,we get access to it
        logName: function () {
            console.log("You input your name");
        },
        logAge: function () {
            console.log("You input your age");
        }

    }
});
new Vue({
    el: '#twoWayDataBinding',
    data: {
        name: '',
        age: ''
    },
    methods: {

    }
});
new Vue({
    el: '#computedProperties',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    // when one of data attributes changes,all methods run\
    /*
    methods: {
        addToA:function () {
            console.log("add to A");
            return this.a+this.age;

        },
        addToB:function () {
            console.log("add to B");
            return this.b+this.age;

        }
    },
     */
    //computed functions only run when needed(its own attribute updated)
    computed: {
        addToA:function () {
            console.log("add to A");
            return this.a+this.age;

        },
        addToB:function () {
            console.log("add to B");
            return this.b+this.age;

        }
    }
});

new Vue({
    el: '#dynamicCss',
    data: {
        available: true
    },
    methods: {

        change:function () {
            // if(this.available== true )
            // {
            //     this.available = false;
            // }
            // else
            // {
            //     this.available = true;
            // }

            this.available = !this.available;

        }


    },
    computed: {
        compClasses:function() {
            return {
                big: this.available,
                red: this.available
            }
        }

    }

});





