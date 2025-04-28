<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">See how our customers streamlined operations with our solutions.</h2>
    <div class="storiesContainer columnAlignCenter">
      <div v-for="(story, index) in stories" class="story columnAlignCenter" :key="index">
        <div class="videoContainer columnAlignCenter">
          <video 
            :ref="`story${index}`" 
            :src="`/videos/${story.video}.mp4`" 
            controls
            playsinline
            webkit-playsinline
          ></video>
        </div>
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
        },
        {
          video: "Success-Story-2",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.story0?.[0]) {
        this.$refs.story0[0].currentTime = 5;
      }
      if (this.$refs.story1?.[0]) {
        this.$refs.story1[0].currentTime = 6;
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
  object-fit: contain;
  background: #000;
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

@media (max-width: 768px) {
  .videoContainer video {
    max-height: 100vh;
    width: 100%;
    object-fit: contain;
  }
}
</style>
