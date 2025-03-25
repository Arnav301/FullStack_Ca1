import ServiceCard from "./component/ServiceCard"

function App() {
  const data={
    Title : "Web Development",
    description : "All the solution of Web Development at one place.",
    
  }
  return(
    <>
    <ServiceCard data={data}/>
    </>
  )
}

export default App
