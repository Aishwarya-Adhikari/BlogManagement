import React from 'react'
import Layout from '../../components/layout/layout'
import BlogForm from './components/form/BlogForm'

const EditBlog = () => {
  return (
   <Layout>
    <BlogForm type='Edit'/> {/* Updated to pass 'Edit' as type prop */}
   </Layout>
  )
}

export default EditBlog
