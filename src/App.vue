<template>
  <div id="app">
    <app-groups-list
        :groups="groups"
        :items="items"
    ></app-groups-list>

    <div class="small">
      <app-chart
          :groups="groups"
      ></app-chart>
    </div>

  </div>
</template>

<script>


import service from "@/service";
import AppGroupsList from "@/components/AppGroupsList";
import AppChart from "@/components/AppChart";

export default {
  name: 'App',
  components: {
    AppChart,
    AppGroupsList,
  },
  data() {
    return {
      groups: [],
      items: [],
    }
  },
  methods: {
    async getGroups() {
      const { data } = await service.get('groups/');
      this.groups = data;
    },
    async getItems() {
      const { data } = await service.get('items/');
      this.items = data;
    },
    addItemsToGroup() {
      this.groups = this.groups.map((arrGroup)=> {
          arrGroup.items = this.items.filter(item => (item.id_group) === (arrGroup.id))
         return arrGroup
      })
    },
  },
  async created() {
    await this.getGroups();
    await this.getItems();
    this.addItemsToGroup();

  },

}
</script>

<style>


</style>
