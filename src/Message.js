import React from 'react';
import "./App.css";
function Message({ text }) {
  return <div className='fs-5 chatbox'>
  <span class="material-symbols-outlined chatbox text-secondary">
chevron_right

</span>
{text}</div>;
}

export default Message;
