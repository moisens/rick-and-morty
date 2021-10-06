import './header.scss';
import Page from '../pagination/Page';
import { ErrorBoundary } from 'react-error-boundary';
import CustomButtons from '../customComponents/CustomButton';
import { useState } from 'react';


const ErrorBoundaryFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <CustomButtons 
      style={{
        backgroundColor: "purple",
        color: "white",
        padding: "15px 38px",
        fontSize: "20px",
        margin: "20px",
        border: "none",
      }}
        title='Try again'
        onClick={resetErrorBoundary} 
      />
    </div>
  )
}




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
          {/*Start Page container*/}
          <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack} >
            <Page />
          </ErrorBoundary>
          {/*End Page container*/}
        </div>
      </section>

    </section>
  )
}

export default Header
