import React, { Component } from 'react';
import { Card, Avatar, Icon } from 'antd';
import Img from 'react-image';

import { generateCardImageLink } from 'Utils/cardshorthands';
import { attributeIcons } from 'Constants/attributes';

const { Meta } = Card;

const DeckTitle = ({ name, userid: user, deckid }) => 
<div className="title">
	<div className="deckname"><a href={`/deck/${deckid}`} title={name}>{ name || 'Deck' }</a></div>
	<div> 
		{
			user ?
				<a className="user" href={`/user/${user.name}`}>{ user.name }</a>
			:
				<div>Anonymous</div>
		}
	</div>
</div>;

class DeckCard extends Component {
	render(){
		const { deck } = this.props; 
		return(
			<div className="container-deckcard">
				<Card
					cover={
						<div className="deck-image">
							<a href={`/deck/${deck.deckid}`}>
								<Img
								src={[
								  generateCardImageLink(deck.cards[0]),
								]}
								unloader={<Icon className="image-not-found" type="question-circle" />}
								/>
							</a>
						</div>
					}
				>
					<Meta 
						title={DeckTitle(deck)} 
						description={deck.description || 'No Description'}
					/>
					<div className="attributes">
						{
							deck.attributes.map( (attr) => <Icon title={attr.name} 
								type={attributeIcons[attr.name].icon} className={attributeIcons[attr.name].class} />)
						}
					</div>
				</Card>
			</div>
		)
	}
}

export default DeckCard;