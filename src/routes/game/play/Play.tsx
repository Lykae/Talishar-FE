import { Board } from '../components/board/Board';
import './Play.css';
import GameStateHandler from '../../../app/GameStateHandler';
import LeftColumn from '../components/leftColumn/LeftColumn';
import RightColumn from '../components/rightColumn/RightColumn';
import HandZone from '../components/zones/handZone/HandZone';
import PlayerHand from '../components/zones/playerHand/PlayerHand';
import OptionsOverlay from '../components/elements/optionsMenu/OptionsMenu';
import EventsHandler from '../components/elements/eventsHandler/EventsHandler';
import PlayerInputPopUp from '../components/elements/playerInputPopUp/PlayerInputPopUp';
import CardPortal from '../components/elements/cardPortal/CardPortal';
import ChatCardDetail from '../components/elements/chatCardDetail/ChatCardDetail';
import CardListZone from '../components/zones/cardListZone/CardListZone';
import ChainLinkSummaryContainer from '../components/elements/chainLinkSummary/ChainLinkSummary';
import ActiveLayersZone from '../components/zones/activeLayersZone/ActiveLayersZone';

function Play() {
  return (
    <div className="centering">
      <div className="app">
        <ChatCardDetail />
        <LeftColumn />
        <div className="gameZone">
          <HandZone isPlayer={false} />
          <Board />
          <HandZone isPlayer />
          <PlayerHand />
        </div>
        <RightColumn />
      </div>
      <CardListZone />
      <ChainLinkSummaryContainer />
      <ActiveLayersZone />
      <OptionsOverlay />
      <PlayerInputPopUp />
      <CardPortal />
      <GameStateHandler />
      <EventsHandler />
    </div>
  );
}

export default Play;
