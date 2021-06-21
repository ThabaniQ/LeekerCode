import Route from '@ember/routing/route';

export default class ArchivedUsersRoute extends Route {
    model() {
        return this.store.findAll('user');
      }
}
