import './header.scss';

const Header = () => {
  return (
    <section className='header-container'>
      <header className='header-title'>
        <h1>Rick and Morty</h1>
      </header>
      <section className='rick-content'>
        <div className='filter-input'>
          <label htmlFor='character'></label>
          <input type="text" name='character' placeholder='Filter by Character' />
          <label htmlFor='episode'></label>
          <input type="text" name='episode' placeholder='Filter by Episode' />
          <label htmlFor='location'></label>
          <input type="text" name='character' placeholder='Filter by Character' />
          <button type='submit'>Search</button>
        </div>
        <div className='datas-container'>
          <div className='page-container'>
            <div className='page-content'>
              <div className='page-image'>
                <img src="" alt="" />
                IMAGE
              </div>
              <p>page-description</p>
            </div>
          </div>
          <div className='description-container'>
            <div className='description-content'>
              <p>description</p>
            </div>
            <div className='description-img'>image</div>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Header
