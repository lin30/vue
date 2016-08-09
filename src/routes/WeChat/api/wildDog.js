import Wilddog from 'wilddog'
const api = new Wilddog('http://you-me.wilddogio.com/')


export default wd

//监听节点dwx,有变化则触发事件
const wd = api.child('ljl').on('value', snapshot => {
    const item = snapshot.val()
    const index = item.sessionIndex
    const meg = item.message
    return {
        text: meg,
        date: new Date(),
        self: true
    }
    // data.sessionList[index].messages.push({
    //     text: meg,
    //     date: new Date(),
    //     self: true
    // })
})







