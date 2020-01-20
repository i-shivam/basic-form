import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRecord(id) {
      let record = this.store.peekRecord('person', id);
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        record.destroyRecord();
      }
    }
  }
});
