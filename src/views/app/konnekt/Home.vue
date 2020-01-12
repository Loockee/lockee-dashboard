<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb class="text-capitalize" :heading="$t(this.title)"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4 text-capitalize" :title="$t(this.title)"></b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="9">
        <b-card class="mb-4 text-capitalize" :title="$t(this.title)"></b-card>
      </b-colxx>
      <b-colxx xxs="3">
        <b-card class="mb-4 text-capitalize" :title="$t(this.title)"></b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'menu.konnekt'
      };
    }
  }
</script>
