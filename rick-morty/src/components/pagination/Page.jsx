import useFetch from "../../hooks/useFetch";
import loading from '../../assets/loading.gif'
import Getsingledata from '../singlecharacter/Getsingledata';


const Page = ({ description ,setDescription }) => {
  const url = 'https://rickandmortyapi.com/api/character';
  const { datas, error, status } = useFetch(url);
  console.log(datas);


  const handleDescription = () => {
    setDescription(
      <Getsingledata  />
    )
  }

  if (status === 'pending') return <div>{loading}</div>
  if (status === 'rejected') throw error;


  return (
    <>
      {status === 'resolved' && (
        <div className='page-container'>
          {datas.map(data => {
            const { id, name, status, image } = data;
            return (
              <div className='page-content' key={id}>
                <div className='page-image'>
                  <img src={image} alt={name} title={name} />
                </div>
                <div className='page-descript'>
                  <h5>{name}</h5>
                  <p>{status === 'Alive' ?
                    <i className="fas fa-circle fa-xs"> Alive</i>
                    : status === 'Dead'
                    ? 
                    <i className="fas fa-cross fa-xs"> Dead</i>
                    : 'Unknown'}
                  </p>
                  <button onClick={handleDescription} type='button' className='read-more'>Read-more</button>
                </div>
              </div>
            );
          })}
      </div>
      )}
    </>
  )
}

export default Page;