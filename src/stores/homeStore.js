import { observable, action, configure, runInAction } from 'mobx';
import Request from 'superagent';

configure({ enforceActions: "always" })

export default class HomeStore {
    @observable list = [];

    @action getUsers = async () => {
        const users = await Request('https://api.github.com/search/users').query({
            q: ` fullname:s`,
        }).then(res => res.body.items);
        runInAction('get users', () => {
            this.list = this.list.concat(users.map(user => user.login));
        })
    }
}
