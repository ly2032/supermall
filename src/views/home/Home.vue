<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :items="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goodsList="goodsList"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import HomeSwiper from "./childcomps/HomeSwiper";
  import RecommendView from "./childcomps/RecommendView";
  import FeatureView from "./childcomps/FeatureView";

  import {getHomeMultidata,getHomeGoods} from "network/home.js";
  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        homeGoods: {
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]}
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    computed: {
      goodsList() {
        return this.homeGoods[this.currentType].list;
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0 :
            this.currentType = 'pop'
            break
          case 1 :
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = 'sell'
            break
        }
      },


      /**
       * 网络请求
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.homeGoods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.homeGoods[type].list = res.data.list;
          this.homeGoods[type].page = page;
        })
      }
    }
  }
</script>
<style scoped>

  .tab-control {
    position: sticky;
    z-index: 9;
    top: 40px;
  }

  #home {
    padding-top: 44px;
  }

  .home-nav {
    color: white;
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
