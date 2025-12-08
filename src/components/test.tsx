import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required')
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/tests');
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }
      setLoading(false);
    }
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Create a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="polite" className="text-red-500 text-sm">{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div role="alert" aria-live="polite" className="text-red-500 text-sm">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md font-semibold`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required')
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/tests');
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }
      setLoading(false);
    }
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Create a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="polite" className="text-red-500 text-sm">{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div role="alert" aria-live="polite" className="text-red-500 text-sm">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md font-semibold`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;