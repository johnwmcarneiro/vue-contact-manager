<template>
<div class="ui fluid card" v-if="contact">
  <sui-card-content>
    <sui-card-header>{{ contact.name }}</sui-card-header>
    <sui-card-meta>
      <sui-list divided horizontal v-if="contact.company || contact.role">
        <sui-list-item v-show="contact.company">{{ contact.company }}</sui-list-item>
        <sui-list-item v-show="contact.role">{{ contact.role }}</sui-list-item>
      </sui-list>
    </sui-card-meta>
    <sui-card-description>
      <sui-list>
        <sui-list-item v-show="contact.phone">
          <sui-icon name="phone" /> {{ contact.phone }}
        </sui-list-item>
        <sui-list-item v-show="contact.email">
          <sui-icon name="envelope" /> {{ contact.email }}
        </sui-list-item>
      </sui-list>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <sui-button
      basic
      positive
      icon="pencil"
      @click="onEdit(contact)"
    >
      Edit contact
    </sui-button>

    <sui-button
      basic
      negative
      icon="trash"
      @click="onDelete(contact)"
    >
      Delete
    </sui-button>
  </sui-card-content>
</div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['contact'],
  methods: {
    onEdit (contact) {
      this.$emit('edit', contact)
    },

    onDelete (contact) {
      this.$emit('delete', contact)
    }
  }
}
</script>
