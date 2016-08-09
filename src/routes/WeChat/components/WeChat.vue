<template>
    <div class="wrap">
    <div id="chat">
        <div class="sidebar">
            <card :user="user" :search.sync="search"></card>
            <list :user-list="userList" :session="session" :session-index.sync="sessionIndex" :search="search"></list>
        </div>
        <div class="main">
            <message :session="session" :user="user" :user-list="userList"></message>
            <text :session-list="sessionList" :session-index="sessionIndex"></text>
            <text :session-list="sessionList" :session-index="sessionIndex"></text>
        </div>
    </div>
    </div>
   
</template>

<script>
    import Card from './Card.vue';
    import List from './List.vue';
    import Text from './Text.vue';
    import Message from './Message.vue';
    import { mapGetters,mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['user','userList','search','sessionList','sessionIndex']),
            session(){
                return this.sessionList[this.sessionIndex]
            }
        },  
        methods: {
            
            
        },
        components: {
            Card, List, Text, Message
        }
    };
// export default {
        // data () {
        //     let serverData = store.fetch();
        //     return {
        //         serverData:serverData,
        //         sessionIndex:0
        //     }
        // },
        // computed: {
            // user () {
            //     return this.serverData.user;
            // },
            // userList () {
            //     return this.serverData.userList;
            // },
            // sessionList () {
            //     return this.serverData.sessionList;
            // },
            // search () {
            //     return '';
            // },
            // session () {
            //     return this.serverData.sessionList[this.sessionIndex]
            // }
        // },
        // methods: {
            // update () {
            //     this.serverData = store.fetch()
            // }
            
        // },
</script>

<style lang="less">
        .wrap{
            height:100%;
            overflow: hidden;
            border-radius: 3px;
            color: #4d4d4d;
            font: 14px/1.4em 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial, sans-serif;
            background: #f5f5f5 url('../assets/bg.jpg') no-repeat center;
            background-size: cover;
            font-smoothing: antialiased;

            .sidebar, .main {
                height: 100%;
            }
            .sidebar {
                float: left;
                width: 200px;
                color: #f4f4f4;
                background-color: #2e3238;
            }
            .main {
                position: relative;
                overflow: hidden;
                background-color: #eee;
            }
            .m-text {
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
            }
            .m-message {
                height: ~'calc(100% - 160px)';
            }
            #chat {
                margin: 20px auto;
                width: 800px;
                height: 600px;
            }
        }
</style>