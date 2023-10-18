import React from 'react'

const Input = (props) => {
    return (
        <div className="mb-4 flex flex-col">
            <label
                className="block text-gray-700 font-bold mb-2 text-lg"
                htmlFor="name"
            >
                {props.label}
            </label>
            {
                props.type === "text" ? 
                <input
                type="text"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                {...props}
                className="p-2 border rounded-xl w-full"
            /> :
            <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            {...props}
            className="p-2 border rounded-xl w-full h-32"
          />
            }
            {props.error && <p className="text-[crimson] text-sm mr-2 mb-2 self-end">{props.error}</p>}
        </div>
    )
}

export default Input
