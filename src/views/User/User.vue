<template>
    <div class='userManage'>user路由组件
        <div class="user-hd">
            <com-form></com-form>
        </div>
        <div class="user-con">
            <com-table></com-table>
        </div>
    </div>
</template>


<script>
import ComForm from '../../components/common/ComForm'
import ComTable from '../../components/common/ComTable'
export default {
    component:{
        ComForm,
        ComTable
    }
}
</script>