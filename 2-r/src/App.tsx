import Card from "./Card"
function App() {

  function others (){
    return(
      <div className="text-center flex items-center justify-center flex-col p-3">
        <p className="font-thin text-xl">random text here</p>
        <p className="text-slate-400 font-mono text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem nemo rerum voluptates provident earum vitae sit praesentium deserunt id dolores delectus est recusandae incidunt, eum, enim iure necessitatibus omnis.
        Nesciunt consequuntur rec</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card  title={'No 1'} children={others()}/>
      <Card  title={'No 2'} children={others()}/>
      <Card  title={'No 3'} children={others()}/>
    </div>
  )
}

export default App
