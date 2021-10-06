import useFetch from "../../hooks/useFetch";
import loading from '../../assets/loading.gif';


const Page = () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const { datas, error, status } = useFetch(url);
  console.log('DATAS: ',datas);
  const { results } = datas;
  
  


 

  if (status === 'pending') return <div>{loading}</div>
  if (status === 'rejected') throw error;


  return (
    <>
      {status === 'resolved' && (
        <div className='page-container'>
          {datas.map(data => {
            const { id, name, gender, origin, species, location, status, image } = data;
            return (
              <div className='page-content' key={id}>
                <div className='page-image'>
                  <img src={image} alt={name} title={name} />
                </div>
                <div className='page-descript'>
                  <div className='character-status'>
                    <h4>Name: {name}</h4>
                    <p>Status: {status === 'Alive' ?
                      <i className="fas fa-circle fa-xs"> Alive</i>
                      : status === 'Dead'
                      ? 
                      <i className="fas fa-cross fa-xs"> Dead</i>
                      : 'Unknown'}
                    </p>
                  </div>
                  <p>Gender: {gender}</p>
                  <p>Species: {species}</p>
                  <p>Origin: {origin.name}</p>
                  <p>Location: {location.name}</p>
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