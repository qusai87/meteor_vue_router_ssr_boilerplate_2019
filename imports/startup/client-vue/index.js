import { Meteor } from 'meteor/meteor'
import CreateApp from '../app.js'

Meteor.startup(() => {
	CreateApp({
    	ssr: false,
  	})
});

