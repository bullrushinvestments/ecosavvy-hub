import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      console.error(err);
      setLoading(false);
    }
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement>();

  const router = useRouter();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
      router.push('/');
    } catch (err) {
      setError('Failed to add requirement.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error !== null ? (
        <p role="alert" aria-live="assertive">{error}</p>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className={`w-full px-3 py-2 border rounded-md ${errors.title ? 'border-red-500' : ''}`}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description', { required: true })}
                className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : ''}`}
              />
            </div>
            <button type="submit" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              Add Requirement
            </button>
          </form>

          {requirements.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-6">Requirements List</h2>
              <ul role="list" aria-label="List of requirements" className="mt-4 space-y-3">
                {requirements.map((requirement) => (
                  <li key={requirement.id} className="flex items-center justify-between border-b pb-1 mb-1 last:border-none last:mb-0">
                    <div>
                      <p className="text-gray-700">{requirement.title}</p>
                      <p className="text-sm text-gray-500">{requirement.description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded ${requirement.status === 'completed' ? 'bg-green-400 text-white' : 'bg-yellow-300 text-black'}`}>
                      {requirement.status}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      console.error(err);
      setLoading(false);
    }
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement>();

  const router = useRouter();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
      router.push('/');
    } catch (err) {
      setError('Failed to add requirement.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error !== null ? (
        <p role="alert" aria-live="assertive">{error}</p>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className={`w-full px-3 py-2 border rounded-md ${errors.title ? 'border-red-500' : ''}`}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description', { required: true })}
                className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : ''}`}
              />
            </div>
            <button type="submit" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              Add Requirement
            </button>
          </form>

          {requirements.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-6">Requirements List</h2>
              <ul role="list" aria-label="List of requirements" className="mt-4 space-y-3">
                {requirements.map((requirement) => (
                  <li key={requirement.id} className="flex items-center justify-between border-b pb-1 mb-1 last:border-none last:mb-0">
                    <div>
                      <p className="text-gray-700">{requirement.title}</p>
                      <p className="text-sm text-gray-500">{requirement.description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded ${requirement.status === 'completed' ? 'bg-green-400 text-white' : 'bg-yellow-300 text-black'}`}>
                      {requirement.status}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GatherRequirements;