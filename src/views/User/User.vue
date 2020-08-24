<template>
    <div class='userManage'>
        <!-- <el-dialog 
        :visible.sync='isShow'
        :title="operateType=='add'?'新增用户':'更新用户'">
            <com-form :formLabel='operateFormLabel' :form='operateForm'></com-form>
        </el-dialog> -->
        <div class="user-hd">
             <el-button type='primary'>+ 新增</el-button>
            <com-form inline :formLabel='formLabel' :form='searchForm'>
                <el-button type='primary'>搜索</el-button>
            </com-form>
        </div>
        <div class="user-con">
            <com-table 
            @changePage="getUserData"
            @eidt='editUser'
            :tableData='tableData' 
            :tableLabel='tableLabel' 
            :config='config'></com-table>
        </div>
    </div>
</template>


<script>
import ComForm from '../../components/common/ComForm'
import ComTable from '../../components/common/ComTable'
export default {
    components:{
        ComForm,
        ComTable
    },
    data(){
        return {
            // isShow:false,
            // operateType:'add',
            // operateForm:{
            //     name: '',
            //     addr:'',
            //     age:'',
            //     birth:'',
            //     sex: ''
            // },
            // operateFormLabel:[
            //      {
            //         prop:'name',
            //         label:'姓名'
            //     },
            //     {
            //         prop:'age',
            //         label:'年龄'
            //     },
            //     {
            //         prop:'sexLabel',
            //         label:'性别'
            //     },
            //     {
            //         prop:'birth',
            //         label:'出生日期',
            //         type:date
            //     },
            //     {
            //         prop:'addr',
            //         label:'地址'
            //     },
            // ],
            searchForm:{
                keyword:''
            },
            formLabel:[
                {
                    model:'keyword',
                    label:''
                }
            ],
            tableData:[],
            tableLabel:[
                {
                    prop:'name',
                    label:'姓名'
                },
                {
                    prop:'age',
                    label:'年龄'
                },
                {
                    prop:'sexLabel',
                    label:'性别'
                },
                {
                    prop:'birth',
                    label:'出生日期'
                },
                {
                    prop:'addr',
                    label:'地址'
                },
            ],
            config:{
                page:1,
                total:30,
                loading:false
            }

        }
    },
    methods:{
        getUserData(){
            this.config.loading=true
            this.$http.get('/userApi/user/getUser',{
                params:{
                    page:this.config.page,
                }
            }).then(res=>{
                this.tableData=res.data.list.map(item=>{
                    item.sexLabel=item.sex===0?'女':'男'
                    return item
                })
                this.config.total=res.data.count
                this.config.loading=false
            })
        },
        editUser(row){
            this.operateType='edit'
            this.isShow=true
        }
    },
    created(){
        this.getUserData()
    }
}
</script>

<style>
 .userManage{
     height: 90%;
     padding-bottom: 20px;
     overflow: hidden;
 }
  .userManage .user-hd{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
</style>