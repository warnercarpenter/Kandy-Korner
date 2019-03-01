import React, { Component } from 'react'


class StoreList extends Component {
    render() {
        return (
            <section className="stores">
            Stores:
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        {store.name} -- {store.address}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList