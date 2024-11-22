<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Client success: Virtual offices in action</h2>
    <div class="storiesContainer columnAlignCenter">
      <div
        v-for="(story, index) in stories"
        class="story columnAlignCenter"
        :key="index"
      >
        <div class="videoContainer">
          <iframe
            width="100%"
            height="100%"
            :src="getYouTubeEmbedUrl(story.link)"
            :title="story.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
          link: "https://www.youtube.com/watch?v=L82rhATAT2o",
        },
        {
          title:
            "See how [Client's Company] streamlined operations with our solutions.",
          button: "Discover [Client's Company] Story",
          link: "https://www.youtube.com/watch?v=N1CXHljXZzM",
        },
      ],
    };
  },
  methods: {
    getYouTubeEmbedUrl(url) {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    },
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
  height: 10.625rem;
  border-radius: 9px;
  position: relative;
  overflow: hidden;
}

.videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    text-align: start !important;
  }
}
</style>
