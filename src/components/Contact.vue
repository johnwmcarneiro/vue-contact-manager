<template>
<div class="ui fluid card" v-if="contact">
  <sui-card-content>
    <sui-card-header>{{ contact.name }}</sui-card-header>
    <sui-card-meta>{{ contact.company }} | {{ contact.role }}</sui-card-meta>
    <sui-card-description>
      <sui-list>
        <sui-list-item>
          <sui-icon name="phone" /> {{ contact.phone }}
        </sui-list-item>
        <sui-list-item>
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
  props: ['contact', 'onEdit', 'onDelete']
}
</script>