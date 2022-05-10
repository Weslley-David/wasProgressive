import { db } from "./firebase-config";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"

function App() {
  const [projeto, setprojeto] = useState([])
  const [form, setForm] = useState({
    title: "",
    desc: "",
    ingredients: [""],
    steps: []
  })
  const [popupActive, setPopupActive] = useState(false)

  const projetoColletionRef = collection(db, "projeto")
  useEffect(() => {
    onSnapshot(projetoColletionRef, snapshot => {
      setprojeto(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  })

  const handleView = id => {
    const projetoclone = [...projeto]


    projetoclone.forEach(projeto => {
      if (projeto.id === id) {
        projeto.viewing = !projeto.viewing
      } else {
        projeto.viewing = false
      }
    })

    setprojeto(projetoclone)
  }


  const handleSubmit = e => {
    e.preventDefault()

    if (
      !form.title ||
      !form.desc ||
      !form.ingredients ||
      !form.steps
    ) {
      alert("Please fill out all fields")
      return
    }

    addDoc(projetoColletionRef, form)

    setForm({
      title: "",
      desc: "",
      ingredients: [],
      steps: []
    })

    setPopupActive(false)
  }

  const handleIngredient = (e, i) => {
    const ingredientsclone = [...form.ingredients]
    ingredientsclone[i] = e.target.value
    setForm({
      ...form,
      ingredients: ingredientsclone
    })
  }
  const handleStep = (e, i) => {
    const stepsClone = [...form.steps]

    stepsClone[i] = e.target.value

    setForm({
      ...form,
      steps: stepsClone
    })
  }
  const handleIngredientCount = () => {
    setForm({
      ...form,
      ingredients: [...form.ingredients, ""]
    })
  }

  const handleStepCount = () => {
    setForm({
      ...form,
      steps: [...form.steps, ""]
    })
  }
  const removeprojeto = id => {
    deleteDoc(doc(db, "projeto", id))
  }
  return (
    <div className="App">
      <h1>Lista</h1>
      <button onClick={() => setPopupActive(!popupActive)}>Add Coluna</button>

      <div className="projeto">
        {projeto.map((projeto, i) => (
          <div className="projetos" key={projeto.id}>
            <h3>{projeto.title}</h3>

            <p dangerouslySetInnerHTML={{ __html: projeto.desc }}></p>
            {projeto.viewing && <div>
              <h4>User</h4>

              <ul>
                {projeto.ingredients.map((ingredients, i) => (
                  <li key={i}>{ingredients}</li>))}
              </ul>
              <h4>passos</h4>
              <ol>
                {projeto.steps.map((steps, i) => (
                  <li key={i}>{steps}</li>))}
              </ol>

            </div>}
            <div className="buttons">
              <button onClick={() => handleView(projeto.id)}>View {projeto.viewing ? 'less' : 'more'}</button>
              <button className="remove" onClick={() => removeprojeto(projeto.id)}>Remove</button>
              <div className="buttons">


              </div>
            </div>
          </div>
        ))}
      </div>
      {popupActive && <div className="popup">
        <div className="popup-inner">
          <h2>ADD um novo projeto</h2>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                value={form.desc}
                onChange={e => setForm({ ...form, desc: e.target.value })} />
            </div>

            <div className="form-group">
              <label>User</label>
              {
                form.ingredients.map((ingredient, i) => (
                  <input
                    type="text"
                    key={i}
                    value={ingredient}
                    onChange={e => handleIngredient(e, i)} />
                ))
              }
              <button type="button" onClick={handleIngredientCount}>Add User</button>
            </div>

            <div className="form-group">
              <label>Steps</label>
              {
                form.steps.map((step, i) => (
                  <textarea
                    type="text"
                    key={i}
                    value={step}
                    onChange={e => handleStep(e, i)} />
                ))
              }
              <button type="button" onClick={handleStepCount}>Add step</button>
            </div>

            <div className="buttons">
              <button type="submit">Submit</button>
              <button type="button" className="remove" onClick={() => setPopupActive(false)}>Close</button>
            </div>

          </form>

        </div>
      </div>}
    </div>
  );
}

export default App;
