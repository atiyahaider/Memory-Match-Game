import React, { Component } from 'react';
import Display from './Display';
import Defs from './Defs';
import Card from './Card';
import Modal from './Modal';

const Timer = 60;

class MatchGame extends Component {
    constructor(props) {
        super(props);

        this.countDownInterval = '';

        this.state = {  
            cards: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
            started: false,
            theme: 0,
            timer: Timer,
            score: 0,
            flips: 0,
            matchedCards: [],
            cardsFlipped: 0,
            showModal: false,
            modalContent: ''
        }
    }

    componentDidMount() {
        this.shuffleCards();
    }

    shuffleCards = () => {
        let len = this.state.cards.length;
        let cardsCopy = this.state.cards.slice();
        for (let i=1; i<len; i++) {
            //get a random number between n-1 and i
            let rand = Math.floor(Math.random() * (len - i)) + i;
            //swap the (i-1)th element with the random number
            [cardsCopy[i-1], cardsCopy[rand]] = [cardsCopy[rand], cardsCopy[i-1]];
        }
        this.setState({cards: cardsCopy});
    }

    startGame = () => {
        this.setState( {started: true}, () =>
                       this.countDownInterval = setInterval(this.runTimer, 1000));
        let cards = Array.from(document.getElementsByClassName('card-container'));        
        //enable card clicks
        cards.forEach(card => {
            card.style.pointerEvents = 'auto';
        }) 
    }

    runTimer = () => {
        this.setState({timer: this.state.timer - 1}, () => {
            if (this.state.timer === 0)
                setTimeout(() => this.gameOver(), 300); //display game over after a few ms
            }                      
        );
    }

    selectTheme = theme => {
        this.setState({theme: parseInt(theme)});
    }

    gameOver = () => {
        clearInterval(this.countDownInterval);
        this.displayModal('over');
    }

    victory = () => {
        clearInterval(this.countDownInterval);
        this.displayModal('victory');
    }

    reset = () => {
        this.setState({
            started: false,
            timer: Timer,
            score: 0,
            flips: 0,
            matchedCards: [],
            cardsFlipped: 0,
        })
        let cards = Array.from(document.getElementsByClassName('card-container'));        
        cards.forEach(card => {
            card.classList.remove('flip');
            card.style.pointerEvents = 'none';
        }) 
        this.shuffleCards();
    }

    flipCard = async (i) => {
        if (this.state.matchedCards.length < 2) {
            let card = {
                id: i,
                val: this.state.cards[i]
            }
            await this.setState({
                matchedCards: [...this.state.matchedCards, card],
                flips: this.state.flips + 1
            });

            if (this.state.matchedCards.length === 2) { 
                //match found, increment score
                if (this.state.matchedCards[0].val === this.state.matchedCards[1].val) {
                    await this.setState({
                            cardsFlipped: this.state.cardsFlipped + 2,
                            score: this.state.score + 100,
                            matchedCards: []
                          });
                    if (this.state.cardsFlipped === this.state.cards.length)    //all cards flipped
                        setTimeout(() => this.victory(), 800);
                }
                else { //no match, flip the cards back
                    let card1 = document.getElementById(this.state.matchedCards[0].id);
                    let card2 = document.getElementById(this.state.matchedCards[1].id);
                    setTimeout(() => {
                        card1.classList.remove('flip');
                        card2.classList.remove('flip');
                        card1.style.pointerEvents = 'auto';
                        card2.style.pointerEvents = 'auto';
                    }, 800);
                    this.setState({matchedCards: [],
                        score: this.state.score >= 5 ?  this.state.score - 5 : 0    //decrement score by 5
                    });
                }

            }
        }
    }

    displayModal = (content) => {
        this.setState({ 
            showModal: true,
            modalContent: content
         });
    };
    
    closeModal = () => {
        this.setState({ 
            showModal: false,
            modalContent: ''
         });
         this.reset();
    };
    
    render() { 
        return (  
            <div>
                <h1 id="heading">Memory Match Game</h1>
                
                <div id="game-container">
                    <Display started={this.state.started} 
                             timer={this.state.timer} 
                             score={this.state.score} 
                             flips={this.state.flips}
                             startGame={this.startGame}
                             theme={this.state.theme}
                             selectTheme={this.selectTheme}
                    />

                    {/* inject color definitions for SVGs */}
                    <Defs theme={this.state.theme}/>

                    {this.state.cards.map((card, i) => 
                        (<Card key={i} id={i} card={card} theme={this.state.theme} flipCard={this.flipCard} />)
                    )}
                </div>
                { this.state.modalContent !== '' && 
                   <Modal showModal={this.state.showModal} closeModal={this.closeModal} modalContent={this.state.modalContent} 
                          score={this.state.score} flips={this.state.flips}
                   />
                }
            </div>
        );
    }
}
 
export default MatchGame;