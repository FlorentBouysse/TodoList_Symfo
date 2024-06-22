

export default function Input({type, name, label, onChange, value}) {
    return (
        <label htmlFor={name}>
            {label}
            <input type={type} onChange={onChange} value={value} required/>
        </label>

    )
}