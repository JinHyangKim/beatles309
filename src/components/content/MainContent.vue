<template lang="html">
  <div class="">
    <table border="1px solid">
      <thead>
        <th>이름</th>
        <th>나이</th>
        <th>주소</th>
        <th style="width:200px">이메일</th>
      </thead>
      <tbody>
        <tr v-for="element in list" :key="element">
          <td>{{element.name}}</td>
          <td>{{element.age}}</td>
          <td>{{element.adr}}</td>
          <td>{{element.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data(){
      return{
        list : [
          {name: '첫째', age:26, adr: '경기도', email:'aaa@aaa.com'},
          {name: '둘째', age:22, adr: '충청도', email:'bbb@aaa.com'},
          {name: '삼째', age:20, adr: '전라도', email:'ccc@aaa.com'},
          {name: '넷째', age:18, adr: '경상도', email:'ddd@aaa.com'},
          {name: '다섯째', age:10, adr: '강원도', email:'eee@aaa.com'},
        ]
      }
    }
}
</script>

<style lang="css">
  th{
    width: 100px;
  }
</style>
