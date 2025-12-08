import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IContentRequirements>();

  const onSubmit = (data: IContentRequirements) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className={`form-input ${errors.title ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          rows={5}
          className={`form-textarea ${errors.description ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <select
          id="targetAudience"
          {...register("targetAudience", { required: true })}
          multiple={true}
          className={`form-select ${errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="general">General</option>
          <option value="students">Students</option>
          <option value="professionals">Professionals</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <select
          id="contentTypes"
          {...register("contentTypes", { required: true })}
          multiple={true}
          className={`form-select ${errors.contentTypes ? 'border-red-500' : ''}`}
        >
          <option value="text">Text Articles</option>
          <option value="video">Videos</option>
          <option value="audio">Podcasts</option>
        </select>
      </div>

      <button type="submit" disabled={isLoading} className={`inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150 ${isLoading ? 'cursor-not-allowed' : ''}`}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IContentRequirements>();

  const onSubmit = (data: IContentRequirements) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className={`form-input ${errors.title ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          rows={5}
          className={`form-textarea ${errors.description ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <select
          id="targetAudience"
          {...register("targetAudience", { required: true })}
          multiple={true}
          className={`form-select ${errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="general">General</option>
          <option value="students">Students</option>
          <option value="professionals">Professionals</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <select
          id="contentTypes"
          {...register("contentTypes", { required: true })}
          multiple={true}
          className={`form-select ${errors.contentTypes ? 'border-red-500' : ''}`}
        >
          <option value="text">Text Articles</option>
          <option value="video">Videos</option>
          <option value="audio">Podcasts</option>
        </select>
      </div>

      <button type="submit" disabled={isLoading} className={`inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150 ${isLoading ? 'cursor-not-allowed' : ''}`}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;