import React, { useState } from 'react';
import Message from './Message';

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, inputText]);
            setInputText('');
        }
    };

    return (
        <div className="container w-50 mt-5">
            <div className="border p-3 rounded bg-light border ">
                {messages.map((message, index) => (
                    <Message key={index} text={message} />
                ))}
            </div>
            <div className="mt-3 input-group">
                <input
                    type="text"
                    className="form-control chatbox"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={sendMessage}>
                    <span class="material-symbols-outlined ">
                        Send
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
