import Vue from 'vue';
import Vuex from 'vuex';
Vue.use (Vuex);

/**
 * 読込を行うstoryファイルの指定
 */
import {configure} from '@storybook/vue';

const req = require.context ('../components/', true, /.story.js$/);

function loadStories () {
  req.keys ().forEach (filename => req (filename));
}

configure (loadStories, module);

/**
 * FirebaseOperation
 */
import FirebaseOperation from '@/assets/scripts/firebase/FirebaseOperation';
const firebaseOperation = new FirebaseOperation ();
