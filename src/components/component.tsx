import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Box, Typography, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  industry: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      industry: ''
    }
  });

  useEffect(() => {
    if (errors) {
      console.error(errors);
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            type="text"
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Description"
            type="text"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />
      <InputLabel id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{ required: 'Industry is required' }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.industry}
            helperText={errors.industry?.message}
          >
            <MenuItem value={'technology'}>Technology</MenuItem>
            <MenuItem value={'finance'}>Finance</MenuItem>
            <MenuItem value={'healthcare'}>Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />
      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : 'Create Business Specification'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Box, Typography, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  industry: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      industry: ''
    }
  });

  useEffect(() => {
    if (errors) {
      console.error(errors);
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            type="text"
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Description"
            type="text"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />
      <InputLabel id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{ required: 'Industry is required' }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.industry}
            helperText={errors.industry?.message}
          >
            <MenuItem value={'technology'}>Technology</MenuItem>
            <MenuItem value={'finance'}>Finance</MenuItem>
            <MenuItem value={'healthcare'}>Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />
      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : 'Create Business Specification'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;