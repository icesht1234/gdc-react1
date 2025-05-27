import { useState } from 'react';
import '../styles/DarkModeToggle.css'

export default function DarkModeToggle() {
    const[isDark, setIsDark] = useState(false)

    return(
        <div className={isDark? 'dark' : 'light'}>
            <h2>{isDark? '다크모드' : '라이트모드'}</h2>
            <button onClick={()=>setIsDark(!isDark)}>모드 토글</button>
        </div>
    )
}