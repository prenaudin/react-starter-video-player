/** @jsx React.DOM */
var React = require('react');

var VideoPlayer = React.createClass({

	getDefaultProps: function() {
    return {
      location: 'http://www.quirksmode.org/html5/videos/big_buck_bunny.webm'
    };
  },

	getInitialState: function() {
		return {
			progression: '0%'
		};
	},

	componentDidMount: function() {
		this.refs.player.getDOMNode().addEventListener('progress', this.handleProgress);
	},

	render: function() {
		return (
			<div className="video-player">
				<video ref="player">
				  <source src={this.props.location} type='video/webm;codecs="vp8, vorbis"' />
				</video>

				<div className="controls media">
					<div className="pull-left">
						<a className="control-play" href="javascript:void(0)" onClick={this.handlePlay}>
							|>
						</a>

						<a className="control-play" href="javascript:void(0)" onClick={this.handlePause}>
							||
						</a>
					</div>

					<div className="progress media-body">
					  <div className="progress-bar" style={{"width": this.state.progression}}></div>
					</div>
				</div>
			</div>
		);
	},

	handlePause: function() {
		this.refs.player.getDOMNode().pause();
	},

	handlePlay: function() {
		this.refs.player.getDOMNode().play();
	},

	handleProgress: function(){
		var videoEl = this.refs.player.getDOMNode();
    console.log('handleProgress', videoEl.duration);
		if(!videoEl.duration)
			return false;
		var progress = ( videoEl.currentTime / videoEl.duration ) * 100 + '%';
		this.setState({progression: progress});
	}
});

React.renderComponent(
<VideoPlayer/>,
	document.querySelector('.video-player-container')
);
