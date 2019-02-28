import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions/EmployeeActions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // next props are the next set of props that this component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.DataSource = ds.cloneWithRows(employees);
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // outputs >> { shift: 'Monday', name: 'Eric', id: '1j2j34' }
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
