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

  .hamburger {
    left: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .logo img {
    width: 6.375rem;
    height: 100%;
  }
</style>
