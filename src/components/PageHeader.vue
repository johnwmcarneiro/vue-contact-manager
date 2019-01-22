<template>
  <div>
    <h2 is="sui-header">

      <sui-icon
        v-if="icon"
        :name="icon"
        circular
      />
      <sui-header-content>

        {{ title }}

        <sui-header-subheader v-if="subtitle">
          {{ subtitle }}
        </sui-header-subheader>
      </sui-header-content>
    </h2>

    <sui-divider />
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: String,
    subtitle: String
  }
}
</script>