const e = React.createElement

const ListItem = props => {
    return e('li', {className: 'list-item', onClick: props.onDelete}, props.title)
}

class List extends React.Component {
    constructor() {
        super()
        this.state = {items: ['Apple', 'Banana']}
    }

    addItemHandler() {
        this.setState((prevState) => {
            return {items: prevState.items.concat('New Item')}
        })  
    }

    deleteItemHandler(text) {
        this.setState(prevState => {
            return {items: prevState.items.filter(item => {
                return item != text
            })}
        })
    }

    render() {
        return e('div', null, [
            e('ul', {key: 'fruit-list'}, this.state.items.map(item => {
                return e(ListItem, {title: item, key: item, onDelete: this.deleteItemHandler.bind(this, item)})
            })),
            e('button', {onClick: this.addItemHandler.bind(this)}, 'Add Item')
        ])
    }
}

ReactDOM.render(e(List), document.getElementById("fruit-list"))