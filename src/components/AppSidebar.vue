<template>
  <CSidebar class="border-end" colorScheme="dark" position="fixed">
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>
        <CIcon custom-class-name="sidebar-brand-full" :icon="logo" :height="32" />
        <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" :height="32" />
      </CSidebarBrand>
      <CCloseButton class="d-lg-none" dark @click="$store.commit('toggleSidebar')" />
    </CSidebarHeader>
    <AppSidebarNav />
  </CSidebar>
</template>

<script>
import { AppSidebarNav } from './AppSidebarNav'
import { logo } from '@/assets/brand/logo'
import { sygnet } from '@/assets/brand/sygnet'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  setup() {
    return {
      logo,
      sygnet,
    }
  },
}
</script>
