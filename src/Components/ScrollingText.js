import React from 'react';

function ScrollingText() {
    return (
        <div className="scroll-container">
            <div className="scrollItems">
                {[...Array(10)].map((_, i) => (
                    <div className="overlayText" key={i}>
                        {getText(i)}
                    </div>
                ))}
            </div>
            <div className="scrollItems">
                {[...Array(10)].map((_, i) => (
                    <div className="overlayText" key={i + 10}>
                        {getText(i)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function getText(index) {
    const greetings = [
        "HELLO",
        "こんにちは",
        "Привет",
        "Hola",
        "Bonjour",
        "你好",
        "안녕하세요",
        "سلام",
        "Здраво",
        "Hej",
        "Ciao"
    ];
    return greetings[index % greetings.length];
}

export default ScrollingText;
