<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <h2>About the Rocket Science project</h2>
      <app-figure 
        uri="/assets/illustrations/Asimov_Foundation_trilogy_Chris_Foss_art.png" 
        altText="Asimov's Foundation trilogy, cover art by Chris Fos" 
        caption="Issac Asimov's Foundation trilogy with cover art by Chris Foss" 
      />
    </div>
    <div class="md-layout-item">
      <p>This is a resource for people interested in SF as a genre of literature.</p>
    </div>
  </div>
</template>

<script>
import Figure from '@/components/Figure'

export default {
  components: {
    appFigure: Figure
  }
}

</script>
