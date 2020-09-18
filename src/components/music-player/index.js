import React, { Component } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import ReactAudioPlayer from 'react-audio-player'
import './index.scss'

export default class MusicPlayer extends Component {
    constructor() {
        super()
        this.state = {
            mediaUrl: './resources/8+8=8.mp3',
        }
    }
    render() {
        return (
            <div className="music-player-wrapper">
                <div className="control-btn">
                    <MenuOutlined />
                </div>
                <ReactAudioPlayer
                    src='https://hardi.oss-cn-hangzhou.aliyuncs.com/front-page/%E5%B2%9B%E5%B1%BF%E5%BF%83%E6%83%85%20-%208%2B8%3D8.mp3'
                    autoPlay = {false}
                    controls
                />
            </div>
        )
    }
}
