import Mock from 'mockjs'



export default {
    getHomeData:()=>{
        return{
            code:2000,
            data:{
                videoData:[
                    {
                        name:'Spring',
                        value:Mock.Random.float(1000,1000,0,2)
                    },
                    {
                        name:'vue',
                        value:Mock.Random.float(1000,1000,0,2)
                    },
                    {
                        name:'java',
                        value:Mock.Random.float(1000,1000,0,2)
                    },
                    {
                        name:'python',
                        value:Mock.Random.float(1000,1000,0,2)
                    },
                ]
            }
        }
    }
}