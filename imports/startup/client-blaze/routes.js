import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these layouts
import './ui-blaze/layouts/main.js';

// Import to load these components 
import './ui-blaze/components/header/header.js';
import './ui-blaze/components/footer/footer.js';
import './ui-blaze/components/counter/counter.js';

// Tasks
import './ui-blaze/components/task/task.js';
import './ui-blaze/components/tasks/tasks.js';

// Pages
import './ui-blaze/pages/login/login.js';
import './ui-blaze/pages/info/info.js';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {area: "tasks" , header: 'header', footer: 'footer'});
    }
});

FlowRouter.route('/task/:taskId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.taskId);
        BlazeLayout.render("mainLayout", {area: "task"});
    }
});

FlowRouter.route('/login', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {area: "login"});
    }
});