<template lang="html">
  <ul>
    <li v-for="element in list" :key="element">
      <router-link :to="element.url" class="listarea">
        <p>{{element.text}}</p>
      </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      list: [
        {text :'first', url:"/index"},
        {text :'second', url:"/main"}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
