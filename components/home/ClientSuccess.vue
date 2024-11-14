<template>
  <section>
    <h2 class="text-center">Client success: Virtual offices in action</h2>
    <div class="storiesContainer columnAlignCenter">
      <div
        v-for="(story, index) in stories"
        class="story columnAlignCenter"
        :key="index">
        <video muted loop playsinline preload="auto" class="w-full">
          <source :src="`/videos/${story.video}.mp4`" type="video/webm" />
          Tu navegador no soporta el video.
        </video>
        <h3 class="text-center">{{ story.title }}</h3>
        <NuxtLink :to="story.link" class="secondaryButton">
          <div>
            <p>{{ story.button }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        stories: [
          {
            video: "Success-Story-1",
            title:
              "See how [Client’s Company] streamlined operations with our solutions.",
            button: "Watch [Client’s Company] Case",
            link: "https://www.youtube.com/watch?v=L82rhATAT2o",
          },
          {
            video: "Success-Story-1",
            title:
              "See how [Client’s Company] streamlined operations with our solutions.",
            button: "Discover [Client’s Company] Story",
            link: "https://www.youtube.com/watch?v=N1CXHljXZzM",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .storiesContainer {
    gap: 1.5rem;
  }

  .story {
    gap: 1.25rem;
  }

  video {
    height: 11rem;
  }
</style>
