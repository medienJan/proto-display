import {
  Adapter
} from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'proto-display/config/environment';
import Ember from 'ember';

const {
  assert,
  isEmpty
} = Ember;

//PouchDB.debug.enable('*');

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.sync(remoteDb, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  }
});