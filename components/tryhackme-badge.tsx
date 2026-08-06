import React from 'react';

export const TryHackMeBadge = () => {
    return (
        <div className="w-full flex justify-center py-4 my-8">
            <a 
                href="https://tryhackme.com/p/ciberportero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-[1.02] transition-transform block"
            >
                <img 
                    src="https://tryhackme-badges.s3.amazonaws.com/ciberportero.png" 
                    alt="TryHackMe Badge - ciberportero" 
                    className="w-[327px] h-[84px] object-cover"
                    style={{
                        transform: 'scale(1.5)',
                        transformOrigin: 'center',
                    }}
                />
            </a>
        </div>
    );
};
