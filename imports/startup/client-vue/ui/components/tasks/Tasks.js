import { Tasks } from '/imports/api/tasks/tasks.js';

import Task from '../task/Task.vue';

export default {
  components: {
    Task,
  },
  data() {
    return {
      hideCompleted : false
    };
  },
  meteor: {
    // Subscriptions
    $subscribe: {
      'tasks': []
    },
    tasks () {
      // Here you can use Meteor reactive sources
      // like cursors or reactive vars
      // as you would in a Blaze template helper
      //console.log(this.hideCompleted);
      // return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
      return Tasks.find({}, { sort: { createdAt: -1 } });
    }
  },
  mounted () {
  },
  methods: {
    submit() {
    // Prevent default browser form submit
    // event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
 
    // Clear form
    target.text.value = '';
  },
  change() {
    
  },
  },
  computed: {
    currentUser () {
      return Meteor.user();
    },
    incompleteCount () {
      return this.tasks.length
    }
  }
}