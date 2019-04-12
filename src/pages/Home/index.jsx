import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import { fetchList } from '../../stores/actions/homeAction';

const mapStateToProps = state => {
    return {
        list: state.home.list,
    }
};

const mapDispatchToProps = {
    fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
