import React from 'react';
import { useDispatch, connect } from 'react-redux';
import {Table, Row, Col} from 'react-bootstrap';
import {MainContainer , ListContainer} from './ScoreBoardStyle';

import * as actions from '../../store/actions';


const ScoreBoard = (props) => {

    const dispatch=useDispatch();
    const {scores , username} = props;
    let dataList = null;
    
    if(scores !== null){
        dataList= scores.map((el, index) => (
            <tr style={{backgroundColor: (username!==null && username===el.studentNumber) ? 'yellow' : 'white'}}>
                <th>{index+1}</th>
                <th>{el.studentNumber}</th>
                <th>{el.penalty}</th>
                <th>{el.score}</th>
            </tr>
        ))
    }

    if(scores === null){
        dispatch(actions.getScoreBoard());
    }

    return (
        <MainContainer> 
            <Row>
                <Col>
                    <ListContainer>
                        <h1> ScoreBoard</h1>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>StudentNumber</th>
                                    <th>Penalty</th>
                                    <th>Score</th>
                                </tr>
                                {dataList}
                            </thead> 
                        </Table>
                    </ListContainer>
                </Col>
            </Row>
        </MainContainer>
    )
}

const mapStateToProps = (state) => {
    return{
        scores: state.getScoreBoard.scores,
        username : state.userAuth.username
    }
}


export default connect(mapStateToProps)(ScoreBoard);