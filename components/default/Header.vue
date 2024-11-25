<template>
  <header class="center sticky">
    <button
      class="hamburger absolute"
      @click="toggleDrawer"
      aria-label="Open or close menu">
      <Icon class="text-mid-blue" size="1.5rem" name="mingcute:menu-fill" />
    </button>
    <NuxtLink :to="routes.HOME" class="logo">
      <NuxtImg
        src="/images/Iconic-Virtual-Offices-Logo.svg"
        alt="Iconic Virtual Offices Logo" />
    </NuxtLink>
    <div class="desktopMenu">
      <!-- <ul>
      </ul> -->
      <NuxtLink :to="routes.GET_STARTED" class="primaryButton">Get Started</NuxtLink>
    </div>
    <div class="menuSidebar">
      <Drawer
        ref="drawer"
        :visible="drawerMenu"
        :show-close-button="false"
        @click="handleDrawerClick">
      </Drawer>
    </div>
  </header>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

  export default {
    data() {
      return {
        drawerMenu: false,
        routes: ROUTE_NAMES
      };
    },
    methods: {
      toggleDrawer() {
        this.drawerMenu = !this.drawerMenu;
      },
      handleDrawerClick(event) {
        if (!this.$refs.drawer.$el.contains(event.target)) {
          this.closeDrawer();
        }
      },
      closeDrawer() {
        this.drawerMenu = false;
      },
    },
  };
</script>

<style>
  .p-drawer-mask {
    top: 3rem !important;
  }

  .p-drawer {
    width: 100% !important;
  }

  .p-drawer-header {
    display: none !important;
  }

  .p-drawer-content {
    width: 11.25rem !important;
    background: var(--color-electric-blue) !important;
    padding: 2.5rem 1rem !important;
  }

  @media (width >= 700px) {
    .p-drawer-mask {
      top: 4.75rem !important;
    }

    .p-drawer-content {
      width: 15.125rem !important;
      padding: 3.75rem !important;
    }
  }
</style>

<style scoped>
  header {
    z-index: 10;
    padding: 1.25rem;
  }

  .desktopMenu {
    display: none;
  }

  .hamburger {
    display: none;
    left: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .logo img {
    width: 6.375rem;
    height: 100%;
  }

  @media (width >=660px) {
    header {
      padding: 1.5rem 2.5rem;
    }

    .hamburger {
      left: 2.5rem;
    }

    .hamburger span {
      font-size: 2rem !important;
    }

    .logo img {
      width: 7.25rem;
    }
  }

  @media (width >=1080px) {
    .hamburger, .menuSidebar {
      display: none;
    }

    header {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
      padding: 1.75rem 4.375rem;
    }

    .logo img {
      width: 10.875rem;
    }

    .desktopMenu {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }

  @media (width >=1440px) {
    header {
      padding: 2rem 5.625rem;
    }
  }
</style>
