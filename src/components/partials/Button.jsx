const Button = ({ title, onSelect }) => {
    return (
        <button type="button" class="btn btn-primary m-2" onClick={() => onSelect}>{title}</button>
    )
}

export default Button