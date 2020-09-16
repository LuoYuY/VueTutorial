new Vue({
    el: '#vue-app1',
    data:{
        error: false,
        success: false
    },
    methods:{

    }
});
new Vue({
    el: '#vue-app2',
    data:{
        characters: ['AAA','BBB','CCC','DDD','EEE'],
        users: [
            { name:'Amy',age:23 },
            { name:'Clara',age:22 },
            { name:'John',age:20 }
        ]
    },
    methods:{

    }
});

var one = new Vue({
    el: '#vue-app-one',
    data:{
        title: 'vue-app-one'
    },
    computed:{
        greet: function () {
            return 'Hello from app one:)'

        }
    }
});
var two = new Vue({
    el: '#vue-app-two',
    data:{
        title: 'vue-app-two'
    },
    methods:{
        changeTitle: function () {
            one.title = "Title changed!"

        }
    },
    computed:{

        greet: function () {
            return 'Hello from app two:)'

        }
    }
});

two.title = "Changed from outside"
