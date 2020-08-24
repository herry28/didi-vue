<template>
    <div class="com-table">
        <el-table :data='tableData' stripe v-loading='config.loading'>
            <el-table-column label="序号" width="85">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ (config.page-1)*20+scope.$index+1 }}</span>
            </template>
            </el-table-column>
             <el-table-column show-overflow-tooltip v-for='item in tableLabel' :key='item.prop' :label='item.label' >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作" class="operate">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除</el-button>
                </template>
             </el-table-column>
           
        </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change='changePage'
            :current-page.sync='config.page'
            :total="config.total">
        </el-pagination>
       
    </div>
</template>


<script>
export default {
    props:{
        tableData:Array,
        tableLabel:Array,
        config:Object
    },
    methods: {
      handleEdit(row) {
        this.$emit('edit',row)
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      changePage(page){
          this.$emit('changePage',page)
      }
    }
}
</script>


<style>
    .cell{
        display: flex;
        justify-content: space-between;
    }
</style>