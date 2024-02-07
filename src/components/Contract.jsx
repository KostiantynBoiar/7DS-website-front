import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contract = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };

    return (
        <div className="contact-wrapper">
            <div className="contact">
                <div className="text-wrapper-29">Contract address</div>
                <div className="overlap-group-6">
                    <img
                        className="rectangle-7"
                        alt="Rectangle"
                        src="https://cdn.animaapp.com/projects/65c0edfdfdd29f06c4910f07/releases/65c3f82b4897f7491f18622a/img/rectangle-7@2x.png"
                    />
                    <div className="text-wrapper-30">0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5</div>
                    <CopyToClipboard text="0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5" onCopy={handleCopy}>
                        <img
                            className="copy"
                            alt="Copy"
                            src="https://cdn.animaapp.com/projects/65c0edfdfdd29f06c4910f07/releases/65c3f82b4897f7491f18622a/img/copy-1.png"
                        />
                    </CopyToClipboard>
                </div>
                {copied && <div style={{ color: 'green' }}>Copied!</div>}
            </div>
        </div>
    );
};


export default Contract;