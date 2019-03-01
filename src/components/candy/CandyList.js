import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candyTypes.map(candyType =>
                    <div key={candyType.id}>
                        {candyType.name}:<br/>
                        {this.props.candies.filter(candy => candy.candyTypeId === candyType.id)
                        .map(newCandy =>
                            <div key={newCandy.id}>
                            {newCandy.name}
                            <button onClick={() => this.props.deleteCandy(newCandy.id)}>Delete</button><br/><br/>
                            </div>
                        )}
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList