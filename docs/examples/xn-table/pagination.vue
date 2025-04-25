<template>
  <xn-table
    :data="tableData"
    :columns="columns"
    :total="total"
    :page-size="pageSize"
    :current-page="currentPage"
    border
    @current-change="handlePageChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  {
    prop: 'date',
    label: '日期',
    width: 150,
    sortable: true,
  },
  {
    prop: 'name',
    label: '姓名',
  },
]

const tableData = ref([
  {
    date: '2016-05-03',
    name: '张三',
    address: '北京市朝阳区建国门外大街1号',
    age: 32,
    status: '在职',
  },
  {
    date: '2016-05-02',
    name: '李四',
    address: '上海市浦东新区陆家嘴环路1000号',
    age: 28,
    status: '离职',
  },
  {
    date: '2016-05-04',
    name: '王五',
    address: '广州市天河区珠江新城华夏路10号',
    age: 45,
    status: '在职',
  },
  {
    date: '2016-05-01',
    name: '赵六',
    address: '深圳市南山区科技园科苑路8号',
    age: 36,
    status: '休假',
  },
  {
    date: '2016-05-05',
    name: '钱七',
    address: '成都市武侯区人民南路四段3号',
    age: 29,
    status: '在职',
  },
  {
    date: '2016-05-06',
    name: '孙八',
    address: '杭州市西湖区文三路398号',
    age: 41,
    status: '在职',
  },
  {
    date: '2016-05-07',
    name: '周九',
    address: '武汉市洪山区珞喻路1037号',
    age: 33,
    status: '离职',
  },
  {
    date: '2016-05-08',
    name: '吴十',
    address: '南京市鼓楼区北京西路2号',
    age: 27,
    status: '在职',
  },
  {
    date: '2016-05-09',
    name: '郑十一',
    address: '西安市雁塔区小寨东路3号',
    age: 38,
    status: '休假',
  },
  {
    date: '2016-05-10',
    name: '王十二',
    address: '重庆市渝中区人民路232号',
    age: 31,
    status: '在职',
  },
])

const total = ref(100)
const pageSize = ref(10)
const currentPage = ref(1)

const handlePageChange = (page) => {
  currentPage.value = page
  // 这里可以发起数据请求
}
</script>
