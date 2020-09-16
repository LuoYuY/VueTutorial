let data = {
    name:'HEllO',
    age:12
}

Vue.component('greeting',{
    template: '<p>Im a re-usable {{ name }} {{ age }}component <button v-on:click="change">change</button></p> ',
    data:function () {
        //return an object
        return data;

    },
    methods: {
        change: function () {
            //Only change one
            data.name = 'Luo YU YU';
            data.age  = 18;
        }
    }
}
);

let one = new Vue({
    el: '#vue-app-one',
    data:{
        title: 'vue-app-one'
    },
    computed:{

    }
});
let two = new Vue({
    el: '#vue-app-two',
    data:{
        title: 'vue-app-two'
    },
    methods:{

    },
    computed:{

    }
});

new Vue({
    el: '#vue-app2',
    data:{

    },
    methods:{
        readRefs:function(){

            //$refs: get all refs in the Vue
            console.log(this.$refs);
            console.log(this.$refs.input1.value);
            console.log(this.$refs.input2.value);
        }

    },
    computed:{

    }
});
