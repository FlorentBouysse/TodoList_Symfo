

export default function Input({type, name, label, }) {
    return (
        <label htmlFor={name}>
            {label}
            <input type={type} />
        </label>

    )
}