

export default function Input({type, name, label, onChange, value, placeholder}) {
    return (
        <label htmlFor={name}>
            {label} <input type={type} onChange={onChange} value={value} placeholder={placeholder} required/>
        </label>

    )
}