<template>
  <div class="front_page content">
    <section class="band-a">
      <h2>Science Fiction:<br>a literary genre</h2>
      <blockquote>
        <p>Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing.</p>
       <router-link :to="'/authors/Phillip_K._Dick'">Phillip K. Dick</router-link>
      </blockquote>
    </section>
      <section class="band-b">
        <app-recent-reading />
      </section>
      <section class="band-c">
        <h3>Recommended Reading</h3>
        <div class="recommended">
          <img src="/assets/publications/Dispossessed_UrsulaKLeGuin.jpg" alt="">
          <img src="/assets/publications/Dune_FrankHerbert.jpg" alt="">
          <img src="/assets/publications/TheHandmaidsTale_MargaretAttwood.png" alt="">
          <img src="/assets/publications/TheManInTheHighCastle_PhillipKDick.jpg" alt="">
          <img src="/assets/publications/Stars_my_destination_AlfredBester.jpg" alt="">
          <img src="/assets/publications/TheForeverWar_JoeHaldeman.jpg" alt="">
        </div>
      </section>
  </div>
</template>

<script>
import recentReading from '@/components/RecentReading'

export default {
  components: {
    appRecentReading: recentReading
  }
}
</script>

<style lang="scss" scoped>
.band-a {
  display: flex;
  h2 {
    margin: 1rem 0;
  }
  blockquote {
    margin-top: 0;
    p:first-child { 
      line-height: 1.5;   
      font-size: 1.25rem;
    }
  }
}
.band-c {
  background-color: silver;
  .recommended {
    display: flex;
    img {
      height: 250px
    }
  }
}
</style>