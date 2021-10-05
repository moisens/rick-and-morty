const CustomButtons = ({ className='', type, title, ...otherProps }) => {
  return (
    <button
      className={className}
      type={type}
      {...otherProps}
    >
      {title}
    </button>
  )
}

export default CustomButtons;