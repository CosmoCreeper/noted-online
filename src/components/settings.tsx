import React from 'react';

type SettingsProps = {
  soundEnabled: boolean;
  setSoundEnabled: (arg0: boolean) => void;
  sound: string;
  setSound: (arg0: string) => void;
  customSound: string;
  setCustomSound: (arg0: string) => void;
  confettiEnabled: boolean;
  setConfettiEnabled: (arg0: boolean) => void;
  dayReset: boolean;
  setDayReset: (arg0: boolean) => void;
  moreLineSpace: boolean;
  setMoreLineSpace: (arg0: boolean) => void;
};

const CHANGELOG = [
  "Remapped color system.",
  "Left and right arrows for navigating tasks.",
  "Increased bottom margin for contents page.",
  "Small windows can see full changelog.",
  "Redesigned backspace and delete functionality.",
  "Reduced redundancies.",
  "Text Outline is now More Line Space without outline.",
  "Thickness adjustment for header.",
  "Changelog text wrapping sticks to horizontal arrangement.",
  "Right padding added to content and settings pages.",
  "Structured components into separate files.",
  "Resizer is now single-click.",
  "Fixed header color not transitioning correctly."
];

const Changes = () => {
  return (
    <div className="mb-10">
      <h3 className="settings-header">Changelog</h3>
      <table>
        {CHANGELOG.map(change => <tr><td className="w-[10%]">+ </td><td className="w-[90%] pr-3 text-left leading-5 pt-px">{change}</td></tr>)}
      </table>
    </div>
  );
}

const SOUNDS = [
  "Doorbell",
  "DJ Khaled",
  "Custom",
];

const Settings = ({
    dayReset, setDayReset, soundEnabled, setSoundEnabled, sound, setSound, customSound,
     setCustomSound, confettiEnabled, setConfettiEnabled, moreLineSpace, setMoreLineSpace}: SettingsProps) => {

  return (
    <div className="text-center select-none">
      <h3 className="settings-header">Options</h3>
      <div id="dayresetcon" className="setting">
        <input type="checkbox" checked={dayReset} onChange={() => setDayReset(!dayReset)} />
        <label id="dayresettext" className="labelClass" key="resett">Reset Tasks Daily</label>
      </div>
      <div className="setting" id="checksoundcon">
        <input type="checkbox" checked={soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)} />
        <label className="labelClass mr-1.5">Sound</label>
        <select value={sound} onChange={(e) => setSound(e.target.value)} className="ml-1 mr-1 h-[22px] rounded-[5px] focus:outline">
          {SOUNDS.map(value => <option value={value} key={value}>{value}</option>)}
        </select>
        <input type="text" 
          className={`${sound === "Custom" ? "" : "hidden"} h-[22px] text-xs ml-2 w-[21%] pl-1 focus:outline rounded-[5px]`}
          value={customSound} onChange={(e) => setCustomSound(e.target.value)} spellCheck="false" />
      </div>
      <div className="setting" id="confetticon">
        <input type="checkbox" checked={confettiEnabled} onChange={() => setConfettiEnabled(!confettiEnabled)} />
        <label className="labelClass">Confetti</label>
      </div>
      <div className="setting" id="outlinecon">
        <input type="checkbox" checked={moreLineSpace} onChange={() => setMoreLineSpace(!moreLineSpace)} />
        <label className="labelClass">More Line Space</label>
      </div>
      <Changes />
      <div className="fixed flex justify-center w-full m-0 bottom-0">
        <div className="ui pt-0.5 w-[140px] px-1 rounded-t-[5px] z-[2] !text-black shadow-[rgba(100,100,111,0.2)_0px_7px_20px_10px] border-solid border-black border-[1px]">
          <strong>Version:</strong> 1.3.3b
        </div>
      </div>
    </div>
  );
}

export default Settings;