import Vue from 'vue'
import { VueSSR } from 'meteor/akryum:vue-ssr'

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';

// This file configures the Accounts package to define the UI of the reset password email.
import './reset-password-email.js';

// Set up some rate limiting and other important security settings.
import './security.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '/imports/api/api.js';


import './vue-ssr.js';



