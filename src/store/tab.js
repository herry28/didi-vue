export default{
    state: {
        isCollapse:false,
        menu:[],
        currentMenu:null,
        tabList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            },
        ]
    },
    mutations: {
        selectMenu(state,val){
        //    val.name==='home'?state.currentMenu=null:state.currentMenu=val     
            if(val.name!=='home'){
                state.currentMenu=val
                let res=state.tabList.findIndex(item=>item.name===val.name)
                res===-1?state.tabList.push(val):''
            }else{
                state.currentMenu=null
            }
        },
        closeTab(state,val){
            let index=state.tabList.findIndex(item=>item.name===val.name)
            state.tabList.splice(index,1)
        },
        collapseMenu(state){
            state.isCollapse!=state.isCollapse
        }

    },
    actions: {
    },
}