import React, { useContext, useState } from 'react'
import './Component.css'
import Button from './Button';
import GameHandler from '../context/GameHandler';

const Grid3 = (props) => {
    const {highlightGrid} = useContext(GameHandler);
    return (
        <div className='mini-board'>
            <div className="mini-grid-item">
                <Button id={0} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent',}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={1} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={2} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={3} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={4} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={5} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={6} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={7} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
            <div className="mini-grid-item">
                <Button id={8} gid={props.gid} style={{backgroundColor: props.gid === highlightGrid? '#d6d6d6': 'transparent'}}/>
            </div>
        </div>
    )
}

export default Grid3