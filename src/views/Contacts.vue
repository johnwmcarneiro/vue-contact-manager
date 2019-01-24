<template>
  <sui-container text>

    <page-header
      title="Contacts"
      icon="users"
      subtitle="Manage your contacts"
    >
      <sui-button icon="user plus" label-position="left" primary>New contact</sui-button>
    </page-header>

    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="10">
          <sui-message v-if="showMessage">
            <sui-icon name="user" />
            <sui-content>Select a contact or create a new record.</sui-content>
          </sui-message>

          <edit-contact
            v-if="currentScreen === 'edit'"
            :contact="formContact"
            @save="onSaveContact"
            @cancel="onCancelEdit"
          />

          <contact
            v-if="currentScreen === 'show'"
            :contact="contact"
            @edit="onEditContact"
            @delete="onDeleteContact"
          />
        </sui-grid-column>
        <sui-grid-column :width="6">
          <sui-button
            icon="user plus"
            label-position="left"
            @click="onNewContact"
            primary
            fluid
          >
            New contact
          </sui-button>

          <sui-segment v-if="rows.length">
            <sui-list divided relaxed>
              <sui-list-item v-for="(contact, key) in rows" :key="key">
                <a is="sui-list-header" @click="onShowContact(contact)">{{ contact.name }}</a>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import PageHeader from '../components/PageHeader.vue'
import Contact from '../components/Contact.vue'
import EditContact from '../components/EditContact.vue'

const initContact = {
  id: null,
  name: '',
  email: '',
  phone: '',
  company: '',
  role: ''
}

export default {
  name: 'Contacts',
  data() {
    return {
      currentScreen: 'show',
      formContact: initContact
    }
  },
  components: {
    PageHeader,
    EditContact,
    Contact
  },
  computed: {
    ...mapState('contacts', ['rows', 'contact']),
    showMessage () {
      return this.currentScreen === 'show' && !this.contact
    }
  },
  methods: {
    ...mapActions('contacts', [
      'selectContact',
      'saveContact',
      'deleteContact'
    ]),

    setScreen(screen) {
      this.currentScreen = screen
    },

    onCancelEdit() {
      this.setScreen('show')
      this.formContact = initContact
    },

    async onSaveContact (contact) {
      await this.saveContact(contact)
      this.formContact = initContact
      this.onShowContact(contact)
    },

    onShowContact(contact) {
      this.setScreen('show')
      this.selectContact(contact)
    },

    onNewContact() {
      this.setScreen('edit')
      this.formContact = initContact
    },

    onEditContact(contact) {
      this.setScreen('edit')
      this.formContact = contact
    },

    onDeleteContact(contact) {
      this.deleteContact(contact)
      this.formContact = initContact
    }
  }
}
</script>
