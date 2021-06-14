import React, { FC } from 'react';
import { Input } from 'antd';

interface InputProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const CustomInput : FC<InputProps> = ({onChange}) => {

    return(
        <Input placeholder="Basic usage" onChange={onChange}/>
    )
    
}

export default CustomInput