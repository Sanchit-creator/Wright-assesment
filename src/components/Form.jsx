import styled from '@emotion/styled'
import { Box, Button, Input, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

const Container = styled(Box)`
    width: 70vw;
    min-height: 60vh;
    border: 1px solid #3E73D3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const MyComponent = styled(JoditEditor)`
    width: 85%
`

const Btn = styled(Button)`
    background-color: blue;
    color: white;
`

const Inp = styled(Input)`
    width: 85%;
`

const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const editor = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input fields
        if (title.trim() === '' || description.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields');
        } else {
            console.log('title:'+ title);
            console.log('description:' + description);
            console.log('content:' + content);
        }
    };

    const config = {
        placeholder: 'Type content...'
    }



  return (
    <>
      <Container component="form" onSubmit={handleSubmit}>
        <Typography variant="h2">Write Your Thoughts...</Typography>
        <Inp placeholder="Enter title..." value={title} onChange={handleTitle} required variant="solid" />
        <Inp placeholder="Enter description..." value={description} onChange={handleDescription} required variant="solid" />
        <MyComponent
			ref={editor}
			value={content}
			config={config}
			onChange={newContent => setContent(newContent)}
		/>
        <Btn type='submit'>Submit</Btn>
      </Container>  
    </>
  )
}

export default Form