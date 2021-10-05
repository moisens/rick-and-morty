import useFetch from '../../hooks/useFetch';

const Getsingledata = (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const { datas, error, status } = useFetch(url);
  //console.log('FROM SINGLE', datas);
  return (
    <>
      <p>Hello from single data</p>
    </>
  )
}

export default Getsingledata;
