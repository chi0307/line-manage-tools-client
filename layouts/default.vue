<template>
  <div>
    <at-menu active-name="1">
      <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
      <at-menu-item name="2" disabled><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
        <at-menu-item-group title="分组一">
          <at-menu-item name="3-1">子菜单一</at-menu-item>
          <at-menu-item name="3-2">子菜单二</at-menu-item>
        </at-menu-item-group>
        <at-menu-item-group title="分组二">
          <at-menu-item name="3-3">子菜单三</at-menu-item>
          <at-menu-item name="3-4" disabled>子菜单四</at-menu-item>
        </at-menu-item-group>
      </at-submenu>
      <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
      <at-submenu disabled>
        <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
        <at-menu-item name="5-1">子菜单一</at-menu-item>
        <at-menu-item name="5-2">子菜单二</at-menu-item>
      </at-submenu>
    </at-menu>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
