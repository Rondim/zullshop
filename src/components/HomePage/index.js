import React, { Component } from 'react';
import ParticipantsTab from './ParticipantsTab';
import { Container, Row, Col } from 'reactstrap';
import glamorous from 'glamorous';
import WinnersTab from './WinnersTab';

const WINNERS = 'winners';
const PARTICIPANTS = 'participants';

const TabS = glamorous.div(props => {
  const backgroundColor = props.active ? '#969696' : '#D6D6D6';
  const color = props.active ? 'white' : 'black';
  return {
    backgroundColor,
    fontSize: '2em',
    color,
    ':hover': {
      backgroundColor: '#B5B5B5'
    }
  };
});
const VideoS = glamorous.div({
  margin: '10px 0'
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: WINNERS };
  }
  handleTabClick = (tab) => {
    this.setState({ tab });
  }
  render() {
    return (
      <div className="winner-tab">
        <header className="App-header">
          <h1 className="App-title">ZULL</h1>
        </header>
        <VideoS>
          <iframe title="lottery" width="560" height="315" src="https://www.youtube.com/embed/_OimhidCzHw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </VideoS>
        <Container>
          <Row>
            <Col xs={6}>
              <TabS 
                onClick={() => this.handleTabClick(WINNERS)}
                active={this.state.tab === WINNERS}
              >
                Победители
              </TabS>
            </Col>
            <Col xs={6}>
              <TabS
                onClick={() => this.handleTabClick(PARTICIPANTS)}
                active={this.state.tab === PARTICIPANTS}
              >
                Участники
              </TabS>
            </Col>
          </Row>
          { this.state.tab === WINNERS 
            ? <WinnersTab />
            : <ParticipantsTab />
          }
        </Container>
      </div>
    );
  }
};

export default HomePage;
