<template>
  <footer class="column bg-electric-blue">
    <div class="w-full upperFooter column">
      <div class="column">
        <NuxtLink :to="routes.HOME" class="logo">
          <NuxtImg class="footerLogo" src="/images/Iconic-Virtual-Offices-Logo-White.svg"
            alt="Iconic Virtual Offices Logo" />
        </NuxtLink>
        <p>Empowering businesses to thrive.</p>
        <button v-if="showGetStartedButton" @click.prevent="scrollToSection('#plans')"
          class="primaryButton footerLink">Get Started</button>
      </div>
      <div class="locationsContact column">
        <div class="column">
          <p class="font-bold">Locations</p>
          <NuxtLink class="location column" :to="item.link" v-for="(item, index) in locations" :key="index">
            <div class="rowCenter">
              <Icon name="mingcute:location-line" class="text-white" />
              <p class="font-bold">{{ item.name }}</p>
            </div>
            <p>{{ item.street }}</p>
            <p>{{ item.ubication }}</p>
          </NuxtLink>
        </div>
        <div class="column">
          <p class="font-bold">Contact us</p>
          <div class="contactInfo column">
            <a href="mailto:info@iconicworkspaces.com">
              <Icon name="mingcute:mail-line" />
              <p>info@iconicworkspaces.com</p>
            </a>
            <a href="tel:+13056945300">
              <Icon name="mingcute:phone-line" />
              <p>+1 305 694 5300</p>
            </a>
            <div class="socialMedia rowCenter">
              <NuxtLink :aria-label="`Go to ${item.name}`" target="_blank" :to="item.link"
                v-for="(item, index) in socialMedia" :key="index">
                <Icon :name="item.icon" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bellowFooter column">
      <div class="rowCenter privacyTerms">
        <NuxtLink :to="'#'">Privacy</NuxtLink>
        <span>|</span>
        <NuxtLink :to="'#'">Terms</NuxtLink>
      </div>
      <p class="rights">
        © Iconic Virtual Offices. All Rights Reserved
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      locations: [
        {
          name: "Aventura",
          street: "2980 NE 207 Street, 3rd floor.",
          ubication: "Aventura, FL 33180",
          link: "https://maps.app.goo.gl/78FaH9yuM8233wpeA",
        },
        {
          name: "Downtown",
          street: "150 SE 2nd Ave, 3rd floor.",
          ubication: "Downtown Miami, FL 33131",
          link: "https://maps.app.goo.gl/s8WjmcX9dngRrMxp7",
        },
      ],
      socialMedia: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/iconicworkspaces",
          icon: "mingcute:facebook-fill",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/iconic.workspaces/",
          icon: "mdi:instagram",
        },
        {
          name: "X",
          link: "https://x.com/WorkspaceIconic",
          icon: "mingcute:social-x-line",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/iconic-workspaces/",
          icon: "mingcute:linkedin-line",
        },
      ],
    };
  },
  computed: {
    showGetStartedButton() {
      return this.$route.name !== 'get-started';
    }
  }
};
</script>

<style scoped>
footer {
  gap: 2rem;
  color: var(--color-white);
  padding: 2.5rem 1.25rem;
}

.upperFooter {
  gap: 1.25rem;
}

.upperFooter>div,
.locationsContact>div,
.bellowFooter {
  gap: 0.75rem;
}

.footerLogo {
  width: 5.625rem;
  height: 100%;
}

.footerLink {
  max-width: max-content;
  background-color: var(--color-white);
  border: 3px solid var(--color-white);
  color: var(--color-electric-blue);
}

.footerLink:hover {
  background-color: var(--color-mid-blue);
  color: var(--color-white);
}

.location {
  gap: 0.25rem;
  color: var(--color-white);
  text-decoration: none;
}

.location div {
  gap: 0.5rem;
}

.location p,
.contactInfo a p,
.rights,
.privacyTerms a {
  font-size: 0.75rem;
}

.contactInfo {
  gap: 0.625rem;
}

.contactInfo a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-white);
}

.contactInfo a img {
  width: 1.25rem;
}

.socialMedia {
  gap: 1.25rem;
}

.privacyTerms {
  gap: 1rem;
}

.privacyTerms a {
  text-decoration: none;
  color: var(--color-white);
}

@media (width >=660px) {
  footer {
    padding: 3.75rem 2.5rem;
  }

  .footerLogo {
    width: 7.5rem;
  }

  .location p,
  .contactInfo a p,
  .rights,
  .privacyTerms a {
    font-size: 0.875rem;
  }

  footer .locationsContact {
    flex-direction: row;
    gap: 1.5rem;
  }

  .locationsContact>div {
    width: 50%;
  }
}

@media (width >=1080px) {
  footer {
    gap: 3rem;
    padding: 3.75rem 4.375rem;
  }

  .footerLogo {
    width: 11.25rem;
  }

  .upperFooter {
    flex-direction: row;
    justify-content: space-between
  }

  .upperFooter>div {
    gap: 1.5rem;
  }

  .location p,
  .contactInfo a p,
  .rights,
  .privacyTerms a {
    font-size: 1rem;
  }

  footer .locationsContact {
    gap: 3.25rem;
  }

  .locationsContact>div {
    gap: 1rem;
  }

  .contactInfo {
    gap: 0.75rem;
  }

  .socialMedia {
    gap: 1.375rem;
  }

  span {
    font-size: 1.5rem !important;
  }

  .privacyTerms span {
    font-size: 1rem !important;
  }
}

@media (width >=1440px) {
  footer {
    padding: 3.75rem 5.625rem;
  }

  footer .upperFooter,
  footer .bellowFooter {
    max-width: 1260px;
  }

  .socialMedia a img {
    width: 1.5rem;
  }
}
</style>
