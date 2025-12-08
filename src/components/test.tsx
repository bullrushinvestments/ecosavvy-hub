import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { createTest } from './api/testApi'; // Assume this is your API call function

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm<TestFormValues>({
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      await createTest(data.title, data.description);
      reset();
    } catch (err) {
      setError('An error occurred while creating the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-4 space-y-6">
        {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
        <div>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Test Title"
                variant="outlined"
                fullWidth
                required
                aria-label="test-title"
                inputProps={{ 'aria-required': true }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Test Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                aria-label="test-description"
                inputProps={{ 'aria-required': true }}
              />
            )}
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-blue-500 text-white hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </Button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { createTest } from './api/testApi'; // Assume this is your API call function

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm<TestFormValues>({
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      await createTest(data.title, data.description);
      reset();
    } catch (err) {
      setError('An error occurred while creating the test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-4 space-y-6">
        {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
        <div>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Test Title"
                variant="outlined"
                fullWidth
                required
                aria-label="test-title"
                inputProps={{ 'aria-required': true }}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Test Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                aria-label="test-description"
                inputProps={{ 'aria-required': true }}
              />
            )}
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-blue-500 text-white hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </Button>
      </form>
    </div>
  );
};

export default WriteTests;