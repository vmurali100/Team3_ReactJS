import React,{ useState } from 'react';
const [form, setform] = useState<any>({pageName: " ", description:" ",  createdBy:" ", ortext:" ",})

export  const Crud1 = () => {
    const addUser = () => {
        axios.post("http://172.22.68.241:9001/pageInfo/search", form).then((res) => {
          // navigate("/")
          console.log(res.data);
        })
      }

      const handleChange = (e) => {
        let myUser = { ...form }
        myUser[e.target.name]= e.target.value
        setform(myUser)
      }
      
      const clearForm = () => {
       setform({ pageName: "", description: "", createdBy: "", ortext: "" })
     }

  return (
    <div>
       <form action="">
       <label  id="formColumn" htmlFor="pageName" >Page <br/>name</label>
       <input type="text" name="pageName" value={form.pageName} style={{marginLeft:"40px"}}  onChange = {(e)=>{handleChange(e)}}/> 
       
       <label id="formColumn" htmlFor="description"  style={{marginLeft:"40px"}} >Description</label>
       <input type="text" name="description" id="formColumn" value={form.description} style={{marginLeft:"40px"}}  onChange = {(e)=>{handleChange(e)}}/> 
       
       <label id="formColumn"  htmlFor="createdBy" style={{marginLeft:"40px"}}>Created By </label>
       <input type="text" name="createdBy" id="formColumn" value={form.createdBy} style={{marginLeft:"40px"}}  onChange = {(e)=>{handleChange(e)}}/> 
       
       <label id="formColumn" htmlFor="ortext" style={{marginLeft:"40px"}}>ORFREE <br/>text </label>
       <input type="text" name="ortext" id="formColumn" value={form.ortext} style={{marginLeft:"40px"}}  onChange = {(e)=>{handleChange(e)}}/> 
       <br />
       <button  type="button" className="search" style={{background:"yellowgreen", height:"10px;"}} onClick={addUser} >Search</button>
       </form> 
    </div>
  )
}
export default Crud1;