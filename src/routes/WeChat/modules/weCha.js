


// ------------------------------------
// Constants
// ------------------------------------
export const SET_MESSAGE = 'SET_MESSAGE'
export const SEND_MSG = 'SEND_MSG'
export const SELECT_LIST = 'SELECT_LIST'
// ------------------------------------
// States
// ------------------------------------
const now = new Date()
const state = {
    // 登录用户
    user: {
        id: 1,
        name: 'Myself',
        img: '2.jpg'
    },

    // 用户列表
    userList: [
        {
            id: 2,
            name: '示例介绍',
            img: '8.jpg'
        },
        {
            id: 3,
            name: 'webpack',
            img: '3.jpg'
        },
        {
            id: 4,
            name: 'wilddog',
            img: '6.jpg'
        },
        {
            id: 7,
            name: 'vuex',
            img: '5.jpg'
        }
    ],

    // 会话列表
    sessionList: [
        {
            userId: 2,
            messages: [
                {
                    text: 'Hello，这是一个基于vue的WeChat',
                    date: now
                },
                {
                    text: '技术栈:vue+wilddog+webpack+vuex+es6...,欢迎来到vue的世界',
                    date: now
                },
                {
                    text: 'Make your project easy and fast with modern tools',
                    date: now
                },
                {
                    text: '项目地址: https://github.com/daiweixiong/vue-wechat-wilddog',
                    date: now
                }
            ]
        },
        {
            userId: 3,
            messages: [{
                text: 'No matter how far you may fly, never forget where you come from.',
                date: now
            }]
        },
        {
            userId: 4,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        },
       
        {
            userId: 7,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        }
    ],
    
    search:'',
    
    sessionIndex:1
    
    
}
// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	user: state => state.user,
	userList: state => state.userList,
	search: state => state.search,
	sessionList: state => state.sessionList,
	sessionIndex: state => state.sessionIndex
	
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    // 选择会话列表
    selectList({ commit },sessionIndex){
        commit(SELECT_LIST,sessionIndex)
    },

    // 显示发出的消息
	sendMsg({ commit },wd) {
		commit(SEND_MSG, wd)
	}
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
    [SELECT_LIST](state, payload) {
        state.sessionIndex = payload
    },
    
    [SEND_MSG](state, payload) {
		state.sessionList[state.sessionIndex].messages.push(payload)
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}