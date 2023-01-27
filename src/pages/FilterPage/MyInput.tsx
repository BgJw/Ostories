import React from 'react';

interface IProps {
    name: string,
    data: string[],
    isCheck: (e: {target: HTMLInputElement}, name: string) => void
}
const MyInput = ({name, data, isCheck}: IProps) => {



    return (
        <>
        {name}
        <div className='input'>
        {data.map((el) => (
            <label 
                key={el}
                className='input__label'>
                <input
                    type="checkbox"
                    className='input__checkbox'
                    name={el}
                    onChange={(e) => {isCheck(e, name)}}
                />
                {el}
            </label>
        ))}

        </div>
        </>
    );
};

export default MyInput;