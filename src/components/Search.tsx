import {BaseSyntheticEvent, SyntheticEvent, useState} from "react";

const Search = (): JSX.Element => {

    const [form, setForm] = useState<string>(``)

    const handleSubmit = (e: BaseSyntheticEvent): void => {
        e.preventDefault()

        console.log(e)
        console.log(form)

        setForm(``)
    }

  return (
      <>
          <form onSubmit={handleSubmit}>

              <input

                  type="text"
                  value={form}
                  placeholder={`city`}
                  onChange={(e) => setForm(e.target.value)}
              />

              <button>Add City</button>

          </form>
      </>
  )
}

export default Search