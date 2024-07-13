import React, { useEffect, useState, useRef } from "react";
import "./Piano.css";

const Piano = () => {
  const keyboardRef = useRef(null);
  const [tempo, setTempo] = useState(2);
  const [songNum, setSongNum] = useState("1");
  const [playDisabled, setPlayDisabled] = useState(false);

  const pianoLetters = ["C", "D", "E", "F", "G", "A", "B"];
  const keyMap = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
  ];

  const jingleBells = `B3,,B3,,B3,,,,B3,,B3,,B3,,,,B3,,D4,,G3,,A3,B3,,,,,,C4,,C4,,C4,,,,C4,C4,,B3,,B3,,,,B3,B3,B3,,A3,,A3,,B3,,A3,,,,D4`;
  const happyBirthday = `G4,G4,A4,,G4,,C5,,B4,,,,G4,G4,A4,,G4,,D5,,C5,,,,G4,G4,G5,,E5,,C5,,B4,,A4,,F5,F5,E5,,C5,,D5,,C5,,,,`;

  useEffect(() => {
    init();
  }, []);

  const song = (notesString, tempo = 2, cb) => {
    const notes = notesString.split(",");
    let currentNote = 0;
    let btn;

    const mousedownEvent = new Event("mousedown");
    const mouseupEvent = new Event("mouseup");

    const interval = setInterval(() => {
      if (currentNote < notes.length) {
        if (notes[currentNote] !== "") {
          if (btn) {
            btn.dispatchEvent(mouseupEvent);
          }
          btn = document.querySelector(
            `[data-letter-note=${notes[currentNote]}]`
          );
          btn.dispatchEvent(mousedownEvent);
        }
        currentNote++;
      } else {
        if (btn) {
          btn.dispatchEvent(mouseupEvent);
        }
        clearInterval(interval);
        cb();
      }
    }, 100 * tempo);
  };

  const init = () => {
    const keyboard = keyboardRef.current;
    const whiteButtons = [];
    const blackButtons = [];

    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j < 7; j++) {
        const key = createKey("white", pianoLetters[j], i);
        keyboard.appendChild(key);
        whiteButtons.push(key);

        if (j !== 2 && j !== 6) {
          const blackKey = createKey("black", pianoLetters[j], i);
          const emptySpace = document.createElement("div");
          emptySpace.className = "empty-space";
          emptySpace.appendChild(blackKey);
          keyboard.appendChild(emptySpace);
          blackButtons.push(blackKey);
        } else {
          blackButtons.push(null);
        }
      }
    }
  };

  const createKey = (type, note, octave) => {
    const keyBtn = document.createElement("button");
    keyBtn.className =
      type === "white"
        ? "piano__key piano__key--white"
        : "piano__key piano__key--black";
    keyBtn.dataset.letterNote =
      type === "white" ? note + octave : note + "#" + octave;
    keyBtn.dataset.letterNoteFileName =
      type === "white" ? note + octave : note + "s" + octave;
    //keyBtn.textContent = keyBtn.dataset.letterNote;

    const keyIndex = pianoLetters.indexOf(note) + (octave - 1) * 7;
    keyBtn.dataset.keyboard =
      type === "white" ? keyMap[keyIndex] : "⇧+" + keyMap[keyIndex];

    keyBtn.addEventListener("mousedown", () => {
      keyBtn.classList.add("piano__key--playing");
      playSound(keyBtn);
    });

    keyBtn.addEventListener("mouseup", () =>
      keyBtn.classList.remove("piano__key--playing")
    );

    return keyBtn;
  };

  const playSound = (keyBtn) => {
    // const audio = document.createElement("audio");
    // audio.src = "sounds/" + keyBtn.dataset.letterNoteFileName + ".mp3";
    // audio.play().then(() => {
    //   audio.remove();
    // });
    const audio2 = new Audio(`sounds/${keyBtn.dataset.letterNoteFileName}.mp3`);
    audio2.addEventListener("canplaythrough", (event) => {
      /* the audio is now playable; play it if permissions allow */

      audio2.play().catch((error) => {
        console.error("Failed to play sound:", error);
      });
    });

    // audio2.play().catch((error) => {
    //   console.error("Failed to play sound:", error);
    // });
  };

  const handleKeyDown = (e) => {
    if (e.target === keyboardRef.current) return;
    if (e.keyCode === 13) song(jingleBells, 2.5);
    if (e.repeat) {
      return;
    }
    const details = getKeyDetails(e);
    if (details === null) {
      return;
    }
    const mousedown = new Event("mousedown");
    if (details.type === "black") {
      blackButtons[details.index].classList.add("piano__key--playing");
      blackButtons[details.index].dispatchEvent(mousedown);
    } else {
      whiteButtons[details.index].classList.add("piano__key--playing");
      whiteButtons[details.index].dispatchEvent(mousedown);
    }
  };

  const handleKeyUp = (e) => {
    const details = getKeyDetails(e);
    if (details === null) {
      return;
    }
    if (details.type === "black") {
      blackButtons[details.index].classList.remove("piano__key--playing");
    } else {
      whiteButtons[details.index].classList.remove("piano__key--playing");
    }
  };

  const getKeyDetails = (e) => {
    const type = e.shiftKey ? "black" : "white";
    const keyCode = e.code;
    const lastSign = keyCode.substring(keyCode.length - 1);
    const index = keyMap.indexOf(lastSign);

    if (index !== -1) {
      if (
        (type === "black" && blackButtons[index] !== null) ||
        type === "white"
      ) {
        return { type, index };
      }
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleControlChange = (e) => {
    const value = e.target.value;
    let type;
    switch (value) {
      case "keyboard":
        type = "keyboard";
        break;
      case "letterNotes":
        type = "letterNote";
        break;
      case "none":
        type = "";
        break;
      default:
        break;
    }

    whiteButtons.forEach((btn) => {
      btn.textContent = btn.dataset[type];
    });

    blackButtons.forEach((btn) => {
      if (btn !== null) {
        btn.textContent = btn.dataset[type];
      }
    });
  };

  const handlePlay = () => {
    setPlayDisabled(true);
    const selectedSong = songNum === "1" ? jingleBells : happyBirthday;
    song(selectedSong, tempo, () => setPlayDisabled(false));
  };

  return (
    <div className="piano">
      <div className="piano__body">
        <div className="piano__speakers"></div>
        <div className="piano__interface">
          {/* <div className="piano__controls">
            <h4 className="piano__heading">PIANO</h4>
            <label>
              <input
                className="piano__control__option"
                type="radio"
                name="control"
                value="letterNotes"
                defaultChecked
                onChange={handleControlChange}
              />
              Letter Notes
            </label>
            <label>
              <input
                className="piano__control__option"
                type="radio"
                name="control"
                value="keyboard"
                onChange={handleControlChange}
              />
              Keyboard
            </label>
            <label>
              <input
                className="piano__control__option"
                type="radio"
                name="control"
                value="none"
                onChange={handleControlChange}
              />
              None
            </label>
          </div> */}
          <div className="piano__autoplay">
            <h4 className="piano__heading">AUTOPLAY</h4>
            <select
              className="piano__song-list"
              value={songNum}
              onChange={(e) => setSongNum(e.target.value)}
            >
              <option value="1">Jingle Bells</option>
              <option value="2">Happy Birthday</option>
            </select>
            <label>
              Tempo:
              <select
                className="piano__tempo"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
              >
                <option value="3">Slow</option>
                <option value="2">Normal</option>
                <option value="1">Fast</option>
              </select>
            </label>
            <button
              className="piano__play-btn"
              onClick={handlePlay}
              disabled={playDisabled}
            >
              Play
            </button>
          </div>
        </div>
        <div className="piano__speakers"></div>
      </div>
      <div className="piano__keyboard" ref={keyboardRef}></div>
    </div>
  );
};

export default Piano;
