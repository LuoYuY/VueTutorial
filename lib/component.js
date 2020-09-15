Vue.component('greeting',{
    template: '<p>Im a re-usable component</p>'
}
);
var one = new Vue({
    el: '#vue-app-one',
    data:{
        title: 'vue-app-one'
    },
    computed:{

    }
});
var two = new Vue({
    el: '#vue-app-two',
    data:{
        title: 'vue-app-two'
    },
    methods:{

    },
    computed:{

    }
});
