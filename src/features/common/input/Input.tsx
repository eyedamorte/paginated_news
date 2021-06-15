import React, { FC } from 'react';
import { Input } from 'antd';

interface InputProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    style: React.CSSProperties
}

const CustomInput : FC<InputProps> = ({onChange, style}) => {

    return(
        <Input placeholder="Basic usage" {...{ onChange, style }} />
    )
    
}

export default CustomInput