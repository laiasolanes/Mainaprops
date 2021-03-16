import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import './newChallenge.css';
import { Modal, Button } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { loadDataChallenge } from '../../redux/actions/actionCreators';
import {

  bathTask,

} from '../../constants/taskImages';
import rewards from '../../constants/rewardImages';
import useStylesNewChallenge from '../../constants/useStylesNewChallenge';

const pageURL = window.location.href.split('/');
const idUser = pageURL[4];

export function NewChallengeComponent({ dataChallenge, actions }) {
  const styles = useStylesNewChallenge();

  const [modalTimes, setModalTimes] = useState(false);
  const [modalRewards, setModalRewards] = useState(false);
  const [stateDays, setStateDays] = useState({
    dilluns: false,
    dimarts: false,
    dimecres: false,
    dijous: false,
    divendres: false,
    dissabte: false,
    diumenge: false,
  });

  useEffect(() => {
    actions.loadDataChallenge(idUser);
  }, []);

  function openCloseModalTimes() {
    setModalTimes(!modalTimes);
  }

  function openCloseModalRewards() {
    setModalRewards(!modalRewards);
  }

  const daysCheckChange = (event) => {
    setStateDays({ ...stateDays, [event.target.name]: event.target.checked });
  };

  const challengeBody = (
    <div className={styles.modalChallenge}>
      <img src={bathTask} alt="Task" className={styles.timeImage} />
      <h3>Dutxar-se</h3>
      <p className={styles.text}>Selecciona els dies de la setmana que has de fer la tasca.</p>

      <FormGroup column>

        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.dilluns}
              onChange={daysCheckChange}
              name="dilluns"
              className={styles.check}
            />
            )}
          label="dilluns"
          className={styles.button_day}
        />

        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.dimarts}
              onChange={daysCheckChange}
              name="dimarts"
              className={styles.check}
            />
            )}
          label="dimarts"
          className={styles.button_day}
        />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.dimecres}
              onChange={daysCheckChange}
              name="dimecres"
              className={styles.check}
            />
            )}
          label="dimecres"
          className={styles.button_day}
        />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.dijous}
              onChange={daysCheckChange}
              name="dijous"
              className={styles.check}
            />
            )}
          label="dijous"
          className={styles.button_day}
        />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.divendres}
              onChange={daysCheckChange}
              name="divendres"
              className={styles.check}
            />
            )}
          label="divendres"
          className={styles.button_day}
        />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.dissabte}
              onChange={daysCheckChange}
              name="dissabte"
              className={styles.check}
            />
            )}
          label="dissabte"
          className={styles.button_day}
        />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              checked={stateDays.diumenge}
              onChange={daysCheckChange}
              name="diumenge"
              className={styles.check}
            />
            )}
          label="diumenge"
          className={styles.button_day}
        />

      </FormGroup>

      <Button
        className={styles.button_turquoise}
        onClick={openCloseModalTimes}
      >
        Guardar
      </Button>

      <Button
        className={styles.button_outlined}
        onClick={openCloseModalTimes}
      >
        Cancelar
      </Button>

    </div>
  );

  const rewardsBody = (
    <div className={styles.modalChallenge}>

      <h3>La recompensa</h3>

      <p className={styles.text}>
        Selecciona la recompensa que
        rebras quan facis totes les tasques i aconsegueixis el repte.
      </p>

      <div className="all__rewards">

        <div className={styles.rowRewards}>

          <article className="reward" id="weekend">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.weekend} alt="Recompensa" />
                <p className={styles.pButton}>Escapada familiar</p>
              </div>

            </Button>
          </article>

          <article className="task" id="film">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.film} alt="Recompensa" />
                <p className={styles.pButton}>Pel·lícula preferida</p>
              </div>

            </Button>
          </article>

        </div>

        <div className={styles.rowRewards}>

          <article className="reward" id="show">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.show} alt="Recompensa" />
                <p className={styles.pButton}>Espectacle ne família</p>
              </div>

            </Button>
          </article>

          <article className="task" id="book">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.book} alt="Recompensa" />
                <p className={styles.pButton}>Un llibre nou</p>
              </div>

            </Button>
          </article>

        </div>
        <div className={styles.rowRewards}>

          <article className="reward" id="dinner">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.dinner} alt="Recompensa" />
                <p className={styles.pButton}>Espectacle ne família</p>
              </div>

            </Button>
          </article>

          <article className="task" id="friends">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.friends} alt="Recompensa" />
                <p className={styles.pButton}>Nit amb amics</p>
              </div>

            </Button>
          </article>

        </div>

        <Button
          className={styles.button_turquoise}
          onClick={openCloseModalRewards}
        >
          Guardar
        </Button>

        <Button
          className={styles.button_outlined}
          onClick={openCloseModalRewards}
        >
          Cancelar
        </Button>

      </div>

    </div>
  );

  return (
    <section className="create__challenge">
      <h2>Crear repte</h2>
      <p className="create__title">El repte durarà una setmana</p>
      <p className="create__text">
        Selecciona les tasques que haurà de fer
        Mariona per complir el repte i aconseguir
        la seva recompensa.
      </p>

      <div className="all__tasks">
        {
        dataChallenge && dataChallenge?.allTasks?.map((task) => (
          <article className="task" id="mascot">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={task.image} alt="Tasca" />
              <p>{task.name}</p>
            </Button>
          </article>
        ))
      }

      </div>

      <Button
        variant="contained"
        className="button--violet-big"
        onClick={openCloseModalRewards}
      >
        Guardar
      </Button>

      <Button
        variant="contained"
        className="button--outlined-big"
        href={`/users/${idUser}`}
      >
        Cancelar
      </Button>

      <Modal
        open={modalTimes}
        onClose={openCloseModalTimes}
      >
        {challengeBody}
      </Modal>

      <Modal
        open={modalRewards}
        onClose={openCloseModalRewards}
      >
        {rewardsBody}
      </Modal>

    </section>
  );
}

NewChallengeComponent.propTypes = {
  dataChallenge: PropTypes.shape(
    {
      allTasks: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
      allRewards: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    },
  ).isRequired,
  actions: PropTypes.shape({
    loadDataChallenge: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return { dataChallenge: state.dataChallenge };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadDataChallenge,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChallengeComponent);
