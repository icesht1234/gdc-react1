import {useState} from 'react'
export default function InputForm() {
    const[text, setText] = useState('')

    return (
        <div>
            <h2>입력한 값 : {text}</h2>
            <input
                type="text"
                placeholder="여기에 입력하세요"
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
            <hr />
        </div>
    )
}