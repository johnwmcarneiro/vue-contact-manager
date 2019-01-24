<template>
  <sui-card class="fluid">
    <sui-card-content>
      <h3 is="sui-header" v-if="contact.id === null">
        New Contact
      </h3>

      <h3 is="sui-header" v-else>
        Edit Contact
      </h3>
    </sui-card-content>
    <sui-card-content>
      <sui-form @submit.prevent="onSave">
        <sui-form-field>
          <label>Name</label>
          <input v-model="contact.name" placeholder="Name" />
        </sui-form-field>

        <div class="two fields">
          <sui-form-field>
            <label>Company's name</label>
            <input v-model="contact.company" placeholder="Company's name" />
          </sui-form-field>

          <sui-form-field>
            <label>Role</label>
            <input v-model="contact.role" placeholder="Role" />
          </sui-form-field>
        </div>

        <div class="two fields">
          <sui-form-field>
            <label>E-mail</label>
            <input v-model="contact.email" placeholder="E-mail" />
          </sui-form-field>

          <sui-form-field>
            <label>Phone</label>
            <input v-model="contact.phone" placeholder="Phone" />
          </sui-form-field>
        </div>

        <sui-button type="submit" primary>Save contact</sui-button>
        <sui-button type="button" @click="onCancel">Cancel</sui-button>
      </sui-form>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: 'EditContact',
  props: ['contact'],
  methods: {
    onSave () {
      this.$emit('save', this.contact);
    },
    onCancel () {
      this.$emit('cancel');
    }
  }
}
</script>
