import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/layout'
import BlogForm from './components/form/BlogForm'


const AddBlog = () => {
  return (
    <Layout>
      <BlogForm type='Create'/>
    </Layout>
  )
}

export default AddBlog
