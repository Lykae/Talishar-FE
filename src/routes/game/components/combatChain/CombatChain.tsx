import React from 'react';
import styles from './CombatChain.module.css';
import ChainLinks from '../elements/chainLinks/ChainLinks';
import CurrentAttack from '../elements/currentAttack/CurrentAttack';
import Reactions from '../elements/reactions/Reactions';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../../../../app/Hooks';
import { RootState } from 'app/Store';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import Button from '../../../../features/Button';
import { submitButton } from '../../../../features/game/GameSlice';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

export default function CombatChain() {
  const oldCombatChain =
    useAppSelector((state: RootState) => state.game.oldCombatChain) ?? [];
  const activeCombatChain = useAppSelector(
    (state: RootState) => state.game.activeChainLink
  );
  const [isUp, setIsUp] = React.useState(false);
  const [canSkipBlock, setCanSkipBlock] = React.useState(false);
  const [canSkipBlockAndDef, setCanSkipBlockAndDef] = React.useState(false);
  const [cookies] = useCookies(['experimental']);

  const handleChangePositionClick = () => {
    setIsUp(!isUp);
  };
  const [width, height] = useWindowDimensions();
  const isPortrait = height > width;

  const showCombatChain =
    oldCombatChain?.length > 0 ||
    (activeCombatChain?.attackingCard &&
      activeCombatChain?.attackingCard?.cardNumber !== 'blank');
  return (
    <AnimatePresence>
      {showCombatChain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isUp
              ? { opacity: 1, x: 0, y: '-30dvh' }
              : { opacity: 1, x: 0, y: 0 }
          }
          transition={{ type: 'tween' }}
          exit={{ opacity: 0 }}
          className={styles.combatChain}
        >
          <CurrentAttack />
          <div className={styles.chainCentre}>
            <ChainLinks />
            <Reactions />
          </div>
          <div className={styles.grabbyHandle}>
            {isUp ? (
              <div className={styles.icon} onClick={handleChangePositionClick}>
                <BsArrowDownSquareFill />
              </div>
            ) : (
              <div className={styles.icon} onClick={handleChangePositionClick}>
                <BsArrowUpSquareFill />
              </div>
            )}
            {canSkipBlock ? <div className={styles.icon}></div> : <div></div>}
            {canSkipBlockAndDef ? (
              <div className={styles.icon}></div>
            ) : (
              <div></div>
            )}
          </div>
          {!isPortrait && <PlayerPrompt />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const PlayerPrompt = () => {
  const playerPrompt = useAppSelector(
    (state: RootState) => state.game.playerPrompt
  );

  const dispatch = useAppDispatch();

  const clickButton = (button: Button) => {
    dispatch(submitButton({ button: button }));
  };

  const buttons = playerPrompt?.buttons?.map((button, ix) => {
    return (
      <div
        className={styles.buttonDiv}
        onClick={() => {
          clickButton(button);
        }}
        key={ix.toString()}
      >
        {button.caption}
      </div>
    );
  });
  return (
    <AnimatePresence>
      <motion.div
        className={styles.playerPrompt}
        initial={{ opacity: '0' }}
        animate={{ opacity: '1' }}
        exit={{ opacity: '0' }}
        key={`${playerPrompt?.helpText?.substring(0, 10)}`}
      >
        <div className={styles.content}>
          <div
            dangerouslySetInnerHTML={{ __html: playerPrompt?.helpText ?? '' }}
          ></div>
        </div>
        {buttons}
      </motion.div>
    </AnimatePresence>
  );
};
