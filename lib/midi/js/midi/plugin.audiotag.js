import MIDI from './MIDI'

window.Audio && (function() {
	var midi = MIDI.AudioTag = { api: 'audiotag' };
	var noteToKey = {};
	var volume = 127; // floating point
	var buffer_nid = -1; // current channel
	var audioBuffers = []; // the audio channels
	var notesOn = []; // instrumentId + noteId that is currently playing in each 'channel', for routing noteOff/chordOff calls
	var notes = {}; // the piano keys
	for (var nid = 0; nid < 12; nid ++) {
		audioBuffers[nid] = new Audio();
	}

	var playChannel = function(channel, note) {
		if (!MIDI.channels[channel]) return;
		var instrument = MIDI.channels[channel].instrument;
		var instrumentId = MIDI.GM.byId[instrument].id;
		var note = notes[note];
		if (note) {
			var instrumentNoteId = instrumentId + '' + note.id;
			var nid = (buffer_nid + 1) % audioBuffers.length;
			var audio = audioBuffers[nid];
			notesOn[ nid ] = instrumentNoteId;
			if (!MIDI.Soundfont[instrumentId]) {
				if (MIDI.DEBUG) {
					console.log('404', instrumentId);
				}
				return;
			}
			audio.src = MIDI.Soundfont[instrumentId][note.id];
			audio.volume = volume / 127;
			audio.play();
			buffer_nid = nid;
		}
	};

	var stopChannel = function(channel, note) {
		if (!MIDI.channels[channel]) return;
		var instrument = MIDI.channels[channel].instrument;
		var instrumentId = MIDI.GM.byId[instrument].id;
		var note = notes[note];
		if (note) {
			var instrumentNoteId = instrumentId + '' + note.id;
			for (var i = 0, len = audioBuffers.length; i < len; i++) {
			    var nid = (i + buffer_nid + 1) % len;
			    var cId = notesOn[nid];
			    if (cId && cId == instrumentNoteId) {
			        audioBuffers[nid].pause();
			        notesOn[nid] = null;
			        return;
			    }
			}
		}
	};

	midi.audioBuffers = audioBuffers;
	midi.send = function(data, delay) { };
	midi.setController = function(channel, type, value, delay) { };
	midi.setVolume = function(channel, n) {
		volume = n; //- should be channel specific volume
	};

	midi.programChange = function(channel, program) {
		MIDI.channels[channel].instrument = program;
	};

	midi.pitchBend = function(channel, program, delay) { };

	midi.noteOn = function(channel, note, velocity, delay) {
		var id = noteToKey[note];
		if (!notes[id]) return;
		if (delay) {
			return setTimeout(function() {
				playChannel(channel, id);
			}, delay * 1000);
		} else {
			playChannel(channel, id);
		}
	};

	midi.noteOff = function(channel, note, delay) {
// 			var id = noteToKey[note];
// 			if (!notes[id]) return;
// 			if (delay) {
// 				return setTimeout(function() {
// 					stopChannel(channel, id);
// 				}, delay * 1000)
// 			} else {
// 				stopChannel(channel, id);
// 			}
	};

	midi.chordOn = function(channel, chord, velocity, delay) {
		for (var idx = 0; idx < chord.length; idx ++) {
			var n = chord[idx];
			var id = noteToKey[n];
			if (!notes[id]) continue;
			if (delay) {
				return setTimeout(function() {
					playChannel(channel, id);
				}, delay * 1000);
			} else {
				playChannel(channel, id);
			}
		}
	};

	midi.chordOff = function(channel, chord, delay) {
		for (var idx = 0; idx < chord.length; idx ++) {
			var n = chord[idx];
			var id = noteToKey[n];
			if (!notes[id]) continue;
			if (delay) {
				return setTimeout(function() {
					stopChannel(channel, id);
				}, delay * 1000);
			} else {
				stopChannel(channel, id);
			}
		}
	};

	midi.stopAllNotes = function() {
		for (var nid = 0, length = audioBuffers.length; nid < length; nid++) {
			audioBuffers[nid].pause();
		}
	};

	midi.connect = function(opts) {
		MIDI.setDefaultPlugin(midi);
		///
		for (var key in MIDI.keyToNote) {
			noteToKey[MIDI.keyToNote[key]] = key;
			notes[key] = {id: key};
		}
		///
		opts.onsuccess && opts.onsuccess();
	};
})();
