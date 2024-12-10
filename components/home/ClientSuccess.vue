<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Client success: Virtual offices in action</h2>
    <div class="storiesContainer columnAlignCenter">
      <div v-for="(story, index) in stories" class="story columnAlignCenter" :key="index">
        <div class="videoContainer columnAlignCenter">
          <video :ref="`story${index}`" :src="`/videos/${story.video}.mp4`" controls></video>
        </div>
        <h3 class="text-center">{{ story.title }}</h3>
        <NuxtLink :to="story.link" class="secondaryButton">
          <div class="arrowBtn">
            <p>{{ story.button }}</p>
            <Icon name="mingcute:arrow-right-line" class="text-black" />
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
          title:
            "See how [Client's Company] streamlined operations with our solutions.",
          button: "Watch [Client's Company] Case",
          video: "Success-Story-1",
        },
        {
          title:
            "See how [Client's Company] streamlined operations with our solutions.",
          button: "Discover [Client's Company] Story",
          video: "Success-Story-2",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.story0?.[0]) {
        this.$refs.story0[0].currentTime = 3;
      }
      if (this.$refs.story1?.[0]) {
        this.$refs.story1[0].currentTime = 4;
      }
    });
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

.videoContainer {
  width: 100%;
  height: max-content;
  border-radius: 9px;
  position: relative;
  overflow: hidden;
}

.videoContainer video {
  width: 100%;
  max-width: 280px;
  border-radius: 9px;
}

h3 {
  max-width: 344px;
}

.arrowBtn {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

@media (width >=660px) {
  .storiesContainer {
    flex-direction: row;
  }

  h3 {
    max-width: 375px;
  }
}

@media (width >=1080px) {
  h3 {
    max-width: 450px;
  }
}

@media (width >=1440px) {
  h3 {
    max-width: 540px;
  }
}
</style>
