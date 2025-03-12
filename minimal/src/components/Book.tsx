import React from 'react'

interface BookInterface {
    width: number;
    color?: string;
    secondary_color?: string;
    title: string;
    second_title?: string;
    hoverColor?: string;
}


export default function Book({ width, color = 'blue', secondary_color = 'white', title, second_title, hoverColor = 'yellow' }: BookInterface) {
    return (
        <div
            style={{
                width: `${width}px`,
                height: '150px',
                backgroundColor: color,
                border: `2px solid ${secondary_color}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor!)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
        >
            <div style={{ color: secondary_color, textAlign: 'center' }}>
                <h3>{title}</h3>
                {second_title && <h5>{second_title}</h5>}
            </div>
        </div>
    );
}
