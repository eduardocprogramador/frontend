const Title = (props) => {
  return (
    <div className='container margin-header mb-5 border border-dark border-2 rounded-5 py-2'>
        <div className='row text-center'>
            <h5>
                <i className={`${props.icon} me-2`}></i>
                {props.titulo}
            </h5>
        </div>
    </div>
  )
}

export default Title