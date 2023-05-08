import React from 'react'
import Image from 'next/image';
function Footer() {
    return (
        <a href='#'>
            <Image
                src='/static/images/powerdust-logo.png'
                alt='...'
                width={190}
                height={58}
            />
        </a>
    )
}

export default Footer