import MIDI from './MIDI'
import dom from '../util/dom_request_script'

MIDI.Soundfont = MIDI.Soundfont || {};
MIDI.Player = MIDI.Player || {};

MIDI.DEBUG = true;
MIDI.USE_XHR = true;
MIDI.soundfontUrl = './soundfont/';

/*
	MIDI.loadPlugin({
		onsuccess: function() { },
		onprogress: function(state, percent) { },
		targetFormat: 'mp3', // optionally can force to use MP3 (for instance on mobile networks)
		instrument: 'acoustic_grand_piano', // or 1 (default)
		instruments: [ 'acoustic_grand_piano', 'acoustic_guitar_nylon' ] // or multiple instruments
	});
*/

MIDI.loadPlugin = function(opts) {
	if (typeof opts === 'function') {
		opts = {onsuccess: opts};
	}

	MIDI.soundfontUrl = opts.soundfontUrl || MIDI.soundfontUrl;

	/// Detect the best type of audio to use
	MIDI.audioDetect(function(supports) {
		var hash = window.location.hash;
		var api = '';

		/// use the most appropriate plugin if not specified
		if (supports[opts.api]) {
			api = opts.api;
		} else if (supports[hash.substr(1)]) {
			api = hash.substr(1);
		} else if (supports.webmidi) {
			api = 'webmidi';
		} else if (window.AudioContext) { // Chrome
			api = 'webaudio';
		} else if (window.Audio) { // Firefox
			api = 'audiotag';
		}

		if (connect[api]) {
			/// use audio/ogg when supported
			if (opts.targetFormat) {
				var audioFormat = opts.targetFormat;
			} else { // use best quality
				var audioFormat = supports['audio/ogg'] ? 'ogg' : 'mp3';
			}

			/// load the specified plugin
			MIDI.__api = api;
			MIDI.__audioFormat = audioFormat;
			MIDI.supports = supports;
			MIDI.loadResource(opts);
		}
	});
};

/*
	MIDI.loadResource({
		onsuccess: function() { },
		onprogress: function(state, percent) { },
		instrument: 'banjo'
	})
*/

MIDI.loadResource = function(opts) {
	var instruments = opts.instruments || opts.instrument || 'acoustic_grand_piano';
	///
	if (typeof instruments !== 'object') {
		if (instruments || instruments === 0) {
			instruments = [instruments];
		} else {
			instruments = [];
		}
	}
	/// convert numeric ids into strings
	for (var i = 0; i < instruments.length; i ++) {
		var instrument = instruments[i];
		if (instrument === +instrument) { // is numeric
			if (MIDI.GM.byId[instrument]) {
				instruments[i] = MIDI.GM.byId[instrument].id;
			}
		}
	}
	///
	opts.format = MIDI.__audioFormat;
	opts.instruments = instruments;
	///
	connect[MIDI.__api](opts);
};

var connect = {
	webmidi: function(opts) {
		// cant wait for this to be standardized!
		MIDI.WebMIDI.connect(opts);
	},
	audiotag: function(opts) {
		// works ok, kinda like a drunken tuna fish, across the board
		// http://caniuse.com/audio
		requestQueue(opts, 'AudioTag');
	},
	webaudio: function(opts) {
		// works awesome! safari, chrome and firefox support
		// http://caniuse.com/web-audio
		requestQueue(opts, 'WebAudio');
	}
};

var requestQueue = function(opts, context) {
	var audioFormat = opts.format;
	var instruments = opts.instruments;
	var onprogress = opts.onprogress;
	var onerror = opts.onerror;
	///
	var length = instruments.length;
	var pending = length;
	var waitForEnd = function() {
		if (!--pending) {
			onprogress && onprogress('load', 1.0);
			MIDI[context].connect(opts);
		}
	};
	///
	for (var i = 0; i < length; i ++) {
		var instrumentId = instruments[i];
		if (MIDI.Soundfont[instrumentId]) { // already loaded
			waitForEnd();
		} else { // needs to be requested
			sendRequest(instruments[i], audioFormat, function(evt, progress) {
				var fileProgress = progress / length;
				var queueProgress = (length - pending) / length;
				onprogress && onprogress('load', fileProgress + queueProgress, instrumentId);
			}, function() {
				waitForEnd();
			}, onerror);
		}
	};
};

var sendRequest = function(instrumentId, audioFormat, onprogress, onsuccess, onerror) {
	var soundfontPath = MIDI.soundfontUrl + instrumentId + '-' + audioFormat + '.js';
	if (MIDI.USE_XHR) {
		MIDI.util.request({
			url: soundfontPath,
			format: 'text',
			onerror: onerror,
			onprogress: onprogress,
			onsuccess: function(event, responseText) {
				var script = document.createElement('script');
				script.language = 'javascript';
				script.type = 'text/javascript';
				script.text = responseText;
				document.body.appendChild(script);
				///
				onsuccess();
			}
		});
	} else {
		dom.loadScript.add({
			url: soundfontPath,
			verify: 'MIDI.Soundfont["' + instrumentId + '"]',
			onerror: onerror,
			onsuccess: function() {
				onsuccess();
			}
		});
	}
};

MIDI.setDefaultPlugin = function(midi) {
	for (var key in midi) {
		MIDI[key] = midi[key];
	}
};
