export default {
  props: ['id', 'text', 'checked', 'private', 'owner'],
  components: {
  },
  data() {
    return {
    };
  },
  meteor: {
    // Subscriptions
    $subscribe: {
    },
    isOwner () {
      return this.owner === Meteor.userId();
    }
  },
  mounted () {

  },
  methods: {
    toggleChecked() {
      // Set the checked property to the opposite of its current value
      Meteor.call('tasks.setChecked', this.id, !this.checked);
    },
    deleteTask() {
      Meteor.call('tasks.remove', this.id);
    },
    togglePrivate() {
      Meteor.call('tasks.setPrivate', this.id, !this.private);
    }
  },
  computed: {
    username () {
      return Meteor.user() && Meteor.user().username;
    }
  }
}