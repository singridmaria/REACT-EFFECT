import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";


function App() {
  const [count, setCount] = useState(0)

  const [Lista, setLista] = useState([])

  const incrementar = () => {
    console.log('aumentou +10');
    setCount(count+10)
  }

  // 1 - Sempre executa na renderização
  useEffect(() => {
    console.log('Renderizou');
  })

    // 2 - Com o array de dependencial[], é onde insiro as variáveis que serão observadas
  useEffect(() => {
    if(count === 50)
    console.log('Renderizou 2!');
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      setLista(data.splice(0,10))
      console.log(data)
    })
  }, [])

  return (
    <>
    <div className="container">
      <h1>Album de fotos</h1>
    
    {/* <h1>{`Contador: ${count}`}</h1>
    <button onClick={incrementar}>+10</button> */}

    <div className="row row-cols-1 row-cols-md-6 g-4">
      {Lista.map((foto,index) => <Card key={index} title={foto.id} text={foto.title} img={foto.thumbnailUrl}/>  
        
      )}
      
        {/* <Card 
      title={1}
      text={'accusamus beatae ad facilis cum similique qui sunt'}
      img={'https://via.placeholder.com/150/92c952'}
      />    */}
   


    </div>
    </div>
    </>
  )
}

export default App
