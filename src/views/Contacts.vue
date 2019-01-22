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
          <edit-contact
            v-if="currentScreen === 'edit'"
            :contact="formContact"
            :onCancel="cancelEdit"
          />

          <contact
            v-if="currentScreen === 'show'"
            :contact="contact"
            :onEdit="editContact"
            :onDelete="onDeleteContact"
          />
        </sui-grid-column>
        <sui-grid-column :width="6">
          <sui-button
            icon="user plus"
            label-position="left"
            @click="newContact"
            primary
            fluid
          >
            New contact
          </sui-button>

          <sui-segment>
            <sui-list divided relaxed>
              <sui-list-item v-for="(contact, key) in rows" :key="key">
                <a is="sui-list-header" @click="showContact(contact)">{{ contact.name }}</a>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import PageHeader from '../components/PageHeader.vue';
import Contact from '../components/Contact.vue';
import EditContact from '../components/EditContact.vue';

const initContact = {
  id: null,
  name: '',
  email: '',
  phone: '',
  company: '',
  role: ''
};

export default {
  name: 'Contacts',
  data() {
    return {
      currentScreen: 'show',
      formContact: initContact
    };
  },
  components: {
    PageHeader,
    EditContact,
    Contact
  },
  computed: {
    ...mapState('contacts', ['rows', 'contact'])
  },
  methods: {
    ...mapActions('contacts', ['selectContact', 'deleteContact']),

    setScreen(screen) {
      this.currentScreen = screen;
    },

    cancelEdit() {
      this.setScreen('show');
      this.formContact = initContact;
    },

    showContact(contact) {
      this.setScreen('show');
      this.selectContact(contact);
    },

    newContact() {
      this.setScreen('edit');
      this.formContact = initContact;
    },

    editContact(contact) {
      this.setScreen('edit');
      this.formContact = contact;
    },

    onDeleteContact(contact) {
      this.deleteContact(contact);
      this.formContact = initContact;
    }
  }
}
</script>
