import { useRef } from 'react'
import { Link } from 'react-router-dom'

const UseRefExample1 = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const paragraphRef = useRef() as React.MutableRefObject<HTMLParagraphElement>

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    paragraphRef.current.innerHTML = `Submitted: ${inputRef.current.value}`
    inputRef.current.value = 'Nice'
    inputRef.current.style.backgroundColor = 'green'
  }

  return (
    <div className='w-25'>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p ref={paragraphRef}>Hit the button to submit</p>
        <p onClick={() => inputRef.current.focus()}>
          Click here to focus on the input field
        </p>
      </form>
      <Link to='/'>Back to HomePage</Link>
    </div>
  )
}

export default UseRefExample1
