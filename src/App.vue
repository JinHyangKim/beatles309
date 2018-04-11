<template>
  <div id="app" class="wrapper">
      <header>
        <JHHeader></JHHeader>
      </header>
      <div class="container">
        <nav>
          <JHNav></JHNav>
        </nav>
        <section>
          <router-view />
        </section>
      </div>

      <footer>
        <JHFooter></JHFooter>
      </footer>
  </div>
</template>

<script>
import JHHeader from '@/components/JHHeader';
import JHNav from '@/components/JHNav';
import JHFooter from '@/components/JHFooter';

export default {
  name: 'App',
  components:{
    JHHeader,
    JHNav,
    JHFooter
  }
}
</script>

<style>
  *{margin :0; padding: 0;}
  header{
    height: 12vh;
  }
  .container{
    height: 76vh;
  }
  nav{
    float: left;
    width: 15em;
  }
  section{
    float: left;
  }
  footer{
    height: 12vh;
  }
</style>
