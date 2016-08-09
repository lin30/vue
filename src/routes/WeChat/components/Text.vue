
<template>
    <div class="m-text">
        <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" @keyup="inputing"></textarea>
    </div>
</template>


<script>
    import Wilddog from 'wilddog'
    // import wd from '../api/wildDog'
    const api = new Wilddog('http://you-me.wilddogio.com/')

    export default {
        props: ['sessionIndex','sessionList'],
        data () {
            return {
                text: ''
            };
        },
    
        methods: {
            inputing (e) {
                if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
                    var msg = this.text
                    var msgObj = {
                        message:msg,
                        sessionIndex:this.sessionIndex
                    }
                    api.child('ljl').set(msgObj)
                    
                    this.text = '';
                }
            }
        }
    };
</script>

<style lang="less">
    .m-text {
        height: 160px;
        border-top: solid 1px #ddd;
        
        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>