import React from 'react'; 
// import Select from 'react-select';
import Select from '@material-ui/core/Select';

class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // keep track of what is selected in each select
            selected: [ null, null, null ] 
        };
    }

    changeValue(index, value) {
        // update selected option
        this.setState({ selected: this.state.selected.map((v, i) => i === index ? value : v)})
    }

    getOptionList(index) {
        // return a list of options, with anything selected in the other controls disabled
        return this.props.options.map(({value, label}) => {
            const selectedIndex = this.state.selected.indexOf(value);
            const disabled = selectedIndex >= 0 && selectedIndex !== index;
            return {value, label, disabled};
        });
    }

    render() {
        return (<div>
             
            <Select value={this.state.selected[0]} options={this.getOptionList(0)} onChange={v => this.changeValue(0, v)} />
            <Select value={this.state.selected[1]} options={this.getOptionList(1)} onChange={v => this.changeValue(1, v)} />
            <Select value={this.state.selected[2]} options={this.getOptionList(2)} onChange={v => this.changeValue(2, v)} />
        </div>)
    }

}

export default Example;