import {computed, observable} from 'mobx';
import http from 'libs/http';

class Store {
    @observable records = [];
    @observable isFetching = true;
    @observable f_name;

    @computed get dataSource() {
        return this.records
    }

    fetchRecords = () => {
        this.isFetching = true;
        http.get('/api/assets/base/', {params: {company_name: this.f_name}})
            .then(res => this.records = res)
            .finally(() => this.isFetching = false)
    };
}

export default new Store()
